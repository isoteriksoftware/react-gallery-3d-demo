import { useGallerySceneSettings } from "../../common/hooks.ts";

const SceneLights = () => {
  const { ambientLightControls, directionalLightControls } =
    useGallerySceneSettings();

  return (
    <>
      {ambientLightControls.enableAmbientLight && (
        <ambientLight
          color={ambientLightControls.color}
          intensity={ambientLightControls.intensity}
        />
      )}

      {directionalLightControls.enableDirectionalLight && (
        <directionalLight
          color={directionalLightControls.color}
          intensity={directionalLightControls.intensity}
          position={directionalLightControls.position}
        />
      )}
    </>
  );
};

export default SceneLights;
