<script lang="ts">
  import NFTcard from "$lib/components/NFT/NFTcardApe.svelte";
</script>

<div class="mt-20 grid h-fit w-full grid-cols-[repeat(auto-fit,300px)] justify-center gap-4">
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
