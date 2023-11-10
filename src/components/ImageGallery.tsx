import DemoScene from "./DemoScene.tsx";
import { ImageItem } from "react-gallery-3d";

const ImageGallery = () => {
  const images = Array.from(
    { length: 6 },
    (_, i) => `./images/img${i + 1}.jpg`,
  );

  return (
    <DemoScene>
      {images.map((image, index) => (
        <ImageItem key={index} src={image} />
      ))}
    </DemoScene>
  );
};

export default ImageGallery;
