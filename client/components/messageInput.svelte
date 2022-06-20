<script lang="ts">
  import { onMount } from "svelte";
  import {
    sendMessage,
    setRoom,
    setUsername,
    type Message,
  } from "../stores/message-store";

  export let headerColor: string;
  let room: string = "main";
  let username: string = "user";
  let message: string = "";

  onMount(async () => {
    setRoom(room);
    setUsername(username);
  });

  function keyUpMessage(event: any) {
    if (event.key === "Enter") {
      send();
    }
  }

  function keyUpRoom(event: any) {
    if (event.key === "Enter") {
      setRoom(room);
    }
  }

  function keyUpUsername(event: any) {
    if (event.key === "Enter") {
      setUsername(username);
    }
  }

  function send() {
    const messageObject: Message = {
      room: room,
      username: username,
      message: message,
    };

    sendMessage(messageObject);
    console.log(message);
  }
</script>

<div
  class="w-auto h-auto my-12
            border-4 border-black drop-shadow-block 
            bg-white"
>
  <div
    class="w-auto h-auto -mt-1 -mx-1 p-4
                border-4 border-black
                {headerColor}"
  >
    <div class="flex flex-row">
      <div class="flex-none">
        <div class="flex flex-col">
          <h1 class="font-sans font-semibold text-lg">New Message</h1>
          <div class="flex flex-row">
            <h1 class="mr-8 mt-4">Room:</h1>
            <input
              type="text"
              bind:value={room}
              on:keyup={keyUpRoom}
              class="w-32 p-4 rounded-none bg-yellow-200 h-12 mt-2 text-center"
            />
            <h1 class="mx-8 mt-4">Username</h1>
            <input
              type="text"
              bind:value={username}
              on:keyup={keyUpUsername}
              class="w-32 p-4 rounded-none bg-yellow-200 h-12 mt-2 text-center"
            />
          </div>
        </div>
      </div>
      <div class="grow" />
      <div class="flex-none">
        <button
          on:click={send}
          class="mx-2 mt-2 w-16
            border-4 border-black drop-shadow-block
            bg-yellow-300 hover:bg-white"
        >
          <img class="p-3" src="send.png" alt="send-icon" />
        </button>
      </div>
    </div>
  </div>

  <div class="w-auto h-auto">
    <input
      type="text"
      placeHolder="Type message here"
      bind:value={message}
      on:keyup={keyUpMessage}
      class="w-full p-4 rounded-none"
    />
  </div>
</div>
