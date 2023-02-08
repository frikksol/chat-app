<script lang="ts">
  import { getUsername, type Message } from "../stores/message-store";

  export let message: Message;
  const messageIsFromThisUser = getUsername() === message.username;
  const headerColor = messageIsFromThisUser ? "bg-gray-500" : "bg-blue-500";
  const textAlignment = messageIsFromThisUser ? "text-right" : "text-left";
</script>

<div
  class="w-auto h-auto my-8 border-4 border-black drop-shadow-block bg-white"
>
  <div
    class="w-auto h-auto -mt-1 -mx-1 p-4 border-4 border-black {headerColor}"
  >
    <h1 class="font-sans font-semibold text-lg {textAlignment}">
      {message.username}
    </h1>
  </div>
  <div class="w-auto h-auto p-4">
    {message.message}
  </div>
</div>
