<script lang="ts">
  import { Canvas, OrbitControls, T, useTexture } from "@threlte/core";
  import { useGltf } from "@threlte/extras";

  const { gltf } = useGltf("/models/mac-draco.glb");
  // console.log(gltf);
</script>

<div>
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={50}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} target={{ z: 0 }} />
    </T.PerspectiveCamera>

    <T.AmbientLight intensity={1} />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
