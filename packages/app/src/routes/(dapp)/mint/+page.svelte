<script lang="ts">
  import { fade } from "svelte/transition";
  let showModal = false;
</script>

<h1 class="mt-20 mb-20 text-[32pt] font-bold italic">Mint</h1>
<div class="mb-20 flex flex-col items-center justify-center space-y-16 py-6">
  <div class="flex">
    <img src="/img/nft-placeholders/currency.png" class="-my-4 mx-2 w-[400px] shadow-lg" />
    <div class="flex w-[500px] flex-col justify-between px-6 py-2">
      <div class="flex flex-col leading-5">
        <h2>DAMIEN HIRST</h2>
        <h1 class="font-bold">THE CURRENCY - GOT TO MAKE MY POINT</h1>
        <h2 class="font-bold">DETAILS</h2>
        <p class="my-2">
          HENI is delighted to present The Currency, the first NFT collection by Damien Hirst.
        </p>
        <p>
          Starting with the creation of the physical artworks in 2016, The Currency explores the
          boundaries of art and currency—when art changes and becomes a currency, and when currency
          becomes art.
        </p>
        <p class="my-2">
          Collectors had 1 year to decide between the digital NFT or the physical artwork, both of
          which are artworks in their own right. Whichever was picked, the other got burned.
        </p>
      </div>
      <div class="flex flex-col leading-5">
        <h2>Segments - 1024</h2>
        <h2>Mint Progress - 345/1024</h2>
        <h2>Mint price - 0.03ETH</h2>
        <button
          class="mt-3 rounded border border-black p-3 text-center transition hover:bg-black hover:text-neutral-100"
          on:click={() => {
            showModal = true;
          }}>Mint</button
        >
      </div>
    </div>
  </div>

  <div class="w-full border border-dotted border-neutral-300" />

  <div class="mt-2 flex">
    <img src="/img/nft-placeholders/collector.png" class="mx-2 w-[400px] shadow-lg" />
    <div class="flex w-[500px] flex-col justify-between px-6 py-2">
      <div class="flex flex-col leading-5">
        <h2>VICTOR MOSQUERA</h2>
        <h1 class="font-bold">THE COLLECTOR - THE LIGHTHOUSE</h1>
        <h2 class="font-bold">DETAILS</h2>
        <p class="my-2">
          Similar to how a lighthouse can guide a ship sailing through turbulent waters, a
          knowledgeable and passionate collector can help guide others toward a deeper understanding
          and appreciation of the art surrounding us.
        </p>
        <p>
          This project is meant to be a study where we explore what it means to be a collector. I
          believe artworks exist in collections as windows to other realities.
        </p>
      </div>
      <div class="flex flex-col leading-5">
        <h2>Segments - 1024</h2>
        <h2>Mint Progress - 956/1024</h2>
        <h2>Mint price - 0.04ETH</h2>
        <button
          class="mt-3 rounded border border-black p-3 text-center transition hover:bg-black hover:text-neutral-100"
          on:click={() => {
            showModal = true;
          }}>Mint</button
        >
      </div>
    </div>
  </div>
</div>

{#if showModal}
  <div transition:fade>
    <div class="fixed top-0 left-0 z-40 h-screen w-screen bg-black opacity-50 transition" />
    <div
      class="fixed top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform bg-neutral-100 p-10 shadow-lg"
    >
      <button
        class="absolute top-0 right-0 p-6 text-[12pt]"
        on:click={() => {
          showModal = false;
        }}>X</button
      >
      <div class="pointer-events-none" />
      <div class="flex w-[400px] flex-col justify-between px-6 py-2">
        <div class="flex flex-col leading-5">
          <h1 class="font-bold">Mint Segment</h1>
          <h2>DAMIEN HIRST</h2>
          <h1 class="font-bold">THE CURRENCY - GOT TO MAKE MY POINT</h1>
          <h2 class="mt-5 mb-2 font-bold">INTERESTED HUH?</h2>
          <p>
            We're not quite ready for you yet. However, if you are keen, leave us your email and
            we'll let you know when we are.
          </p>
        </div>
        <div class="flex flex-col">
          <button
            class="mt-3 rounded border border-black p-3 text-center transition hover:bg-black hover:text-neutral-100"
            >Notify Me!</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}
