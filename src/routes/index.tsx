import { useRoutes } from "react-router-dom";
import BasicGallery from "../components/gallery/BasicGallery.tsx";
import ImageGallery from "../components/gallery/ImageGallery.tsx";
import VideoGallery from "../components/gallery/VideoGallery.tsx";
import MixedGallery from "../components/gallery/MixedGallery.tsx";

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
