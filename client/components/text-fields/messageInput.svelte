<script lang="ts">
  import { sendMessage, type Message } from "../../stores/message-store";

  let message: string = "";
  export let headerColor: string;

  function keyUp(event: any) {
    if (event.key === "Enter") {
      send();
    }
  }

  function send() {
    const messageObject: Message = {
      room: "main",
      username: "user",
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
        <h1 class="font-sans font-semibold text-lg">New Message</h1>
      </div>
      <div class="grow" />
      <div class="flex-none">
        <button
          on:click={send}
          class="mx-2 w-16
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
      on:keyup={keyUp}
      class="w-full p-4 rounded-none"
    />
  </div>
</div>
