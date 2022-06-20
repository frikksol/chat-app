<script lang="ts">
  import { onMount } from "svelte";
  import {
    messageStore,
    subscribeToChannel,
    type Message,
  } from "../../stores/message-store";
  import MessageField from "./messageField.svelte";

  let messages: Message[] = [
    //{ sender: "Potato", message: "Hello", timestamp: new Date() },
    //{ sender: "Banana", message: "Yo", timestamp: new Date() },
  ];

  onMount(async () => {
    await subscribeToChannel("main");
  });
</script>

<div
  class="w-auto h-auto my-12
                "
>
  {#if $messageStore}
    <ul>
      {#each $messageStore as message}
        <li>
          <MessageField headerColor="bg-blue-300" {message} />
        </li>
      {/each}
    </ul>
  {:else}
    Loading
  {/if}
</div>
