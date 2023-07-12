package auth

import (
	"server/internal/database/repository"
	"server/pkg/auth"
	"time"
)

type AuthService struct {
	Repo *repository.Users
}

func (a *AuthService) CheckLoginAndPasswordAdmin(login, password string) (bool, error) {
	admin, err := a.Repo.GetAdmin()
	if err != nil {
		return false, err
	}

	passwordHash := auth.CreateSum(password)

	if login == admin.Login && admin.Password_hash == passwordHash {
		return true, nil
	}
	return false, nil
}

func (a *AuthService) GetJWT() (string, error) {
	return auth.GenerateJWT(time.Now().Add(time.Hour))
}
