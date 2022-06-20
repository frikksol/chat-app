<script lang="ts">
  import { afterUpdate } from "svelte";
  import { messageStore } from "../stores/message-store";
  import MessageField from "./messageField.svelte";

  afterUpdate(() => {
    const el = document.querySelector("#scroll-to");
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  });
</script>

<div class="w-auto h-auto my-12">
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
<div id="scroll-to" />
