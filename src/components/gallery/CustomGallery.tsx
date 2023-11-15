import {
  VideoItem,
  GalleryItemMaterial,
  GalleryItem,
  VideoItemMaterial,
  GalleryItemInitData,
  ImageItemMaterial,
} from "react-gallery-3d";
import { Material, MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { useMemo } from "react";
import DemoScene from "./DemoScene.tsx";
import SceneLights from "./SceneLights.tsx";
import { Text } from "@react-three/drei";
import PlaceOnItem from "../utils/PlaceOnItem.tsx";

class ShinySolidMaterial implements GalleryItemMaterial {
  private readonly color: string;
  private readonly opacity: number;

  constructor(color: string, opacity: number = 1) {
    this.color = color;
    this.opacity = opacity;
  }

  public generate() {
    return new MeshPhysicalMaterial({
      color: this.color,
      reflectivity: 1,
      metalness: 1,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      transparent: true,
      opacity: this.opacity,
    });
  }
}

class GlassySolidMaterial extends ImageItemMaterial {
  constructor(src: string) {
    super(src);
  }

  public generate() {
    this.initTexture();

    return new MeshPhysicalMaterial({
      toneMapped: false,
      map: this.texture,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      metalness: 0,
      roughness: 0,
      transmission: 0.2,
      clearcoat: 0.3,
    });
  }
}

class ShinyVideoMaterial extends VideoItemMaterial {
  constructor(source: string) {
    super(source);
  }

  generate(): Material | Material[] {
    this.initVideo();

    return new MeshPhysicalMaterial({
      toneMapped: true,
      map: this.texture,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      reflectivity: 1,
      metalness: 1,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
  }
}

const CustomGallery = () => {
  const customItemMaterials = useMemo(() => {
    return [
      new ShinySolidMaterial("red"),
      new GlassySolidMaterial("./images/img2.jpg"),
      new ShinyVideoMaterial("./videos/vid4.mp4"),
      new ShinySolidMaterial("green"),
    ];
  }, []);

  const makeTransparent = (
    material: MeshStandardMaterial,
    opacity: number = 0.7,
  ) => {
    material.transparent = true;
    material.opacity = opacity;
    material.needsUpdate = true;
  };

  const autoPlayOnInit = ({ itemMaterial }: GalleryItemInitData) => {
    if (itemMaterial instanceof VideoItemMaterial) {
      const video = (itemMaterial as VideoItemMaterial).getVideo()!;
      video.muted = true;
      video.loop = true;
      video.play();
    }
  };

  return (
    <DemoScene sceneElements={<SceneLights />}>
      <VideoItem
        src="./videos/vid1.mp4"
        onInit={({ material }) =>
          makeTransparent(material as MeshStandardMaterial)
        }
      >
        <PlaceOnItem rotationY={180}>
          <Text fontSize={6} color="white" textAlign="center">
            TRANSPARENT VIDEO
          </Text>
        </PlaceOnItem>
      </VideoItem>
      {...customItemMaterials.map((material, index) => (
        <GalleryItem
          key={index}
          itemMaterial={material}
          onInit={autoPlayOnInit}
        />
      ))}
    </DemoScene>
  );
};

export default CustomGallery;
