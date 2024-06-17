import Home from "./pages/home/home";
import Create from "./pages/create/create";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root";
import NotFound from "./pages/404";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
       <Route path="*" element={<NotFound />} />
    </Route>
  )
);



function App() {
  return (
    <>
    
      

      <RouterProvider router={router} />
  
    </>
  );
}

export default App;
