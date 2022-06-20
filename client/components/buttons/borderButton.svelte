<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let text: string;
  export let color: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="p-2 my-5 
            border-4 border-black drop-shadow-block 
            {color} hover:bg-white 
            font-semibold uppercase"
>
  <h1>{text}</h1>
</button>
