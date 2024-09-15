import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import BoxShadow from "../pages/boxshadow/BoxShadow";
import BorderRadius from "../pages/borderRadius/BorderRadius";
import GlassMorphism from "../pages/glassmorphism/GlassMorphism";
import Textglow from "../pages/textglow/Textglow";

const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<BoxShadow/>
        },
        {
          path:"border-radius",
          element:<BorderRadius/>
        },
        {
           path:"glassmorphism",
           element:<GlassMorphism/>
        },
        {
          path:"text-glow",
          element:<Textglow/>
        },
      ]
    }
]);

export default function MyProvider(){
    return(
        <RouterProvider router={router}/>
    )
}