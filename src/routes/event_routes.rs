use rocket::{State, Shutdown};
use rocket::response::stream::{EventStream, Event};
use rocket::tokio::sync::broadcast::{Sender, error::RecvError};
use rocket::tokio::select;

use crate::models::{Message};

#[get("/")]
pub async fn realtime_events(queue: &State<Sender<Message>>, mut end: Shutdown) -> EventStream![] {
    println!("Attaching to realtime events");

    let mut rx = queue.subscribe();
    EventStream! {
        loop {
            let msg = select! {
                msg = rx.recv() => match msg {
                    Ok(msg) => msg,
                    Err(RecvError::Closed) => break,
                    Err(RecvError::Lagged(_)) => continue,
                },
                _ = &mut end => break,
            };

            yield Event::json(&msg);
        }
    }
}
