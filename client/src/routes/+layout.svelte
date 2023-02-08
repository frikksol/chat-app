<script>
  import "../app.css";
  import BottomBar from "../components/bottomBar.svelte";
</script>

<main class="w-screen h-screen">
  <div class="static">
    <slot />
  </div>
  <BottomBar />
</main>
