import { ImageItem, SolidColorItem, VideoItem } from "react-gallery-3d";
import DemoScene from "./DemoScene.tsx";

const BasicGallery = () => {
  return (
    <DemoScene>
      <SolidColorItem color="#ff0000" />
      <ImageItem src="https://picsum.photos/200/300" />
      <VideoItem
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        crossOrigin="anonymous"
      />
    </DemoScene>
  );
};

export default BasicGallery;
