"use client";
import { BriefcaseMedical, User } from "lucide-react";
// import { BriefcaseMedical, Pencil, HelpCircle, Layout, TicketX, User, Ambulance } from "lucide-react";
import image2 from "../assets/image 2.png";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";

const items = [
	// { icon: Layout, label: "Dashboard", url: "Dashboard" },
	{
		icon: BriefcaseMedical,
		label: "Physio's",
		url: "physios",
	},

	// {
	// 	icon: Pencil,
	// 	label: "Physio Edit Request",
	// 	url: "physio-edit",
	// },
	// {
	// 	icon: Ambulance,
	// 	label: "Physio Connect",
	// 	url: "physioconnect",
	// },
	{ icon: User, label: "Patients", url: "patient" },
	// { icon: TicketX, label: "Coupon", url: "coupon" },
	// { icon: HelpCircle, label: "Help & Support", url: "help" },
];

export function AppSidebar() {
	const navigate = useNavigate();

	return (
		<Sidebar collapsible="offcanvas">
			<SidebarHeader>
				<img
					src={image2} // Use the imported image path
					alt="Physio+ Logo"
					onClick={() => navigate("/")} // Keep the click behavior to navigate to "/"
					className="w-auto h-12 mx-auto" // Adjust Tailwind classes for sizing
				/>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{items.map((item) => (
							<SidebarMenuItem
								key={item.label}
								className="px-2.5 py-1.5"
							>
								<SidebarMenuButton
									asChild
									className="text-lg font-normal text-gray-500 hover:bg-green-50 hover:text-green-600 flex items-center w-full text-left gap-2"
								>
									<Link
										to={item.url || ""}
										className="w-6 h-6  flex justify-between"
									>
										<div className="flex items-center gap-2">
											<item.icon className="w-5 h-5" />
											<span>{item.label}</span>
										</div>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
