<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";

  const THRESHOLD = 5;
  let card: HTMLElement;

  function handleHover(e: MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget as HTMLDivElement;

    // TODO: account for scrollY
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY + scrollY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.1, 1.1, 1.1)`;
    card.style.zIndex = `10`;
  }

  function resetStyles(e: MouseEvent) {
    // @ts-expect-error
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    setTimeout(() => {
      card.style.zIndex = `1`;
    }, 200);
  }

  export let zoomLevel: [number, number, number];
  let zoomedIn = true;
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div bind:this={card} class="card" on:mousemove={handleHover} on:mouseleave={resetStyles}>
  <!-- <div bind:this={card} class="card"> -->
  <div class="relative h-[300px] w-[300px]" style="z-index: 20">
    <button
      class="absolute top-[269px] left-[5px] rounded bg-white bg-opacity-50 p-1 dark:bg-black dark:bg-opacity-50"
      on:click={() => {
        zoomedIn = !zoomedIn;
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"
        ><path
          fill="currentColor"
          d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"
        /></svg
      >
    </button>
    <Canvas toneMapping={1} colorSpace={"srgb-linear"}>
      <Scene {zoomedIn} {zoomLevel} />
    </Canvas>
  </div>
  <img src="/img/nft-placeholders/punk.png" class="absolute bottom-0 right-0 m-4 w-16" />
  <div class="content p-4">
    <div id="test" class="flex justify-between">
      <div class="leading-3">
        <h2 class="mb-1 text-[14pt] font-bold">CRYPTO PUNK #4486</h2>
        <h2 class="mb-2 text-[8pt] font-bold">547 / 1024</h2>
        <p class="text-[9pt] font-bold">ATTRIBUTES</p>
        <p class="text-[8pt] font-bold ">Beanie - 25%</p>
        <p class="text-[8pt] font-bold ">Earing - 46%</p>
        <p class="text-[8pt] font-bold ">Surgical Mask - 4%</p>
        <p class=" mt-2 text-[7pt] text-neutral-400">ORIGINAL RESOLUTION: 32 X 32</p>
        <p class=" text-[7pt] text-neutral-400">SEGMENT RESOLUTION: 1 X 1</p>
        <p class=" text-[7pt] text-neutral-400">BOUNDING BOX: (9, 14) (8, 13)</p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  #test {
    /* font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial; */
    /* font-stretch: expanded; */
  }

  .card {
    @apply rounded bg-white shadow dark:bg-black;
    background-size: cover;
    width: 300px;
    height: fit-content;
    position: relative;
    transition: transform 0.2s ease;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .card:hover {
    @apply shadow-lg;
  }

  /* Slight parallax effect on hover */
  .card:hover .content {
    /* transform: translateZ(12px); */
  }

  .content {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
</style>
