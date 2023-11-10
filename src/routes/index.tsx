import {useRoutes} from "react-router-dom";
import BasicGallery from "../components/BasicGallery";

export const useAppRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <BasicGallery/>,
        },
    ]);
};