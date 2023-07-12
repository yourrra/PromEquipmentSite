package handlers

import (
	"net/http"
	"server/pkg/auth"

	"github.com/gin-gonic/gin"
)

func RoleAdmin(c *gin.Context) {
	token, err := c.Cookie("token")
	if err == nil && token == "" {
		token = c.GetHeader("token")
	}
	if err != nil {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"err":     true,
			"message": "Token not found",
		})
		return
	}
	if !auth.ValidateJWT(token) {
		c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
			"err":     true,
			"message": "Token not valid",
		})
		return
	}
	c.Next()
}
