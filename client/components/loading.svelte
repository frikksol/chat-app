<script lang="ts">
  import { Diamonds } from "svelte-loading-spinners";
</script>

<nav class="flex justify-center w-full h-54 my-32">
  <div class="flex flex-col items-center justify-center">
    <Diamonds size="200" color="#000000" unit="px" duration="2s" />
    <h1 class="text-xl mt-10 font-bold">Loading chats</h1>
    <p class="mt-6">
      The first time using the app, this can take a couple of minutes
      <br /><br />
      This is due to using free docker hosting that takes a while to spin up
    </p>
  </div>
</nav>
