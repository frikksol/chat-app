<script lang="ts">
  import { onMount } from "svelte";
  import { setRoom } from "../stores/message-store";

  let room: string = "main";

  onMount(async () => {
    setRoom(room);
  });

  function onChange() {
    setRoom(room);
  }
</script>

<h1 class="mr-8 mt-4">Room</h1>
<input
  type="text"
  bind:value={room}
  on:change={onChange}
  class="w-32 p-4 rounded-none bg-emerald-600 h-12 mt-2 text-center"
/>
