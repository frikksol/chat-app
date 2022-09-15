<script lang="ts">
  import Room from "./roomInput.svelte";
  import Username from "./usernameInput.svelte";
</script>

<nav class="xl:px-60 px-6 bg-emerald-700 border-t-4 border-black pt-4 pb-6">
  <div class="flex flex-row">
    <div class="flex-none">
      <div class="flex flex-row">
        <Room />
        <Username />
      </div>
    </div>
  </div>
</nav>
