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
import JobPage, { jobLoader } from "./pages/JobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements( 
     <Route  path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} loader={jobLoader} />
    </Route>)
     
  );

  return <RouterProvider router={router} />;
}

export default App
