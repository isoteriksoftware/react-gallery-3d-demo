import { useRoutes } from "react-router-dom";
import BasicGallery from "../components/BasicGallery";
import ImageGallery from "../components/ImageGallery.tsx";
import VideoGallery from "../components/VideoGallery.tsx";
import MixedGallery from "../components/MixedGallery.tsx";

export const useAppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MixedGallery />,
    },
    {
      path: "/basic",
      element: <BasicGallery />,
    },
    {
      path: "/image",
      element: <ImageGallery />,
    },
    {
      path: "/video",
      element: <VideoGallery />,
    },
  ]);
};
