package repository

import "github.com/jmoiron/sqlx"

type Page struct {
	db       *sqlx.DB
	Id       int    `db:"id"`
	Priority []int  `db:"priority"`
	Title    string `db:"title"`
	Url      string `db:"url"`
}
