import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Crown, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Transcation from "../../components/Physios/Transcation";
import Basicdetail from "../../components/Physios/Basicdetail";
import Subscriptionplan from "../../components/Physios/Subscriptionplan";
import Appointment from "../../components/Physios/Appointment";
import HelpandSupport from "../../components/Physios/HelpandSupport";
import RatingandReviews from "../../components/Physios/RatingandReviews";
import Wallet from "../../components/Physios/Wallet";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate, useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const ViewDetail: React.FC = () => {
	const { id } = useParams();
	const [activeTab, setActiveTab] = useState("basic detail");

	const navigate = useNavigate();

	// hardcoded
	const handleEditClick = () => {
		const physioId = 3;
		navigate(`/physios/edit/${physioId}`);
	};
	// Breadcrumb Component
	const Breadcrumbs = ({ customPath }: { customPath?: string[] }) => {
		const location = useLocation();
		const paths = customPath || location.pathname.split("/").filter((path) => path);

		return (
			<div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
				<Link
					to="/"
					className="text-gray-700 hover:underline text-2xl"
				>
					Registered Physio's
				</Link>
				{paths.map((path, index) => (
					<div
						key={index}
						className="flex items-center space-x-2"
					>
						<ChevronRight className="w-4 h-4 text-gray-400" />
						<Link
							to={`/${paths.slice(0, index + 1).join("/")}`}
							className="hover:underline capitalize"
						>
							{path.replace("-", "")}
						</Link>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="bg-gray-100 min-h-screen p-6">
			{/* Title Section */}
			<div className="flex justify-between items-center mb-4">
				{/* Breadcrumbs Section */}

				<Breadcrumbs />
				<div className="flex items-center space-x-3 ml-auto">
					<Button className="bg-white text-black hover:bg-gray-200">
						Block Physio
						<Lock />
					</Button>
					<Button className="bg-white text-black hover:bg-gray-200 ml-auto mr-4 flex items-center gap-2">
						Approved
						<span className="w-2 h-2 bg-[#039342] rounded-full"></span>
					</Button>

					<Button className="bg-[#039342] text-white hover:bg-green-700">
						<Crown />
						Premium Plan
					</Button>
				</div>
			</div>
			<div className="bg-white rounded-lg shadow-lg p-6">
				{/* Tabs Section */}
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="mb-4"
				>
					<TabsList className="w-full bg-white flex justify-start">
						<TabsTrigger
							value="basic detail"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Basic Detail
						</TabsTrigger>

						<TabsTrigger
							value="subscription plan"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Subscription Plan
						</TabsTrigger>
						<TabsTrigger
							value="transaction"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Transaction
						</TabsTrigger>
						<TabsTrigger
							value="wallet"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Wallet
						</TabsTrigger>
						<TabsTrigger
							value="appointment"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Appointment
						</TabsTrigger>
						<TabsTrigger
							value="rating & reviews"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Rating & Reviews
						</TabsTrigger>
						<TabsTrigger
							value="help & support"
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
						>
							Help & Support
						</TabsTrigger>
						<TabsContent
							value="basic detail"
							className="ml-auto"
						>
							{/* Basic Details Section */}
							<div className="mt-0 mb-2 p-0 ">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											onClick={handleEditClick}
										>
											Edit
										</Button>
									</DropdownMenuTrigger>
								</DropdownMenu>
							</div>
						</TabsContent>
					</TabsList>
					<TabsContent value="basic detail">
						<Basicdetail physioId={id || ""} />
					</TabsContent>
					<TabsContent value="subscription plan">
						<Subscriptionplan physioId={id || ""} />
					</TabsContent>
					<TabsContent value="transaction">
						<Transcation />
					</TabsContent>
					<TabsContent value="wallet">
						<Wallet />
					</TabsContent>
					<TabsContent value="appointment">
						<Appointment />
					</TabsContent>
					<TabsContent value="rating & reviews">
						<RatingandReviews />
					</TabsContent>
					<TabsContent value="help & support">
						<HelpandSupport />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default ViewDetail;
