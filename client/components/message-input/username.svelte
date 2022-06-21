<script lang="ts">
  import { onMount } from "svelte";
  import { setUsername } from "../../stores/message-store";

  let username: string = "user";

  onMount(async () => {
    setUsername(username);
  });

  function keyDownUsername(event: any) {
    if (event.key === "Enter" || event.key === "Tab") {
      setUsername(username);
    }
  }
</script>

<h1 class="mx-8 mt-4">Username:</h1>
<input
  type="text"
  bind:value={username}
  on:keydown={keyDownUsername}
  class="w-32 p-4 rounded-none bg-yellow-200 h-12 mt-2 text-center"
/>
