import { useControls } from "leva";

export const useGallerySceneSettings = () => {
  const galleryItemControls = useControls("Gallery Item", {
    width: { value: 150, min: 10, max: 1000 },
    height: { value: 60, min: 10, max: 1000 },
    radialSegments: { value: 50, min: 8, max: 100 },
    heightSegments: { value: 1, min: 1, max: 100 },
    innerRadiusPercent: { value: 0.99, min: 0.1, max: 0.99 },
  });

  const environmentControls = useControls("Environment", {
    preset: {
      value: "sunset",
      options: [
        "city",
        "dawn",
        "night",
        "sunset",
        "warehouse",
        "apartment",
        "forest",
        "lobby",
        "park",
        "studio",
      ],
    },
  });

  const cameraControls = useControls("Camera", {
    fov: { value: 60, min: 1, max: 180 },
    position: {
      value: [0, 65, 164],
      step: 1,
      min: -1000,
      max: 1000,
    },
  });

  const fogControls = useControls("Fog", {
    enableFog: true,
    fogColor: "#000000",
    near: { value: 10, min: 0.1, max: 1000 },
    far: { value: 520, min: 1, max: 1000 },
  });

  const groundControls = useControls("Ground", {
    enableGround: true,
    groundColor: "#ffffff",
    width: { value: 1000, min: 10, max: 1000 },
    height: { value: 1000, min: 10, max: 1000 },
    enableReflector: true,
    mirror: { value: 0.95, min: 0, max: 1 },
    resolution: { value: 2048, min: 0, max: 2048 },
    depthScale: { value: 1, min: 0.01, max: 1 },
    minDepthThreshold: { value: 0.4, min: 0.01, max: 1 },
    maxDepthThreshold: { value: 1, min: 0.01, max: 1 },
    roughness: { value: 1, min: 0.01, max: 1 },
    metalness: { value: 0.7, min: 0.01, max: 1 },
  });

  const orbitControls = useControls("Orbit Controls", {
    enableOrbitControls: true,
    autoRotate: true,
    enableZoom: true,
    enableDamping: true,
    dampingFactor: { value: 0.01, min: 0.001, max: 0.5 },
    autoRotateSpeed: { value: -1, min: -100, max: 100 },
  });

  return {
    fogControls,
    groundControls,
    orbitControls,
    galleryItemControls,
    environmentControls,
    cameraControls,
  };
};
