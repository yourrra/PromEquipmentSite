package repository

import "github.com/jmoiron/sqlx"

type Users struct {
	DB            *sqlx.DB
	Login         string `db:"login"`
	Password_hash string `db:"password_hash"`
}

func (u *Users) GetAdmin() (Users, error) {
	admin := Users{}
	err := u.DB.Get(admin, "SELECT * from admin WHERE id = 1")
	return admin, err
}
