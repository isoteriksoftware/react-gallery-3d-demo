import DemoScene from "./DemoScene.tsx";
import { VideoItem } from "react-gallery-3d";

const VideoGallery = () => {
  const videos = Array.from(
    { length: 6 },
    (_, i) => `./videos/vid${i + 1}.mp4`,
  );

  return (
    <DemoScene>
      {videos.map((video, index) => (
        <VideoItem key={index} src={video} />
      ))}
    </DemoScene>
  );
};

export default VideoGallery;
