import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import image from "@/assets/Export (1).png";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { physioDashboardCardData } from "@/lib/api/physio";
import { Skeleton } from "@/components/ui/skeleton";
import moment from "moment";
import AllPhysioDash from "@/components/Physios/Dashboard/AllPhysioDash";
import ApprovePhysioDash from "@/components/Physios/Dashboard/ApprovePhysioDash";
import UnapprovedPhysioDash from "@/components/Physios/Dashboard/UnapprovedPhysioDash";
import BlockedPhysioDash from "@/components/Physios/Dashboard/BlockedPhysioDash";
import PendingPhysioDash from "@/components/Physios/Dashboard/PendingPhysioDash";

const Physios: React.FC = () => {
	const navigate = useNavigate();
	const [date, setDate] = useState<DateRange | undefined>(undefined);

	// Cards data
	const {
		data: physioDashboardCard,
		error: physioDashboardCardError,
		isLoading: physioDashboardCardLoading,
	} = useQuery({
		queryKey: [physioDashboardCardData, date],
		queryFn: () => {
			if (!date) return physioDashboardCardData(null);
			else if (!date.from && !date.to) return physioDashboardCardData(null);
			return physioDashboardCardData({
				from: moment(date.from).startOf("day").format("yyyy-MM-DDTHH:mm:ss.SSSSSS"),
				to: moment(date.to).endOf("day").format("yyyy-MM-DDTHH:mm:ss.SSSSSS"),
			});
		},
	});

	const handleDateChange = (newDate: DateRange | undefined) => {
		setDate(newDate);
	};

	const handleViewClick = (id: string) => {
		navigate(`${id}`);
	};
	const handleClick = () => {
		navigate(`add-physio`);
	};

	return (
		<div className="p-6 bg-gray-50 min-h-screen">
			<div className="flex justify-end items-center mb-6">
				<div className="flex items-center gap-5 mr-auto flex-row">
					<h1 className="font-semibold text-2xl">Registered Physio's</h1>
					<p className="flex justify-center items-center text-lg text-black bg-[#E6F4EC] rounded-md px-1">
						({" "}
						{physioDashboardCardLoading ? (
							<Skeleton className="text-center w-[50px] h-[24px] rounded-md inline-block" />
						) : physioDashboardCardError ? (
							<p className="text-sm text-red-400">Error</p>
						) : (
							physioDashboardCard?.data.allPhysio
						)}{" "}
						Physio's )
					</p>
				</div>
				<div className="flex items-center gap-4">
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
							align="end"
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
								onSelect={handleDateChange}
								numberOfMonths={1}
								className="bg-white"
							/>
						</PopoverContent>
					</Popover>
					<Button
						variant="outline"
						onClick={handleClick}
					>
						Add Physio's +
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-0 ">
				<Card className="p-4 text-center rounded-none">
					<p>Total Physio's</p>
					<p className="text-xl font-semibold">
						{physioDashboardCardLoading ? (
							<div className="mt-1 w-full flex justify-center items-center">
								<Skeleton className="text-center w-[50px] h-[24px] rounded-md" />
							</div>
						) : physioDashboardCardError ? (
							<div className="text-sm text-red-400">Error</div>
						) : (
							physioDashboardCard?.data.allPhysio
						)}
					</p>
				</Card>
				<Card className="p-4 text-center rounded-none">
					<p>Approved Physio's</p>
					<p className="text-xl font-semibold">
						{physioDashboardCardLoading ? (
							<div className="mt-1 w-full flex justify-center items-center">
								<Skeleton className="text-center w-[50px] h-[24px] rounded-md" />
							</div>
						) : physioDashboardCardError ? (
							<div className="text-sm text-red-400">Error</div>
						) : (
							physioDashboardCard?.data.approvedPhysio
						)}
					</p>
				</Card>
				<Card className="p-4 text-center rounded-none">
					<p>Premium Plan Physio's</p>
					<p className="text-xl font-semibold">
						{physioDashboardCardLoading ? (
							<div className="mt-1 w-full flex justify-center items-center">
								<Skeleton className="text-center w-[50px] h-[24px] rounded-md" />
							</div>
						) : physioDashboardCardError ? (
							<div className="text-sm text-red-400">Error</div>
						) : (
							physioDashboardCard?.data.paidPhysios
						)}
					</p>
				</Card>
				<Card className="p-4 text-center rounded-none">
					<p>Free Plan Physio's</p>
					<p className="text-xl font-semibold">
						{physioDashboardCardLoading ? (
							<div className="mt-1 w-full flex justify-center items-center">
								<Skeleton className="text-center w-[50px] h-[24px] rounded-md" />
							</div>
						) : physioDashboardCardError ? (
							<div className="text-sm text-red-400">Error</div>
						) : (
							physioDashboardCard?.data.freePhysios
						)}
					</p>
				</Card>
				<Card className="p-4 text-center rounded-none">
					<p>Pending Physio's</p>
					<p className="text-xl font-semibold">
						{physioDashboardCardLoading ? (
							<div className="mt-1 w-full flex justify-center items-center">
								<Skeleton className="text-center w-[50px] h-[24px] rounded-md" />
							</div>
						) : physioDashboardCardError ? (
							<div className="text-sm text-red-400">Error</div>
						) : (
							physioDashboardCard?.data.pendingPhysios
						)}
					</p>
				</Card>
			</div>

			{/* Tabs */}

			<Tabs defaultValue="all">
				<div className="flex justify-between items-center mt-5">
					<TabsList className="flex p-2 bg-gray-50 justify-start ">
						<TabsTrigger
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
							value="all"
						>
							All Physio's
						</TabsTrigger>
						<TabsTrigger
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
							value="approved"
						>
							Approved Physio's
						</TabsTrigger>
						<TabsTrigger
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
							value="unapproved"
						>
							Unapproved Physio's
						</TabsTrigger>
						<TabsTrigger
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
							value="blocked"
						>
							Block Physio's
						</TabsTrigger>
						<TabsTrigger
							className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
							value="pending"
						>
							Pending Physio's
						</TabsTrigger>
					</TabsList>
					<Button
						variant="outline"
						className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
					>
						<img
							src={image}
							alt="Export Icon"
							className="w-5 h-5"
						/>
						Export
					</Button>
				</div>
				<TabsContent value="all">
					<AllPhysioDash handleClickViewProp={handleViewClick} />
				</TabsContent>
				<TabsContent value="approved">
					<ApprovePhysioDash handleClickViewProp={handleViewClick} />
				</TabsContent>
				<TabsContent value="unapproved">
					<UnapprovedPhysioDash handleClickViewProp={handleViewClick} />
				</TabsContent>
				<TabsContent value="blocked">
					<BlockedPhysioDash handleClickViewProp={handleViewClick} />
				</TabsContent>
				<TabsContent value="pending">
					<PendingPhysioDash handleClickViewProp={handleViewClick} />
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default Physios;
