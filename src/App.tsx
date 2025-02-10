import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { Toaster } from "react-hot-toast";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import EditDetail from "./pages/EditDetail";
import Patient from "@/pages/Patient";
import ViewDetail from "./pages/Physio/ViewDetail";
import Physios from "./pages/Physio/Physios";
import Addphysio from "./pages/Physio/AddPhysio";

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
				children: [
					{
						index: true,
						element: <Physios />,
					},
					{
						path: "add-physio",
						element: <Addphysio />,
					},
					{
						path: ":id",
						element: <ViewDetail />,
					},
					{
						path: "edit/:id",
						element: <EditDetail />,
					},
				],
			},
			{
				path: "/patient",
				element: <Patient />,
			},
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
			<Toaster
				position="top-right"
				reverseOrder={false}
			/>
		</div>
	);
}

export default App;
