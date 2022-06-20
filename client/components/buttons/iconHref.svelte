<script lang="ts">
  export let link: string;
  export let src: string;
  export let alt: string;
  export let color: string;
</script>

<a href={link}>
  <img
    class="p-3 mx-12 mt-12 w-16 h-16
        border-4 border-black drop-shadow-block
        {color} hover:bg-white"
    {src}
    {alt}
  />
</a>
