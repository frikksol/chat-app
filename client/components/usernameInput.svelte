<script lang="ts">
  import { onMount } from "svelte";
  import { setUsername } from "../stores/message-store";

  let username: string = "user";

  onMount(async () => {
    setUsername(username);
  });

  function onChange() {
    setUsername(username);
  }
</script>

<h1 class="xl:mx-8 mr-8 mt-4">Username:</h1>
<input
  type="text"
  bind:value={username}
  on:change={onChange}
  class="w-32 p-4 rounded-none bg-emerald-600 h-12 mt-2 text-center"
/>
