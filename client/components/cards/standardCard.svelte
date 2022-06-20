<script lang="ts">
  export let headerColor: string;
  export let bodyColor: string;
  export let title: string;
</script>

<div
  class="w-auto h-auto my-12
            border-4 border-black drop-shadow-block 
            {bodyColor}"
>
  <div
    class="w-auto h-auto -mt-1 -mx-1 p-4
                border-4 border-black
                {headerColor}"
  >
    <h1 class="uppercase font-sans font-semibold text-lg">{title}</h1>
  </div>
  <div class="w-auto h-auto p-4">
    <slot />
  </div>
</div>
