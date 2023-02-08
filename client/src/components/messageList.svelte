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

<div class="w-auto h-auto mt-10">
  {#each $messageStore as message}
    <li>
      <MessageField {message} />
    </li>
  {/each}
</div>
<div id="scroll-to" />
