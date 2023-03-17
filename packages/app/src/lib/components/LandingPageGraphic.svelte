<script>
  import { Canvas, InteractiveObject, OrbitControls, T, useFrame } from "@threlte/core";
  import { degToRad } from "three/src/math/MathUtils";
  import { Color } from "three";
  import { spring } from "svelte/motion";

  import { LayerMaterial, Fresnel, Displace } from "lamina/vanilla";

  const displace = new Displace({
    strength: 2,
    scale: 0.5,
    type: "perlin",
    offset: [0, 0, 0],
    mode: "normal",
    visible: true,
  });

  const material = new LayerMaterial({
    color: "#90b5ff",
    lighting: "physical",
    layers: [
      displace,
      new Fresnel({
        color: new Color("#fc0000"),
        alpha: 1,
        power: 0.75,
        intensity: 1,
        bias: 0,
        mode: "screen",
        visible: true,
      }),
    ],
  });

  let hovering = false;
  const scale = spring(1, { stiffness: 0.1 });

  useFrame(() => {
    // @ts-expect-error - this property is present when running, not sure why ts doesn't pick up on it.
    displace.offset[0] += 0.005 * (1 + ($scale - 1) * 5);
  });
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
  <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
</T.PerspectiveCamera>

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<T.Mesh let:ref {material} frustumCulled={false}>
  <T.SphereGeometry args={[1, 64, 64]} />
  <InteractiveObject
    object={ref}
    interactive
    on:pointerenter={() => {
      $scale = 2;
    }}
    on:pointerleave={() => {
      $scale = 1.0;
    }}
  />
</T.Mesh>
