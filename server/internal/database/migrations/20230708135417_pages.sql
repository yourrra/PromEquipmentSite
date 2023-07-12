-- +goose Up
-- +goose StatementBegin
CREATE TABLE pages
(
    id SERIAL PRIMARY KEY  NOT NULL,
    priority INTEGER[],
    title TEXT  NOT NULL,
    url TEXT  NOT NULL
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
