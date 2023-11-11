import DemoScene from "./DemoScene.tsx";
import { ImageItem, SolidColorItem, VideoItem } from "react-gallery-3d";

const MixedGallery = () => {
  return (
    <DemoScene>
      <VideoItem src={"./videos/vid3.mp4"} />
      <SolidColorItem color={"red"} />
      <ImageItem src={"./images/img2.jpg"} />
      <VideoItem src={"./videos/vid4.mp4"} />
      <SolidColorItem color={"yellow"} />
      <ImageItem src={"./images/img4.jpg"} />
    </DemoScene>
  );
};

export default MixedGallery;
