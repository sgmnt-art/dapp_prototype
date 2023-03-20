<script lang="ts">
  import { OrbitControls, T, useTexture } from "@threlte/core";
  import { spring } from "svelte/motion";
  import { NFTzoomOutLevel } from "$lib/utils";
  import type { Mesh } from "three";

  export let zoomedIn: boolean;
  export let zoomLevel: [number, number, number] = [0, 0.1, 2.9];
  const texture = useTexture("/img/nft-placeholders/punk.png");
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

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={18}>
  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={{ z: -100 }} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={1} />

<T.Group>
  <T.Mesh position={$cameraPos}>
    <T.PlaneGeometry args={[1, 1]} />
    <T.MeshStandardMaterial map={texture} />
  </T.Mesh>
</T.Group>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
