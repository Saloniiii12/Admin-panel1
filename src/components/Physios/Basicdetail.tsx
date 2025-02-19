import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSinglePhysioById } from "@/lib/api/physio";
import { Skeleton } from "../ui/skeleton";
import moment from "moment";

const Basicdetail = ({ physioId }: { physioId: string }) => {
	const [openCardId, setOpenCardId] = useState<number | null>(null);

	const { data, error, isLoading } = useQuery({
		queryKey: ["getSinglePhysioById", physioId],
		queryFn: () => {
			if (!physioId) {
				throw new Error("id is not present");
			} else {
				return getSinglePhysioById(physioId);
			}
		},
	});

	const toggleContent = (cardId: number) => {
		setOpenCardId((prevId) => (prevId === cardId ? null : cardId));
	};

	return isLoading ? (
		<Skeleton></Skeleton>
	) : error ? (
		<div>Error</div>
	) : (
		data &&
		data.data && (
			<div>
				<Card className="mb-6">
					<CardContent>
						<div className="flex items-start space-x-4">
							{/* Profile Image */}
							<img
								src={data?.data?.data?.profileImage}
								className="w-32 h-32 rounded-full bg-gray-100 mt-5"
							/>
							{/* Info Boxes */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 mt-4">
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Name:</strong>
									</p>
									<p style={{ color: "#515662" }}>{data?.data?.data?.fullName}</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Gender:</strong>
									</p>
									<p style={{ color: "#515662" }}>{data?.data?.data?.gender === 0 ? "Female" : "Male"}</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Experience:</strong>
									</p>
									<p style={{ color: "#515662" }}>{data?.data?.data?.workExperience} Years</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Date of Birth:</strong>
									</p>
									<p style={{ color: "#515662" }}>{moment(data?.data?.data?.dob).format("D MMM YYYY")}</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Contact Number:</strong>
									</p>
									<p style={{ color: "#515662" }}>{data?.data?.data?.phone}</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Email :</strong>
									</p>
									<p style={{ color: "#515662" }}>{data?.data?.data?.email}</p>
								</div>
							</div>
						</div>
						{/* <div className="flex gap-3 overflow-x-auto p-4">
							{tags.map((tag, index) => (
								<span
									key={index}
									className="px-3 py-1 border border-gray-300 rounded-md whitespace-nowrap"
								>
									{tag}
								</span>
							))}
						</div> */}
						<div className="mt-4">
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-semibold mb-2">About Physio</h3>
								<p>{data?.data?.data?.about}</p>
							</div>
						</div>
						<div className="mt-4">
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-semibold mb-2">Service Type</h3>
								<p className="capitalize">{data?.data?.data?.serviceType.join(", ")}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Professional Details */}
				<Card className="mb-6">
					<CardHeader className="flex bg-[#039342] rounded-lg">
						<div className="flex items-center space-x-2 text-white">
							<CardTitle>Professional Details</CardTitle>
							<button
								onClick={() => toggleContent(1)}
								className="p-2"
							>
								{openCardId === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
							</button>
						</div>
						<h3 className="text-white">You can view professional details below:</h3>
					</CardHeader>
					{openCardId === 1 && (
						<CardContent>
							<div className="space-y-4">
								<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Degree Name</h3>
									<p>
										{data?.data?.data?.degree?.degreeId
											.map((i: { _id: string; name: string; createdAt: string; updatedAt: string }) => i.name)
											.join(", ")}
									</p>
								</div>

								{/* Degree Images Section */}
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Degree Images</h3>
									{/* image here */}
									{/* <div className="grid grid-cols-3 gap-4">{degreeImages.length > 0 }</div> */}
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Achievement Images</h3>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Specialization</h3>
									<p>
										{data?.data?.data?.specialization
											.map((i: { _id: string; name: string; icon: string }) => i.name)
											.join(", ")}
									</p>
								</div>

								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Sub-Specialization</h3>
									<p>
										{data?.data?.data?.subspecializationId
											.map((i: { _id: string; specializationId: string; name: string }) => i.name)
											.join(", ")}
									</p>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">Like to treat insurance patient?</h3>
									<p>{data?.data?.data?.treatInsuranceclaims ? "Yes" : "No"}</p>
								</div>

								<div className="flex space-x-4">
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">IAP Registered</h3>
										<p>{data?.data?.data?.iapNumber?.length > 0 ? "Yes" : "No"}</p>
									</div>
									{data?.data?.data?.iapNumber?.length > 0 && (
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">IAP Number</h3>
											<p>{data?.data?.data?.iapNumber}</p>
										</div>
									)}
								</div>

								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<h3 className="font-semibold mb-2">IAP certificate</h3>
								</div>
							</div>
						</CardContent>
					)}
				</Card>

				{/* Clinic Details */}
				{data?.data?.data?.serviceType.includes("clinic") && (
					<Card className="mb-6">
						<CardHeader className="flex bg-[#039342] rounded-lg">
							<div className="flex items-center space-x-2 text-white">
								<CardTitle>Clinic Details</CardTitle>
								<button
									onClick={() => toggleContent(2)}
									className="p-2"
								>
									{openCardId === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
								</button>
							</div>
							<h3 className="text-white">You can view clinic details below:</h3>
						</CardHeader>
						{openCardId === 2 && (
							<CardContent>
								<div className="space-y-4">
									<div className="flex space-x-4">
										<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">Clinic Name</h3>
											<p>{data?.data?.data?.clinic?.name}</p>
										</div>
										<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">Clinic Address</h3>
											<p>{data?.data?.data?.clinic?.address}</p>
										</div>
									</div>
									<div className="flex space-x-4">
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">City</h3>
											<p className="capitalize">{data?.data?.data?.city}</p>
										</div>
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">State</h3>
											<p className="capitalize">{data?.data?.data?.state}</p>
										</div>
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">Pincode</h3>
											<p>{data?.data?.data?.clinic?.zipCode}</p>
										</div>
									</div>
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Clinic Images</h3>
									</div>

									<div className="flex space-x-4">
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">Consultation Fees</h3>
											<p>₹ {data?.data?.data?.clinic?.charges}</p>
										</div>
										<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
											<h3 className="font-semibold mb-2">Consultation Duration</h3>
											<p>{data?.data?.data?.clinic?.duration} minutes</p>
										</div>
									</div>
									<div>
										<h3 className="font-semibold">Working Days & Time</h3>
									</div>

									<div className="grid grid-cols-3 gap-2">
										{data?.data?.data?.clinic?.workingDays.map(
											(
												e: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
												index: number
											) => (
												<div
													key={index}
													className="flex items-center justify-between p-4 border rounded-lg shadow-sm w-[350px] bg-gray-100"
												>
													<span className="font-medium text-lg">{e}</span>
													<div className="flex flex-col gap-2 text-green-600 text-sm">
														<div className="flex gap-1">
															<span>{data?.data?.data?.clinic?.timings?.start}</span>

															<span>To</span>
															<span>{data?.data?.data?.clinic?.timings?.end}</span>
														</div>
													</div>
												</div>
											)
										)}
									</div>
								</div>
							</CardContent>
						)}
					</Card>
				)}

				{/* Home Care Details */}
				{data?.data?.data?.serviceType.includes("home") && (
					<Card className="mb-6">
						<CardHeader className="flex bg-[#039342] rounded-lg">
							<div className="flex items-center space-x-2 text-white">
								<CardTitle>Home Care Details</CardTitle>
								<button
									onClick={() => toggleContent(3)}
									className="p-2"
								>
									{openCardId === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
								</button>
							</div>
							<h3 className="text-white">You can view home care details below:</h3>
						</CardHeader>
						{openCardId === 3 && (
							<CardContent>
								<div className="flex space-x-4 mt-4">
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Pincode Where You Serve</h3>
										<p>{data?.data?.data?.home?.zipCode}</p>
									</div>
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Consultation Duration</h3>
										<p>{data?.data?.data?.home?.duration} minutes</p>
									</div>
								</div>
								<div className="flex space-x-4 mt-4">
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Consultation Fees For 5 km </h3>
										<p>₹ {data?.data?.data?.home?.charges}</p>
									</div>
									<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Consultation Fees For 10 km</h3>
										<p>₹ {data?.data?.data?.home?.charges}</p>
									</div>
								</div>
								<h3 className="text-semibold mt-4 mb-4">Working Days and Time</h3>

								<div className="grid grid-cols-3 gap-2">
									{data?.data?.data?.home?.workingDays.map(
										(
											e: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
											index: number
										) => (
											<div
												key={index}
												className="flex items-center justify-between p-4 border rounded-lg shadow-sm w-[350px] bg-gray-100"
											>
												<span className="font-medium text-lg">{e}</span>
												<div className="flex flex-col gap-2 text-green-600 text-sm">
													<div className="flex gap-1">
														<span>{data?.data?.data?.home?.morningTimings?.start}</span>
														<span>{data?.data?.data?.home?.morningTimings?.start && "To"}</span>
														<span>{data?.data?.data?.home?.morningTimings?.end}</span>
													</div>
													{data?.data?.data?.home?.morningTimings?.start &&
														data?.data?.data?.home?.eveningTimings?.start && <hr />}
													<div className="flex gap-1">
														<span>{data?.data?.data?.home?.eveningTimings?.start}</span>
														<span>{data?.data?.data?.home?.eveningTimings?.start && "To"}</span>
														<span>{data?.data?.data?.home?.eveningTimings?.start}</span>
													</div>
												</div>
											</div>
										)
									)}
								</div>
							</CardContent>
						)}
					</Card>
				)}

				{/* Other Treatment Details */}
				<Card className="mb-6">
					<CardHeader className="flex bg-[#039342] rounded-lg">
						<div className="flex items-center space-x-2 text-white">
							<CardTitle>Other Treatment Details</CardTitle>
							<button
								onClick={() => toggleContent(4)}
								className="p-2"
							>
								{openCardId === 4 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
							</button>
						</div>
						<h3 className="text-white">Check the other treatment price mention by physio</h3>
					</CardHeader>
					{openCardId === 4 && (
						<CardContent>
							<div className="space-y-4">
								<div className="flex space-x-4">
									<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Treatment Name</h3>
										<p>Back Pain</p>
									</div>
									<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
										<h3 className="font-semibold mb-2">Treatment Name</h3>
										<p>Back Pain</p>
									</div>
								</div>
							</div>
						</CardContent>
					)}
				</Card>
			</div>
		)
	);
};

export default Basicdetail;
