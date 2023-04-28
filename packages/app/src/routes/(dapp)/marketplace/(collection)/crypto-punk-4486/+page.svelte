<script lang="ts">
  import NFTcard from "$lib/components/NFT/NFTcard.svelte";
  import { fade } from "svelte/transition";

  let showModal = false;
</script>

<div
  class="mt-20 grid h-fit w-full grid-cols-[repeat(auto-fit,300px)] justify-center gap-4"
  on:click={() => {
    showModal = true;
  }}
>
  <NFTcard zoomLevel={[2.5, 0.84, 2.13]} />
  <NFTcard zoomLevel={[0.825, 0, 2.13]} />
  <NFTcard zoomLevel={[0, -0.835, 2.13]} />
  <NFTcard zoomLevel={[2.1, -1.25, 2.15]} />
  <NFTcard zoomLevel={[0, 3, 2.13]} />
  <NFTcard zoomLevel={[-2.075, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
  <NFTcard zoomLevel={[4, 0.3, 2.13]} />
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
      <div class="pointer-events-none">
        <NFTcard zoomLevel={[2.5, 0.84, 2.13]} />
      </div>
      <div class="flex w-[280px] flex-col justify-between px-6 py-2">
        <div class="flex flex-col leading-5">
          <h2>LARVA LABS</h2>
          <h1 class="font-bold">CRYPTO PUNK #4486</h1>
          <h2 class="font-bold">DETAILS</h2>
          <h2 class="my-2">Segment 547 / 2014</h2>
          <p>
            CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the
            inspirations for the ERC-721 standard. They have been featured in places like The New
            York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
          </p>
        </div>
        <div class="flex flex-col">
          <h1 class="font-bold">0.32 ETH</h1>
          <a
            href="/my-segments"
            class="mt-3 rounded border border-black p-3 text-center transition hover:bg-black hover:text-neutral-100"
            >Purchase</a
          >
        </div>
      </div>
    </div>
  </div>
{/if}
