<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex h-full text-[10pt]">
  <div
    class="fixed mr-20 flex h-[calc(100vh-64px)] w-52 shrink-0 flex-col justify-between pb-6 pt-20"
  >
    <div class="border-l-2 border-solid border-neutral-300 px-2 dark:border-neutral-600">
      <h2 class="mb-2 text-[11pt] font-medium">SEGMENT COLLECTIONS</h2>
      <div class="flex flex-col">
        <a
          class:font-bold={$page.url.pathname.includes("/marketplace/crypto-punk-4486")}
          class="hover:italic"
          href="/marketplace/crypto-punk-4486">CRYPTO PUNK #4486</a
        >
        <a
          class:font-bold={$page.url.pathname.includes("/marketplace/bored-ape-387")}
          class="hover:italic"
          href="/marketplace/bored-ape-387">BORED APE #387</a
        >
      </div>
    </div>

    {#if $page.url.pathname.includes("punk")}
      <div
        class="flex flex-col border-l-2 border-solid border-neutral-300 p-2 px-2 text-[8pt] text-neutral-500 dark:border-neutral-600 dark:text-neutral-400"
      >
        <p>LARVA LABS</p>
        <p>CRYPTO PUNK #4486</p>
        <p>RESOLUTION: 32x32</p>
        <img src="/img/nft-placeholders/punk.png" alt="original nft" class="mt-2 w-full" />
      </div>
    {/if}
    {#if $page.url.pathname.includes("ape")}
      <div
        class="flex flex-col border-l-2 border-solid border-neutral-300 p-2 px-2 text-[8pt] text-neutral-500 dark:border-neutral-600 dark:text-neutral-400"
      >
        <p>YUGA LABS</p>
        <p>BORED APE #387</p>
        <p>RESOLUTION 516x516</p>
        <img src="/img/nft-placeholders/ape.png" alt="original nft" class="mt-2 w-full" />
      </div>
    {/if}
  </div>
  <div class="mr-14 w-52 shrink-0" />
  <div class="flex flex-grow">
    <slot />
  </div>
</div>
