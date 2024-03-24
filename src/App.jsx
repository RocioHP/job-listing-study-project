import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayOut from "./layout/MainLayOut";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements( 
     <Route  path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage />} />
      {/* <Route path="/jobs" element={<JobsPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>)
     
  );

  return <RouterProvider router={router} />;
}

export default App
