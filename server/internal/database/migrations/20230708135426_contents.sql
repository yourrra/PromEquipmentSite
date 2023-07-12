-- +goose Up
-- +goose StatementBegin
CREATE TABLE contents
(
    id SERIAL PRIMARY KEY  NOT NULL,
    page_id INTEGER  NOT NULL,
    "type" TEXT  NOT NULL,
    content TEXT  NOT NULL,
    alt TEXT
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
