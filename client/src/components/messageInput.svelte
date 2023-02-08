<script lang="ts">
  import { sendMessage } from "../stores/message-store";

  let message: string = "";

  function keyUpMessage(event: any) {
    if (event.key === "Enter") {
      send();
    }
  }

  function send() {
    sendMessage(message);
    console.log(message);
    message = "";
  }
</script>

<div
  class="w-auto h-auto my-12 border-4 border-black drop-shadow-block bg-white"
>
  <div
    class="w-auto h-auto -mt-1 -mx-1 p-4 border-4 border-black bg-yellow-300"
  >
    <h1 class="font-sans font-semibold text-lg">New Message</h1>
  </div>

  <div class="w-auto h-auto">
    <div class="flex flex-row">
      <input
        type="text"
        placeHolder="Type message here"
        bind:value={message}
        on:keyup={keyUpMessage}
        class="w-full p-4 rounded-none"
      />
      <button
        on:click={send}
        class="m-2 w-16 border-4 border-black drop-shadow-block bg-yellow-300 hover:bg-white"
      >
        <img class="p-3" src="send.png" alt="send-icon" />
      </button>
    </div>
  </div>
</div>
