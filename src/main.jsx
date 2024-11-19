import { createBrowserRouter,RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Blog from "./pages/Blog";
import Sale from "./pages/Sale";
import Store from "./pages/Store";
import Demos from "./pages/Demos";
import Theme from "./pages/Theme";

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout />,
    children:
    [
    
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/collections",
    element: <Collections/>,
  },
 
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/sale",
    element: <Sale/>,
  },

  {
    path: "/store",
    element: <Store/>,
  },
  {
  path: "/demos",
  element: <Demos/>,
},
{
path: "/theme",
element: <Theme/>,
},
]
  }
]);




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
)



 
