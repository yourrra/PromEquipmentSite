package auth

import (
	"crypto/md5"
	"fmt"
	"reflect"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/joho/godotenv"
)

func GenerateJWT(times time.Time) (string, error) {
	myEnv, _ := godotenv.Read()
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["exp"] = times
	tokenString, err := token.SignedString([]byte(myEnv["JWT_SECRET"]))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func ValidateJWT(token string) bool {
	myEnv, _ := godotenv.Read()
	secret := myEnv["JWT_SECRET"]
	_, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})
	return err == nil
}

func GenerateJWTWithClaims(claims map[string]string) (string, error) {
	myEnv, _ := godotenv.Read()
	token := jwt.New(jwt.SigningMethodHS256)
	newClaims := token.Claims.(jwt.MapClaims)
	keys := reflect.ValueOf(claims).MapKeys()
	for _, el := range keys {
		newClaims[el.String()] = claims[el.String()]
	}
	tokenString, err := token.SignedString([]byte(myEnv["JWT_SECRET"]))
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func GenerateJWTRefreshAndAccess(id string) (string, string, error) {
	myEnv, _ := godotenv.Read()
	accessToken := jwt.New(jwt.SigningMethodHS256)
	accessClaims := accessToken.Claims.(jwt.MapClaims)
	accessClaims["exp"] = time.Now().Local().Add(time.Minute * 5)
	accessClaims["id"] = id
	accessTokenString, err := accessToken.SignedString([]byte(myEnv["JWT_SECRET_ACCESS"]))
	if err != nil {
		return "", "", err
	}

	refreshToken := jwt.New(jwt.SigningMethodHS256)
	refreshClaims := refreshToken.Claims.(jwt.MapClaims)
	refreshClaims["exp"] = time.Now().Local().Add(time.Hour * 24 * 30) // 30 days
	refreshClaims["id"] = id
	refreshTokenString, err := refreshToken.SignedString([]byte(myEnv["JWT_SECRET_REFRESH"]))
	if err != nil {
		return "", "", err
	}

	return accessTokenString, refreshTokenString, nil
}

func CreateSum(data string) string {
	myEnv, _ := godotenv.Read()
	salt := myEnv["SALT"]
	h := md5.Sum([]byte(data + salt))
	return fmt.Sprintf("%x", h)
}
