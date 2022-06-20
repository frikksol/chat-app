<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let src: string;
  export let alt: string;
  export let color: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mx-12 mt-12 w-16
            border-4 border-black drop-shadow-block
            {color} hover:bg-white"
>
  <img class="p-3" {src} {alt} />
</button>
