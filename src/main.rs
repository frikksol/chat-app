mod db;
mod schema;
mod models;
mod routes;

#[macro_use]
extern crate diesel;

#[macro_use]
extern crate rocket;

use rocket::fairing::{Fairing, Kind, Info};
use rocket::http::Header;
use rocket::{Request, Response};
use rocket::tokio::sync::broadcast::{channel};

use crate::models::{Message};
use crate::routes::message_routes::*;
use crate::routes::event_routes::*;


pub struct CORS;
#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .manage(channel::<Message>(1024).0)
        //.attach(Db::fairing())
        .attach(CORS)
        .mount("/events", routes![realtime_events])
        .mount("/messages", routes![
            get_messages_for_room,
            get_all_messages,
            create_message
        ]
    )
}