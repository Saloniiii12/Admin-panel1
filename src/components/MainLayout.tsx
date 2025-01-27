import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const MainLayout = () => {
	//const navigate = useNavigate();

	useEffect(() => {
		// const token = sessionStorage.getItem("token");
		// if (!token || token === "") {
		// 	navigate("/auth/login");
		// }
		// else {
		// 	navigate("/dashboard");
		// }
	}, []);

	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="flex flex-col flex-1">
					<div className="flex items-center bg-[#fafafa] border-b border-gray-200">
						<SidebarTrigger />
						<Navbar />
					</div>
					<div className="flex-1 overflow-scroll">
						<Outlet />
					</div>
				</main>
			</SidebarProvider>
		</>
	);
};
export default MainLayout;
