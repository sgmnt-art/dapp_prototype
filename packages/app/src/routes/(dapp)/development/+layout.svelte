<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex text-[10pt]">
  <div
    class="fixed mb-6 mt-20 w-52 shrink-0 items-center border-l-2 border-solid border-neutral-300 px-2"
  >
    <h2 class="mb-2 text-[11pt] font-medium">DEVELOPMENT MENU</h2>
    <div class="flex flex-col">
      <a
        class:font-bold={$page.url.pathname.includes("/development/contract")}
        class="hover:italic"
        href="/development/contract">CONTRACT INTERACTION</a
      >
      <a
        class:font-bold={$page.url.pathname.includes("/development/signal")}
        class="hover:italic"
        href="/development/signal">SIGNAL SERIVCE</a
      >
    </div>
  </div>
  <div class="w-52 shrink-0" />
  <div class="flex flex-grow flex-col p-6 pt-16">
    <slot />
  </div>
</div>
