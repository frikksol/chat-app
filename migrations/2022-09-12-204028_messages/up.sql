-- Your SQL goes here
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    room VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    message TEXT NOT NULL
);