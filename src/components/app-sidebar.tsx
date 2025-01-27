"use client";
import {
	Bell,
	BriefcaseMedical,
	Calendar,
	FileBadge,
	GraduationCap,
	HelpCircle,
	Layout,
	TicketX,
	Users,
	IndianRupee,
    Flag,
	Stamp,
	ChevronDown,
	Ambulance,
    
} from "lucide-react";
import image2 from "../assets/image 2.png";  
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const items = [
	{ icon: Layout, label: "Registered Physio", url: "Registeredphysios" },
	{ icon: Calendar, label: "Appointments", url: "appointment" },
	{
		icon: BriefcaseMedical,
		label: "Physios",
		url: "#",
		children: [
			{ icon: BriefcaseMedical, label: "Dashboard", url: "physio" },
			{ icon: Users, label: "All Physio", url: "physio/all-physio" },
			{ icon: Stamp, label: "Unapproved Physio", url: "unapproved-physio" },
			{ icon: IndianRupee, label: "Withdrawal Physio", url: "physio/withdrawal" },
		],
	},
	{
		icon: Ambulance,
		label: "Physio Connect",
		url: "physio-connect",
	},
	{
		icon: Users,
		label: "Patients",
		url: "patients",
		// children: [{ icon: BriefcaseMedical, label: "Dashboard", url: "patient" }],
	},
	{ icon: FileBadge, label: "Speciality", url: "specialisation" },
	{ icon: GraduationCap, label: "Degree", url: "degree" },
	{ icon: TicketX, label: "Coupon", url: "coupon" },
	{ icon: Flag, label: "Banner", url: "banner" },
	{ icon: HelpCircle, label: "Help & Support", url: "help" },
	{ icon: Bell, label: "Notification", url: "notification" },
	{ icon: HelpCircle, label: "Video Library", url: "video library" },
];

export function AppSidebar() {
	const [openChildren, setOpenChildren] = useState<{ [key: string]: boolean }>({});
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
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.label}
									className="px-2.5 py-1.5"
								>
									<SidebarMenuButton
										asChild
										className="text-lg font-normal text-gray-500 hover:bg-green-50 hover:text-green-600 flex items-center w-full text-left gap-2"
										onClick={() => setOpenChildren((prev) => ({ ...prev, [item.label]: !prev[item.label] }))}
									>
										<Link
											to={item.url || ""}
											className="w-6 h-6  flex justify-between"
										>
											<div className="flex items-center gap-2">
												<item.icon className="w-5 h-5" />
												<span>{item.label}</span>
											</div>
											{item.children && (
												<span>
													<ChevronDown className="w-4 h-4" />
												</span>
											)}
										</Link>
									</SidebarMenuButton>
									{item.children && openChildren[item.label] && (
										<SidebarMenu className="mt-2">
											{item.children.map((child) => (
												<SidebarMenuItem
													key={child.label}
													className="px-2.5 py-1.5"
												>
													<SidebarMenuButton
														asChild
														className="text-lg font-normal text-gray-500 hover:bg-green-50 hover:text-green-600 flex items-center w-full text-left gap-2"
													>
														<Link
															to={child.url}
															className="w-6 h-6"
														>
															<child.icon className="w-full h-full" />
															<span>{child.label}</span>
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											))}
										</SidebarMenu>
									)}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
