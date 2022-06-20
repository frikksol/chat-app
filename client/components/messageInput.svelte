<script lang="ts">
  import { sendMessage } from "../stores/message-store";
  import Header from "./message-input/header.svelte";

  let message: string = "";

  function keyUpMessage(event: any) {
    if (event.key === "Enter") {
      send();
    }
  }

  function send() {
    sendMessage(message);
    console.log(message);
  }
</script>

<div
  class="w-auto h-auto my-12
            border-4 border-black drop-shadow-block 
            bg-white"
>
  <Header />

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
