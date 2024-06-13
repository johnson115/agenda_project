import Home from "./pages/home/home";
import Create from "./pages/create/create";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/*  <Route path="dashboard" element={<Dashboard />} /> */}
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
