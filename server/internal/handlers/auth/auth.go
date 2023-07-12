package handlers

import (
	"net/http"
	"server/internal/services/auth"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type HandlerAuth struct {
	ServiceAuth *auth.AuthService
}

type LoginData struct {
	Login    string `json:"login" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func (h *HandlerAuth) Auth(c *gin.Context) {
	var body LoginData
	err := c.BindJSON(&body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"err":     true,
			"message": "Invalid body request",
		})
		return
	}

	ok, err := h.ServiceAuth.CheckLoginAndPasswordAdmin(body.Login, body.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"err":     true,
			"message": err.Error(),
		})
		return
	}

	if ok {
		myEnv, _ := godotenv.Read()
		domain := myEnv["DOMAIN"]
		token, err := h.ServiceAuth.GetJWT()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"err":     true,
				"message": err.Error(),
			})
			return
		}

		c.SetCookie("token", token, 1600, "/", domain, true, true)
	}
	c.JSON(http.StatusOK, gin.H{
		"err":     false,
		"message": "Ok",
	})
}
