import { browser } from "$app/env";
import { writable } from "svelte/store";

export interface Message {
  room: string;
  username: string;
  message: string;
}

export async function sendMessage(message: Message): Promise<void> {
  const response = await fetch("http://127.0.0.1:8000/message", {
    method: "POST",
    body: new URLSearchParams({
      room: message.room,
      username: message.username,
      message: message.message,
    }),
  });

  if (response.ok) {
    console.log("success");
  }
}

export const messageStore = writable<Message[]>();

export async function subscribeToChannel(room: string) {
  const uri = `http://127.0.0.1:8000/events`;
  var retryTime = 1;

  if (browser) {
    const events = new EventSource(uri);

    // Subscribe to messages
    events.onmessage = (event) => {
      console.log("Event received");
      console.log(JSON.stringify(event.data));
      const message = JSON.parse(event.data) as Message;
      if (message.room == room) {
        messageStore.update((messages) => {
          if (!messages) {
            messages = [];
          }
          console.log(messages);
          console.log(message);
          messages.push(message);
          return messages;
        });
      }
    };

    // Subscribe to connection opened events
    events.onopen = () => {
      console.log(`connected to event stream at ${uri}`);
      retryTime = 1;
    };

    // Subscribe to error events
    events.onerror = () => {
      events.close();

      let timeout = retryTime;
      retryTime = Math.min(64, retryTime * 2);
      console.log(`connection lost. attempting to reconnect in ${timeout}s`);
      setTimeout(() => subscribeToChannel(uri), (() => timeout * 1000)());
    };
  }
}
