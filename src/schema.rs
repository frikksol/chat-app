// @generated automatically by Diesel CLI.

diesel::table! {
    messages (id) {
        id -> Int4,
        room -> Varchar,
        username -> Varchar,
        message -> Text,
    }
}