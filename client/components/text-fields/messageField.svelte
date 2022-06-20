<script lang="ts">
  import type { Message } from "../../stores/message-store";

  export let headerColor: string;
  export let message: Message;
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
    <h1 class="font-sans font-semibold text-lg">
      {message.username}
    </h1>
  </div>
  <div class="w-auto h-auto p-4">
    {message.message}
  </div>
</div>
