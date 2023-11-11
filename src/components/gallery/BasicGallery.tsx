import { ImageItem, SolidColorItem, VideoItem } from "react-gallery-3d";
import DemoScene from "./DemoScene.tsx";

const BasicGallery = () => {
  return (
    <DemoScene>
      <SolidColorItem color="#ff0000" />
      <ImageItem src="https://picsum.photos/200/300" />
      {/* <ImageItem src="https://picsum.photos/200/300" crossOrigin="anonymous" /> */}
      <VideoItem
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        crossOrigin="anonymous"
      />
    </DemoScene>
  );
};

export default BasicGallery;
