import { useControls } from "leva";

export const useGallerySceneSettings = () => {
  const fogControls = useControls("Fog", {
    enableFog: true,
    fogColor: "#000000",
  });

  const groundControls = useControls("Ground", {
    enableGround: true,
    groundColor: "#ffffff",
    width: { value: 1000, min: 10, max: 1000 },
    height: { value: 1000, min: 10, max: 1000 },
    enableReflector: true,
    mirror: { value: 0.5, min: 0, max: 1 },
    resolution: { value: 1024, min: 0, max: 2048 },
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

  const galleryItemControls = useControls("Gallery Item", {
    width: { value: 120, min: 10, max: 1000 },
    height: { value: 50, min: 10, max: 1000 },
    radialSegments: { value: 50, min: 8, max: 100 },
    heightSegments: { value: 1, min: 1, max: 100 },
    innerRadiusPercent: { value: 0.99, min: 0, max: 1 },
  });

  return {
    fogControls,
    groundControls,
    orbitControls,
    galleryItemControls,
  };
};
