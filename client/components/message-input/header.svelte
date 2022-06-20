<script lang="ts">
  import Room from "./room.svelte";
  import Username from "./username.svelte";
</script>

<div
  class="w-auto h-auto -mt-1 -mx-1 p-4
                  border-4 border-black
                  bg-yellow-300"
>
  <div class="flex flex-row">
    <div class="flex-none">
      <div class="flex flex-col">
        <h1 class="font-sans font-semibold text-lg">New Message</h1>
        <div class="flex flex-row">
          <Room />
          <Username />
          />
        </div>
      </div>
    </div>
    <div class="grow" />
    <div class="flex-none">
      <button
        class="mx-2 mt-2 w-16
              border-4 border-black drop-shadow-block
              bg-yellow-300 hover:bg-white"
      >
        <img class="p-3" src="send.png" alt="send-icon" />
      </button>
    </div>
  </div>
</div>
