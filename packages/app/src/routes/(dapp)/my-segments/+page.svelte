<script lang="ts">
  import NFTcard from "$lib/components/NFT/NFTcard.svelte";
  import NFTcardApe from "$lib/components/NFT/NFTcardApe.svelte";
</script>

<h1 class="mt-20 mb-20 text-[32pt] font-bold italic">My Collection</h1>

<div class="mt-20 grid h-fit w-full grid-cols-[repeat(auto-fit,300px)] justify-center gap-4 mb-20">
  <NFTcard zoomLevel={[2.5, 0.84, 2.13]} />
  <NFTcard zoomLevel={[0.825, 0, 2.13]} />
  <NFTcard zoomLevel={[0, -0.835, 2.13]} />
  <NFTcardApe zoomLevel={[0, -0.835, 2.13]} />
  <NFTcardApe zoomLevel={[2.1, -1.25, 2.15]} />
  <NFTcardApe zoomLevel={[0, 3, 2.13]} />
</div>
