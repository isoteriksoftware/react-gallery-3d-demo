import { SolidColorItem } from "react-gallery-3d";
import DemoScene from "../DemoScene.tsx";

const BasicGallery = () => {
  return (
    <DemoScene>
      <SolidColorItem color="red" />
      <SolidColorItem color="green" />
      <SolidColorItem color="blue" />
      <SolidColorItem color="yellow" />
      <SolidColorItem color="purple" />
      <SolidColorItem color="orange" />
    </DemoScene>
  );
};

export default BasicGallery;
