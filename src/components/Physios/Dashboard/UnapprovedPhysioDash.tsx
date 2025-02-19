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
import { Skeleton } from "@/components/ui/skeleton";
import { getUnapprovedPhysios } from "@/lib/api/physio";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, MoreVertical, Search } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

const UnapprovedPhysioDash = ({ handleClickViewProp }: { handleClickViewProp: (id: string) => void }) => {
	const [date, setDate] = useState<DateRange | undefined>(undefined);
	const [searchText, setSearchText] = useState<string>("");
	const [debouncedSearch, setDebouncedSearch] = useState<string>("");
	const [planName, setPlanName] = useState<"Paid Plan" | "Paid Plan2" | undefined>(undefined);
	const [serviceType, setServiceType] = useState<"home" | "clinic" | undefined>(undefined);
	const [page, setPage] = useState<number>(1);

	const { data, error, isLoading } = useQuery({
		queryKey: ["approvedPhysios", debouncedSearch, planName, date?.from, date?.to, serviceType, page],
		queryFn: () => {
			if (!searchText && !planName && !date && !serviceType) {
				return getUnapprovedPhysios(page);
			}
			return getUnapprovedPhysios(
				page,
				debouncedSearch,
				planName,
				date ? moment(date.from).startOf("day").format("YYYY-MM-DDTHH:mm:ss.SSSSSS") : undefined,
				date ? moment(date.to).endOf("day").format("YYYY-MM-DDTHH:mm:ss.SSSSSS") : undefined,
				serviceType
			);
		},
		enabled: true,
	});

	// Reset page to 1 when any of the dependencies change
	useEffect(() => {
		setPage(1);
	}, [debouncedSearch, planName, date?.from, date?.to, serviceType]);

	// Debounce the search input
	useEffect(() => {
		if (searchText) {
			const handler = setTimeout(() => {
				setDebouncedSearch(searchText);
			}, 500);

			return () => clearTimeout(handler);
		}
	}, [searchText]);

	const totalPages = data?.data?.totalPages || 1;

	return (
		<>
			{isLoading ? (
				<div className="grid grid-cols-4 gap-3 mt-6">
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
				</div>
			) : error ? (
				<div>Error</div>
			) : (
				<>
					{/* Search & Filters */}
					<div className="flex justify-between my-4">
						<div className="relative w-1/3">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
							<Input
								placeholder="Search for Physio’s doctor name..."
								className="pl-10"
								value={searchText}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
							/>
							{searchText && (
								<button
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
									onClick={() => setSearchText("")}
								>
									✖️
								</button>
							)}
						</div>
						<div className="flex gap-2">
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
											setDate({ from: today, to: today });
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

							{/* Physio’s Plan Dropdown */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">
										{planName != undefined ? (planName == "Paid Plan" ? "Basic" : "Premium") : "Physio’s Plan"}
										<ChevronDown className="ml-2" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem onClick={() => setPlanName("Paid Plan")}>Basic</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setPlanName("Paid Plan2")}>Premium</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setPlanName(undefined)}>All</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>

							{/* Service Type Dropdown */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">
										{serviceType != undefined ? (serviceType == "home" ? "Home" : "Clinic") : "Service Type"}
										<ChevronDown className="ml-2" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem onClick={() => setServiceType("home")}>Home</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setServiceType("clinic")}>Clinic</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setServiceType(undefined)}>Both</DropdownMenuItem>
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
										{/* <th>Plan Details</th> */}
										<th>Profile Status</th>
									</tr>
								</thead>
								<tbody>
									{data &&
										data.data &&
										data?.data?.data?.map((physio, index: number) => (
											<tr
												key={index}
												className="border-b"
											>
												<td className="p-2 flex gap-2">
													<div className="flex justify-center items-center">
														<img
															src={physio.profileImage}
															alt={physio.fullName}
															className="w-9 h-9 aspect-square rounded-full object-contain"
														/>
													</div>
													<div>
														<p className="font-medium">{physio.fullName}</p>
														<p className="text-sm text-gray-500">{physio.email}</p>
													</div>
												</td>
												<td className="capitalize">{physio.serviceType.join(", ")}</td>
												<td>{physio.phone}</td>
												{/* <td>
											{" "}
											<p className="text-black flex items-center gap-2">
												<span
													className={`w-2 h-2 rounded-full ${
														physio.plan === "Basic Plan"
															? "bg-blue-400"
															: physio.plan === "Premium Plan"
															? "bg-yellow-300"
															: ""
													}`}
												></span>
												{physio.plan}
											</p> */}
												{/* <p className="text-sm text-gray-500">{physio.details}</p> */}
												{/* </td> */}
												<td>
													{" "}
													<p className="text-black flex items-center gap-2">
														<span
															className={`w-2 h-2 rounded-full ${
																physio.accountStatus === 1 ? "bg-green-400" : physio.status === 0 ? "bg-red-500" : ""
															}`}
														></span>
														{physio.accountStatus === 1 ? "Approved" : "UnApproved"}
													</p>
													<p className="text-sm text-gray-500">{physio.date}</p>
												</td>
												<td>
													<DropdownMenu>
														<DropdownMenuTrigger>
															<MoreVertical className="cursor-pointer" />
														</DropdownMenuTrigger>
														<DropdownMenuContent>
															<DropdownMenuItem onClick={() => handleClickViewProp(physio._id)}>
																View Profile
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
						{/* Previous Button */}
						<Button
							onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
							disabled={page === 1}
							className={`px-4 py-2 rounded ${
								page === 1 ? "bg-gray-300 text-gray-600" : "bg-white text-black hover:bg-gray-200"
							}`}
						>
							Previous
						</Button>

						{/* Page Numbers */}
						<div>
							{[...Array(totalPages)].map((_, index) => (
								<Button
									key={index}
									onClick={() => setPage(index + 1)} // Set page to the clicked page number
									className={`px-3 py-1 mx-1 rounded ${
										page === index + 1 ? "bg-green-500 text-white" : "bg-green-400 hover:bg-green-500 hover:text-white"
									}`}
								>
									{index + 1}
								</Button>
							))}
						</div>

						{/* Next Button */}
						<Button
							onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
							disabled={page === totalPages}
							className={`px-4 py-2 rounded ${
								page === totalPages ? "bg-gray-300 text-gray-600" : "bg-white text-black hover:bg-gray-200"
							}`}
						>
							Next
						</Button>
					</div>
				</>
			)}
		</>
	);
};
export default UnapprovedPhysioDash;
