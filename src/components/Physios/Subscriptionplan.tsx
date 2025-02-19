import { useState, useRef } from "react";
import { Table, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, MoreVertical } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Export from "@/assets/Export (1).png";
import { getSubscriptionByPhysioId } from "@/lib/api/physio";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import moment from "moment";

interface SubscriptionPlan {
	name: string;
	total: string;
	coupon: string;
	couponcode: string;
	couponamount: string;
	paid: string;
	date: string;
	type: string;
	approvedate: string;
}

const Subscriptionplan = ({ physioId }: { physioId: string }) => {
	const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [position, setPosition] = useState<{ bottom: null; left: number } | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);

	const { data, error, isLoading } = useQuery({
		queryKey: ["getSubscriptionByPhysioId", physioId],
		queryFn: () => {
			if (!physioId) {
				throw new Error("id is not present");
			} else {
				return getSubscriptionByPhysioId(physioId);
			}
		},
	});

	console.log(data);

	const openModal = (plan: SubscriptionPlan, event?: unknown) => {
		setSelectedPlan(plan);
		setIsModalOpen(true);
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setPosition({ bottom: null, left: rect.left - 50 });
		}
	};

	return (
		<div className="p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				{data?.data?.data[data?.data?.data?.length - 1]?.amount > 0 ? (
					<Card className="bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-green-600">
						<CardContent className="flex flex-col items-start">
							<div className="flex flex-row ">
								<h3 className="text-lg font-semibold mt-8 text-white">Preminum Plan</h3>
								<Button className="mt-8 bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-#EAEBEC ml-64 p-5">
									Active
								</Button>
							</div>
							<p className="text-2xl font-bold text-white mb-2">₹6,499</p>
							<div className="flex flex-row gap-5 text-white">
								<p>Patient Date: Jan 2024</p>
								<p>Plan Duration: Months</p>
								<p>Valid From: Jan 2024</p>
								<p>Valid Till: June 2024</p>
							</div>
						</CardContent>
					</Card>
				) : (
					<Card className="bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-green-600">
						<CardContent className="flex flex-col items-start">
							<div className="flex flex-row ">
								<h3 className="text-lg font-semibold mt-8 text-white">Free Plan</h3>
								<Button className="mt-8 bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC ml-72 p-5">
									Expired
								</Button>
							</div>
							<p className="text-2xl font-bold text-white mb-2">₹0</p>
							<div className="flex flex-row gap-5 text-white">
								<p>Patient Date: Jan 2024</p>
								<p>Plan Duration: Months</p>
								<p>Valid From: Jan 2024</p>
								<p>Valid Till: June 2024</p>
							</div>
						</CardContent>
					</Card>
				)}
			</div>

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
					<Card>
						<CardContent>
							<div className="flex justify-between items-center mb-4">
								<h1 className="text-lg font-semibold">Subscription history/Payment</h1>

								<div className="flex gap-4 mt-6">
									<Button
										variant="outline"
										className="flex items-center"
									>
										<Filter className="mr-2 h-4 w-4" />
										Payment Type Filter
									</Button>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="outline"
												className="flex items-center"
											>
												<Filter className="mr-2 h-4 w-4" />
												Date Filter
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="start">
											<DropdownMenuItem>Today</DropdownMenuItem>
											<DropdownMenuItem>Yesterday</DropdownMenuItem>
											<DropdownMenuItem>Custom</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									<Button
										variant="outline"
										className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
									>
										<img
											src={Export}
											alt="Export Icon"
											className="w-5 h-5"
										/>
										Export
									</Button>
								</div>
							</div>

							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead>Plan Name</TableHead>
										<TableHead>Total Amount</TableHead>
										<TableHead>Coupon Applied</TableHead>
										<TableHead>Coupon Amount</TableHead>
										<TableHead>Amount Paid</TableHead>
										<TableHead>Payment Date</TableHead>
										<TableHead>Payment Type</TableHead>
										<TableHead>Action</TableHead>
									</TableRow>
								</TableHeader>
								<tbody>
									{data?.data.data.map((plan, index) => (
										<tr
											key={index}
											className="border-b"
										>
											<td className="p-2">{plan.planId.name}</td>
											<td className="p-2">₹ {plan.planId.price}</td>
											<td>{plan.couponId == null ? "No" : "Yes"}</td>
											<td>₹ {plan.couponId == null ? 0 : plan.couponId.discount}</td>
											<td>₹ {plan.amount}</td>
											<td>{moment(plan.startDate).format("DD/MM/YYYY")}</td>
											<td>{plan.paymentStatus == 1 ? "Online" : "Pending"}</td>
											<td>
												<div
													ref={buttonRef}
													className="relative"
												>
													<MoreVertical
														className="cursor-pointer"
														onClick={(event) => openModal(plan, event)}
													/>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</CardContent>
					</Card>
					{/* Pagination Section */}
					<div className="flex justify-between items-center mt-4">
						<Button className="bg-white px-4 py-2 text-black hover:bg-white hover:text-black rounded">Previous</Button>
						<div>
							{[...Array(10)].map((_, index) => (
								<Button
									key={index}
									className={`px-3 py-1 mx-1 rounded ${
										index === 0 ? "bg-[#F9F5FF] text-[#7F56D9]" : "bg-gray-200 hover:bg-[#F9F5FF] hover:text-[#7F56D9]"
									}`}
								>
									{index + 1}
								</Button>
							))}
						</div>
						<Button className="bg-white text-black hover:bg-white hover:text-black px-4 py-2 rounded">Next</Button>
					</div>
				</>
			)}

			{/*  POP-UP  */}
			{selectedPlan && isModalOpen && position && (
				<Dialog
					open={isModalOpen}
					onOpenChange={setIsModalOpen}
					modal={false}
				>
					<DialogContent
						className="absolute z-50 bg-white shadow-lg border border-gray-200 rounded-lg p-4"
						style={{
							bottom: `${position.bottom}px`,
							left: `${position.left}px`,
							width: "300px",
						}}
					>
						<DialogHeader>
							<DialogTitle>{"Subscription Details"}</DialogTitle>
							<DialogDescription>
								{selectedPlan.coupon === "Yes" ? (
									<>
										<p>
											<strong>Plan Type</strong> {selectedPlan.name}
										</p>
										<p>
											<strong>Total Amount</strong> ₹{selectedPlan.total}
										</p>
										<p>
											<strong>Coupon Applied</strong> ₹{selectedPlan.paid}
										</p>
										<p>
											<strong>Coupon Code</strong> ₹{selectedPlan.couponcode}
										</p>
										<p>
											<strong>Coupon Amount</strong> ₹{selectedPlan.couponamount}
										</p>
										<p>
											<strong>Amount Paid</strong> ₹{selectedPlan.paid}
										</p>
										<p>
											<strong>Payment Type</strong> ₹{selectedPlan.type}
										</p>
										<p>
											<strong>Payment Date</strong> ₹{selectedPlan.date}
										</p>
										<p>
											<strong>Physio Approved Date</strong> ₹{selectedPlan.approvedate}
										</p>
									</>
								) : (
									<>
										<p>
											<strong>Total Amount:</strong> ₹{selectedPlan.name}
										</p>
										<p>
											<strong>Amount Paid:</strong> ₹{selectedPlan.total}
										</p>
										<p>
											<strong>Payment Type:</strong> {selectedPlan.type}
										</p>
									</>
								)}
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
};

export default Subscriptionplan;
