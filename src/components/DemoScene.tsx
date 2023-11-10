import React, { PropsWithChildren } from "react";
import { Gallery, GalleryScene } from "react-gallery-3d";
import { useGallerySceneSettings } from "../common/hooks.ts";
import { Stats } from "@react-three/drei";

const DemoScene: React.FC<PropsWithChildren> = ({ children }) => {
  const { groundControls, fogControls, orbitControls, galleryItemControls } =
    useGallerySceneSettings();

  return (
    <GalleryScene
      fogColor={fogControls.fogColor}
      disableFog={!fogControls.enableFog}
      disableControls={!orbitControls.enableOrbitControls}
      orbitControls={{
        enableDamping: orbitControls.enableDamping,
        enableZoom: orbitControls.enableZoom,
        dampingFactor: orbitControls.dampingFactor,
        autoRotate: orbitControls.autoRotate,
        autoRotateSpeed: orbitControls.autoRotateSpeed,
        minPolarAngle: Math.PI / 2 - 0.5,
        maxPolarAngle: Math.PI / 2 - 0.01,
      }}
    >
      {/* @ts-expect-error */}
      <Gallery
        ground={{
          width: groundControls.width,
          height: groundControls.height,
          disableReflector: !groundControls.enableReflector,
          reflectorMaterial: {
            color: groundControls.groundColor,
            metalness: groundControls.metalness,
            roughness: groundControls.roughness,
            mirror: groundControls.mirror,
            resolution: groundControls.resolution,
            depthScale: groundControls.depthScale,
            minDepthThreshold: groundControls.minDepthThreshold,
            maxDepthThreshold: groundControls.maxDepthThreshold,
          },
        }}
        disableGround={!groundControls.enableGround}
        item={{
          width: galleryItemControls.width,
          height: galleryItemControls.height,
          radialSegments: galleryItemControls.radialSegments,
          heightSegments: galleryItemControls.heightSegments,
          innerRadiusPercent: galleryItemControls.innerRadiusPercent,
        }}
      >
        {children}
      </Gallery>

      <Stats />
    </GalleryScene>
  );
};

export default DemoScene;
