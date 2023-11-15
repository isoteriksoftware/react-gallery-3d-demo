import React, { Suspense } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const ModelData: React.FC<{
  url: string;
}> = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const { ref, mixer } = useAnimations(animations);

  React.useEffect(() => {
    animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });
  }, [animations, mixer]);

  return <primitive ref={ref} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

const Model: React.FC<{
  url: string;
}> = ({ url }) => {
  return (
    <Suspense fallback={null}>
      <ModelData url={url} />
    </Suspense>
  );
};

export default Model;
