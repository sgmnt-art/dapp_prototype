<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex h-full">
  <div class="h-full w-52 shrink-0 items-center space-x-8 py-6">
    <div class="flex flex-col border-l-2 border-solid border-neutral-300 pl-2">
      <a
        class:font-medium={$page.url.pathname.includes("/development/contract")}
        href="/development/contract">Contract Interaction</a
      >
      <a
        class:font-medium={$page.url.pathname.includes("/development/signal")}
        href="/development/signal">Signal Service</a
      >
    </div>
  </div>
  <div class="flex flex-grow flex-col p-6">
    <slot />
  </div>
</div>
