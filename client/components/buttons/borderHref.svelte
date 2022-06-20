<script lang="ts">
  export let text: string;
  export let link: string;
  export let color: string;
</script>

<div
  class="p-2 my-5 w-fit
            border-4 border-black drop-shadow-block 
            font-semibold uppercase
            {color} hover:bg-white"
>
  <a href={link}>
    <h1>
      {text}
    </h1>
  </a>
</div>
