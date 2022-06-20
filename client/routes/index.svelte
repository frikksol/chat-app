<script lang="ts">
  import MessageInput from "../components/text-fields/messageInput.svelte";
  import MessageList from "../components/text-fields/messageList.svelte";
</script>

<svelte:head>
  <title>Frikk Herding</title>
</svelte:head>

<div class="min-w-full min-h-screen bg-emerald-600">
  <div class="xl:px-60 px-6 xl:pt-40 pt-12">
    <h1 class="text-5xl text-black font-bold">Realtime Chat App</h1>
    <div class="flex flex-col h-full">
      <MessageList />
      <div class="justify-end">
        <MessageInput headerColor="bg-yellow-300" />
      </div>
    </div>
  </div>
</div>
