import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { allPhysioOnDashBoard } from "@/lib/api/physio";
import { cn } from "@/lib/utils";
// import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, MoreVertical, Search } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const physios = [
	{
		name: "Olivia Rhye",
		email: "olivia@untitledui.com",
		type: "Clinic & Home",
		phone: "9876543210",
		plan: "Free Plan",
		details: "0/4 Patient",
		status: "Not Approved",
		date: "No data available",
	},
	{
		name: "Demi Wilkinson",
		email: "demi@untitledui.com",
		type: "Home Care",
		phone: "9876543210",
		plan: "Premium Plan",
		details: "Paid on 20 Oct 2024 at 4 30 PM",
		status: "Approved",
		date: "On 20 Oct 2024 at 4 AM",
	},
	{
		name: "Candice Wu",
		email: "candice@untitledui.com",
		type: "Clinic & Home",
		phone: "9876543210",
		plan: "Free Plan",
		details: "0/4 Patient",
		status: "Not Approved",
		date: "No data available",
	},
	{
		name: "Drew Cano",
		email: "drew@untitledui.com",
		type: "Clinic & Home",
		phone: "9876543210",
		plan: "Premium Plan",
		details: "Paid on 20 Oct 2024 at 4 30 PM",
		status: "Approved",
		date: "On 20 Oct 2024 at 4 AM",
	},
	{
		name: "Orlando Diggs",
		email: "orlando@untitledui.com",
		type: "Clinic & Home",
		phone: "9876543210",
		plan: "Free Plan",
		details: "0/4 PAtient",
		status: "Not Approved",
		date: "No data available",
	},
	{
		name: "Andi Lane",
		email: "andi@untitledui.com",
		type: "Clinic & Home",
		phone: "9876543210",
		plan: "Premium Plan",
		details: "Paid on 20 Oct 2024 at 4 30 PM",
		status: "Approved",
		date: "On 20 Oct 2024 at 4 AM",
	},
];

const AllPhysioDash = ({ handleClickViewProp }: { handleClickViewProp: (id: string) => void }) => {
	const [date, setDate] = useState<DateRange | undefined>(undefined);
	// const [page, setPage] = useState();
	// const [serviceType, setServiceType] = useState();
	// const [planName, setPlanName] = useState();
	// const [searchText, setSearchText] = useState<string | null>(null);
	// const [accountStatus, setAccount] = useState();

	// All Physio data from API
	// const { data, error, isLoading } = useQuery({
	// 	queryKey: [],
	// 	queryFn: () => allPhysioOnDashBoard(page, serviceType, planName, accountStatus, searchText),
	// });

	return (
		<>
			{/* Search & Filters */}
			<div className="flex justify-between my-4">
				<div className="relative w-1/4">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
					<Input
						placeholder="Search for Physio’s doctor name..."
						className="pl-10"
						// value={searchText || ""}
						// onChange={(e) => setSearchText(e)}
					/>
				</div>
				<div className="flex gap-2">
					{/* Plan Status Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								Plan Status
								<ChevronDown className="ml-2" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Active</DropdownMenuItem>
							<DropdownMenuItem>Expired</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Popover>
						<PopoverTrigger asChild>
							<Button
								id="date"
								variant={"outline"}
								className={cn("w-[220px] justify-start text-left font-normal", !date && "text-muted-foreground")}
							>
								<CalendarIcon />
								{date?.from ? (
									date.to ? (
										<>
											{format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
										</>
									) : (
										format(date.from, "LLL dd, y")
									)
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-auto p-0"
							align="start"
						>
							<Button
								variant="outline"
								className="w-full shadow-none border-none"
								onClick={() => {
									const today = new Date();
									setDate({ from: today, to: today }); // Set both start and end date to today
								}}
							>
								Today
							</Button>
							<Calendar
								initialFocus
								mode="range"
								defaultMonth={date?.from}
								selected={date}
								onSelect={setDate}
								numberOfMonths={2}
								className="bg-white"
							/>
						</PopoverContent>
					</Popover>
					{/* Physio’s Plan Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								Physio’s Plan
								<ChevronDown className="ml-2" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Basic</DropdownMenuItem>
							<DropdownMenuItem>Premium</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					{/* Service Type Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								Service Type
								<ChevronDown className="ml-2" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Home</DropdownMenuItem>
							<DropdownMenuItem>Clinic</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Approved Dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								Approved
								<ChevronDown className="ml-2" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Approved</DropdownMenuItem>
							<DropdownMenuItem>Unapproved</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			{/* Table */}
			<Card>
				<CardContent>
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b text-left text-gray-600">
								<th className="p-2">Physio Details</th>
								<th>Service Type</th>
								<th>Contact Number</th>
								<th>Plan Details</th>
								<th>Profile Status</th>
							</tr>
						</thead>
						<tbody>
							{physios.map((physio, index) => (
								<tr
									key={index}
									className="border-b"
								>
									<td className="p-2">
										<p className="font-medium">{physio.name}</p>
										<p className="text-sm text-gray-500">{physio.email}</p>
									</td>
									<td>{physio.type}</td>
									<td>{physio.phone}</td>
									<td>
										{" "}
										<p className="text-black flex items-center gap-2">
											<span
												className={`w-2 h-2 rounded-full ${
													physio.plan === "Free Plan"
														? "bg-blue-400"
														: physio.plan === "Premium Plan"
														? "bg-yellow-300"
														: ""
												}`}
											></span>
											{physio.plan}
										</p>
										<p className="text-sm text-gray-500">{physio.details}</p>
									</td>
									<td>
										{" "}
										<p className="text-black flex items-center gap-2">
											<span
												className={`w-2 h-2 rounded-full ${
													physio.status === "Approved"
														? "bg-green-600"
														: physio.status === "Not Approved"
														? "bg-red-600"
														: ""
												}`}
											></span>
											{physio.status}
										</p>
										<p className="text-sm text-gray-500">{physio.date}</p>
									</td>
									<td>
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreVertical className="cursor-pointer" />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuItem onClick={() => handleClickViewProp(physio.name)}>
													View Profile{" "}
												</DropdownMenuItem>
												<DropdownMenuItem>Edit</DropdownMenuItem>
												<DropdownMenuItem>Block</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardContent>
			</Card>

			{/* Pagination */}
			<div className="flex justify-between items-center mt-6">
				<Button className="bg-white px-4 py-2 text-black hover:bg-white hover:text-black rounded">Previous</Button>
				<div>
					{[...Array(10)].map((_, index) => (
						<Button
							key={index}
							className={`px-3 py-1 mx-1 rounded ${
								index === 0
									? "bg-green-500 hover:bg-green-500 text-white"
									: "bg-green-400 hover:bg-green-500 hover:text-white"
							}`}
						>
							{index + 1}
						</Button>
					))}
				</div>
				<Button className="bg-white text-black hover:bg-white hover:text-black px-4 py-2 rounded">Next</Button>
			</div>
		</>
	);
};
export default AllPhysioDash;
