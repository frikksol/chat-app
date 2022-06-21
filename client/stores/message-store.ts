import { browser } from "$app/env";
import { writable } from "svelte/store";

export interface Message {
  room: string;
  username: string;
  message: string;
}

export let chosenRoom = "";
export let chosenUsername = "";
export const messageStore = writable<Message[]>();

export function setRoom(room: string) {
  chosenRoom = room;
  subscribeToRoom(room);
}

export function setUsername(username: string): void {
  chosenUsername = username;
}

export async function sendMessage(message: string): Promise<void> {
  const uri = "https://chat-app-2x7ycovpza-ew.a.run.app/message";
  //const uri = "http://127.0.0.1:8000/message";
  const response = await fetch(uri, {
    method: "POST",
    body: new URLSearchParams({
      room: chosenRoom,
      username: chosenUsername,
      message: message,
    }),
  });

  if (response.ok) {
    console.log("success");
  }
}

export async function subscribeToRoom(room: string) {
  const uri = `https://chat-app-2x7ycovpza-ew.a.run.app/events`;
  //const uri = `http://127.0.0.1:8000/events`;

  // Empty the message list
  messageStore.update(() => {
    return [];
  });

  var retryTime = 1;

  if (browser) {
    const events = new EventSource(uri);

    // Subscribe to messages
    events.onmessage = (event) => {
      console.log("Event received: ");
      console.log(JSON.stringify(event.data));
      const message = JSON.parse(event.data) as Message;
      if (message.room == room) {
        messageStore.update((messages) => {
          if (!messages) {
            messages = [];
          }
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
      setTimeout(() => subscribeToRoom(uri), (() => timeout * 1000)());
    };
  }
}
