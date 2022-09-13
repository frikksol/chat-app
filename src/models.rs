use serde::{Serialize, Deserialize};

use crate::schema::messages;

#[derive(Debug, Insertable, Deserialize, Clone)]
#[diesel(table_name = messages)]
pub struct NewMessage {
    pub room: String,
    pub username: String,
    pub message: String
}

#[derive(Debug, Queryable, AsChangeset, Serialize, Clone)]
pub struct Message {
    pub id: i32,
    pub room: String,
    pub username: String,
    pub message: String
}
