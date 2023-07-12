-- +goose Up
-- +goose StatementBegin
CREATE TABLE users 
(
    id SERIAL PRIMARY KEY  NOT NULL,
    login TEXT NOT NULL UNIQUE,
    password_hash TEXT  NOT NULL
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
