package repository

import "github.com/jmoiron/sqlx"

type Content struct {
	db      *sqlx.DB
	Id      int    `db:"id" json:"id"`
	PageId  int    `db:"page_id" json:"page_id"`
	Class   string `db:"type" json:"type"`
	Content string `db:"content" json:"content"`
	Alt     string `db:"alt" json:"alt"`
}

func (c *Content) GetContentsById(idPage int) ([]Content, error) {
	content := []Content{}
	err := c.db.Select(&content, `SELECT * FROM contents WHERE page_id = $1`, idPage)
	return content, err
}

func (c *Content) CreateContent(content Content) error {
	_, err := c.db.Exec(`INSERT INTO contents (page_id, type, content, alt) VALUES ($1, $2, $3, $4)`, content.PageId, content.Class, content.Content, content.Alt)
	return err
}

func (c *Content) UpdateContent(id int, content string, class string) error {
	_, err := c.db.Exec(`UPDATE contents SET content = $1, type = $2 WHERE id = $3`, content, class, id)
	return err
}
