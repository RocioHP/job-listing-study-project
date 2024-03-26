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
import AddJobPage from "./pages/AddJobPage";



const App = () => {
// Add new Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch
  }

  const router = createBrowserRouter(
    createRoutesFromElements( 
     <Route  path="/" element={<MainLayOut />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/job/:id" element={<JobPage deleteJob={ deleteJob }/>} />
      <Route path="*" element={<NotFoundPage />} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
    </Route>)
     
  );

  return <RouterProvider router={router} />;
}

export default App
