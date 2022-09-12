use rocket::{State, serde::json::Json};
use rocket::tokio::sync::broadcast::{Sender};
use diesel::prelude::*;

use crate::models::{NewMessage, Message};
use crate::db::establish_connection;
use crate::schema::messages::dsl::*;


#[post("/", data = "<input_message>")]
pub async fn create_message(input_message: Json<NewMessage>, queue: &State<Sender<Message>>) -> Json<Message> {
    println!("Creating message: {:?}", input_message);

    let connection = &mut establish_connection();
    let decoded_message = input_message.into_inner();

    // Add to database
    let inserted_message: Message = diesel::insert_into(messages)
        .values(&decoded_message)
        .get_result(connection)
        .expect("Error saving new message");

    // Add to realtime queue
    queue.send(inserted_message.clone())
        .expect("Error when putting inserted message on queue");

    // Return the inserted message
    return Json(inserted_message);
}

#[get("/")]
pub async fn get_all_messages() -> Json<Vec<Message>> {
    println!("Getting all messages");

    let connection = &mut establish_connection();

    let results = messages
        .load::<Message>(connection)
        .expect("Error when loading messages");

    return Json(results);
}

#[get("/<room_name>")]
pub async fn get_messages_for_room(room_name: String) -> Json<Vec<Message>> {
    println!("Getting all messages for room {:?}", room_name);

    let connection = &mut establish_connection();

    let results = messages
        .filter(room.eq(room_name))
        .load::<Message>(connection)
        .expect("Error when loading messages");

    return Json(results);
}