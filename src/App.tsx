import { useEffect } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Registeredphysios from "./pages/Registeredphysios";
import { Toaster } from "react-hot-toast";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import EditDetail from "./pages/EditDetail";
import Degree from "./pages/Degree";
// auth pages
// Redirect component to go back to the previous page
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
    element: <MainLayout />, // Main Layout with Outlet for child routes
    children: [
      {
        path: "/Registeredphysios", // RegisteredPhysios route
        element: <Registeredphysios />,
      },
      {
        path:"/Degree",
        element:<Degree />,
      },
      {
        path: "edit/3", // Route for fixed ID 3
        element: <EditDetail />,
      },
      {
        path: "/redirect", // Example of a redirect route
        element: <RedirectToPreviousPage />,
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
