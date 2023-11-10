import { useRoutes } from "react-router-dom";
import BasicGallery from "../components/BasicGallery";
import ImageGallery from "../components/ImageGallery.tsx";
import VideoGallery from "../components/VideoGallery.tsx";

export const useAppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <VideoGallery />,
    },
  ]);
};
