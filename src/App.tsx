import { useEffect } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { Toaster } from "react-hot-toast";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import EditDetail from "./pages/EditDetail";
import Patient from "@/pages/Patient";
import ViewDetail from "./pages/ViewDetail";
import Physios from "./pages/Physios";
import Addphysio from "./pages/AddPhysio";
import Overview from "./pages/Overview";
import EditPatient from "./pages/EditPatient";
import Editrequest from "./pages/Editrequest";
import Viewedit from "./pages/Viewedit";
const RedirectToPreviousPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1); // Navigate back to the previous page
  }, [navigate]);

  return null; // It doesn't render anything
};

// Define the router with the routes
const router = createBrowserRouter([
  {
		path: "/auth",
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <Navigate to="/auth/login" />,
			},
			{
				path: "login",
				element: <Login />,
			},
			
			{
				path: "forget-password",
				element: <ForgetPassword />,
			},
			{
				path: "reset-password",
				element: <ResetPassword />,
			},
		],
	},
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "/physios", 
        element: <Physios />,
      },
      {
         path:"/physio-edit",
         element:<Editrequest/>,
      },{
      path:"viewedit/4",
    element:<Viewedit/>,},
      {
				path: "/addphysio",
				element: <Addphysio />,
			},
      {
        path: "edit/3", // Route for fixed ID 3
        element: <EditDetail />,
      },
      {
        path: "editpatient/4", // Route for patient edit
        element: <EditPatient />,
      },
      {
        path: "overview/4", //route for patient view
        element: <Overview />,
      },

      {
        path: "view/3",//route for physio view
        element: <ViewDetail />,
      },
      {
        path: "/redirect",
        element: <RedirectToPreviousPage />,
      },
     
      {
        path:"/patient",
        element:<Patient />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* RouterProvider is used at the top level */}
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
