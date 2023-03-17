<script lang="ts">
  const THRESHOLD = 5;
  let card: HTMLElement;

  function handleHover(e: MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget as HTMLDivElement;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.1, 1.1, 1.1)`;
    card.style.zIndex = `10`;
  }

  function resetStyles(e: MouseEvent) {
    // @ts-expect-error
    card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    card.style.zIndex = `1`;
  }
</script>

<div bind:this={card} class="card" on:mousemove={handleHover} on:mouseleave={resetStyles}>
  <img src="/img/nft-placeholders/punk.png" class="rounded-t" />
  <div class="content p-4">
    <h2>sgmnt #004</h2>
    <p>Bored Ape 2348</p>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply rounded shadow;
    background-color: white;
    background-size: cover;
    width: 300px;
    height: auto;
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

  p {
    margin-top: 0;
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 42px;
    margin-bottom: 15px;
  }

  button {
    background: #e85757;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    display: block;
    font-size: 18px;
    font-weight: 700;
    padding: 16px;
    width: 120px;
    color: #fff;
  }
</style>
