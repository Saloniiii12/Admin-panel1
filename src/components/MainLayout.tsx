import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const MainLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token || token === "") {
			navigate("/auth/login");
		}
	}, [navigate]);

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
