package main

import (
	"fmt"
	"log"
	"server/internal/database/repository"
	handlers "server/internal/handlers/auth"
	"server/internal/services/auth"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	r := gin.Default()

	secret, err := godotenv.Read(".env")
	if err != nil {
		log.Fatal(err)
	}

	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		secret["DB_HOST"], secret["DB_PORT"], secret["POSTGRES_USER"], secret["POSTGRES_PASSWORD"], secret["POSTGRES_DB"])

	db, err := sqlx.Connect(secret["DB_DRIVER"], dsn)

	if err != nil {
		log.Println(err)
	}

	handlerAuth := handlers.HandlerAuth{
		ServiceAuth: &auth.AuthService{
			Repo: &repository.Users{
				DB: db,
			},
		},
	}

	r.POST("/auth", handlerAuth.Auth)

	r.GET("/config", func(ctx *gin.Context) {})

	r.Run(secret["HOST"] + ":" + string(secret["PORT"]))
}
