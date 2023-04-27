<script lang="ts">
  import { T } from "@threlte/core";
  import { OrbitControls, useTexture } from "@threlte/extras";
  import { spring } from "svelte/motion";
  import { NFTzoomOutLevel } from "$lib/utils";

  export let zoomedIn: boolean;
  export let zoomLevel: [number, number, number] = [0, 0, 9];
  const texture = useTexture("/img/nft-placeholders/ape.png");
  const cameraPos = spring(zoomLevel, { damping: 1, stiffness: 0.1 });

  $: {
    if (zoomedIn) {
      console.log("zooming in");
      $cameraPos = zoomLevel;
    }

    if (!zoomedIn) {
      console.log("zooming out");
      $cameraPos = NFTzoomOutLevel;
    }
  }
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50}>
  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={[0, 0, 0]} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={1} />

{#await texture then value}
  <T.Group>
    <T.Mesh position={$cameraPos}>
      <T.PlaneGeometry args={[10, 10]} />
      <T.MeshBasicMaterial map={value} toneMapped={false} />
    </T.Mesh>
  </T.Group>
{/await}

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
