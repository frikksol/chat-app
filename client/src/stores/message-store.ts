import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { Env } from "../lib/env";

export interface Message {
  room: string;
  username: string;
  message: string;
}

export const messageStore = writable<Message[]>();

let chosenRoom = "";
let chosenUsername = "";

export function setRoom(room: string) {
  chosenRoom = room;
  subscribeToRoom(room);
}

export function setUsername(username: string): void {
  chosenUsername = username;
}

export function getUsername(): string {
  return chosenUsername;
}

export async function sendMessage(message: string): Promise<void> {
  const uri = `${Env.getApiBaseUri()}/messages`;
  const response = await fetch(uri, {
    method: "POST",
    body: JSON.stringify({
      room: chosenRoom,
      username: chosenUsername,
      message: message,
    }),
  });

  if (response.ok) {
    console.log("success");
  } else {
    console.log(response.statusText);
  }
}

export async function subscribeToRoom(room: string) {
  const uri = `${Env.getApiBaseUri()}/events`;

  // Reset the message list
  const existingMessagesForRoom = await getExistingMessagesForRoom(room);
  messageStore.update(() => {
    return existingMessagesForRoom;
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

  async function getExistingMessagesForRoom(
    roomName: string
  ): Promise<Message[]> {
    Env.getApiBaseUri();
    const uri = `${Env.getApiBaseUri()}/messages/${roomName}`;
    const response = await fetch(uri);

    if (response.ok) {
      const result = await response.json();
      return result as Message[];
    } else {
      console.log(response.statusText);
      return [];
    }
  }
}
