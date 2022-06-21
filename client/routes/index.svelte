<script lang="ts">
  import MessageInput from "../components/messageInput.svelte";
  import MessageList from "../components/messageList.svelte";
</script>

<svelte:head>
  <title>Chat App</title>
</svelte:head>

<div class="min-w-full min-h-screen bg-emerald-600">
  <div class="xl:px-60 px-6 xl:pt-40 pt-12">
    <h1 class="text-5xl text-black font-bold">Realtime Chat App</h1>
    <div class="flex flex-col h-full">
      <MessageList />
      <div class="justify-end">
        <MessageInput />
      </div>
    </div>
  </div>
</div>
