import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarIcon, ChevronRight, Pencil } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const EditDetail = () => {
	const [date, setDate] = useState<Date>();

	const [formData, setFormData] = useState({
		name: "Dr. Abhi Ajmera",
		gender: "Male",
		experience: "2 Years",
		dob: "19 Jan 1998",
		contact: "9876543210",
		email: "bayabhishek@gmail.com",
		about: "Dr. Abhi Mehra is a skilled physiotherapist...",
		clinicName: "Abhishek Ajmera Clinic and Physio Center",
		clinicAddress: "Plot 4 Ram Nagar, Shyam Nagar, Jaipur 302020",
		city: "Jaipur",
		state: "Rajasthan",
		pincode: "302020",
		fees: "₹450",
		duration: "30 minutes",
		degreeName: "Bachelor of Physiotherapy, Master of Physiotherapy",
		specialization: "General Pain, Ortho Pain",
		subspecialization: "Elbow Pain, Neck Pain, Leg Pain, Head Pain, Back Pain",
		IAPRegistered: "Yes",
		IAPnumber: "8750123645112100",
		Pincode: "302020",
		ConsultationFees: "₹450",
		ConsultationDuration: "30 minutes",
		degreeImage: "",
		insurance: "No",
		//addphysioworking:"",
	});
	//
	const FileRef = useRef<HTMLInputElement>(null);

	//
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const [open, setOpen] = useState(false);
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
			<div className="flex justify-between items-center mb-4">
				{/* Breadcrumbs Section */}

				<Breadcrumbs />
				<div className="flex justify-end mb-4">
					<Button className="bg-[#039342] text-white mt-0 rounded-lg">Save Changes</Button>
				</div>
			</div>
			<div>
				<Card className="mb-6">
					<CardContent>
						<div className="flex items-start space-x-4">
							<div className="w-32 h-32 rounded-full bg-gray-100 mt-5 relative">
								{/* Profile Image (if you have a default image, use it here) */}
								<div className="w-full h-full rounded-full bg-gray-300 flex justify-center items-center">
									{/* Placeholder for the image */}
									<span className="text-white">Image</span>
								</div>
								<Input
									type="file"
									accept="image/*"
									ref={FileRef}
									onChange={handleChange}
									className="hidden"
								/>

								<div
									className="w-8 h-8 p-2 rounded-full absolute bottom-0 left-2/3 bg-green-700 cursor-pointer flex justify-center items-center"
									onClick={() => FileRef.current?.click()}
								>
									<Pencil className="text-white" />
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 mt-4">
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Name:</strong>
									</p>
									<Input
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong> Gender:</strong>
									</p>
									<Input
										name="gender"
										value={formData.gender}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Experience:</strong>
									</p>
									<Input
										name="experience"
										value={formData.experience}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Date of Birth:</strong>
									</p>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] justify-start text-left font-normal",
													!date && "text-muted-foreground"
												)}
											>
												<CalendarIcon />
												{date ? format(date, "dd MMM yyyy") : <span>Pick a date</span>}
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={date}
												onSelect={setDate}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Contact Number:</strong>
									</p>
									<Input
										name="contact"
										value={formData.contact}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
									<p>
										<strong>Email:</strong>
									</p>
									<Input
										name="email"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-semibold mb-2">About Physio</h3>
								<Textarea
									name="about"
									value={formData.about}
									onChange={handleChange}
									className="bg-gray-100"
								/>
							</div>
						</div>
					</CardContent>
				</Card>
				{/* professional details */}
				<Card className="mb-6 ">
					<CardHeader className="flex bg-[#039342] rounded-lg">
						<div className="flex items-center space-x-2 text-white">
							<CardTitle>Professional Details</CardTitle>
						</div>
						<h3 className="text-white">You can view professional details below:</h3>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="mb-2">
									<strong>Degree Name:</strong>
								</h3>
								<Input
									name="degreeName"
									value={formData.degreeName}
									onChange={handleChange}
								/>
							</div>

							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">Degree Images:</h3>
								<Input
									type="file"
									name="degreeImage"
									onChange={handleChange}
								/>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">Achievement Images:</h3>
								<Input
									type="file"
									name="achievementImage"
								/>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">Specialization</h3>
								<Input
									name="specialization"
									value={formData.specialization}
									onChange={handleChange}
								/>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">Like to treat insurance patient?</h3>
								<Input
									name="insurance"
									value={formData.insurance}
									onChange={handleChange}
								/>
							</div>

							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">Sub-Specialization</h3>
								<Input
									name="subspecialization"
									value={formData.subspecialization}
									onChange={handleChange}
								/>
							</div>
							<div className="flex space-x-4">
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-bold mb-2">IAP Registered</h3>
									<Input
										name="IAPRegistered"
										value={formData.IAPRegistered}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-bold mb-2">IAP Number</h3>
									<Input
										name="IAPNumber"
										value={formData.IAPnumber}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-semibold mb-2">IAP certificate</h3>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<h3 className="font-bold mb-2">IAP Registered</h3>
								<Input
									name="IAPRegistered"
									value={formData.IAPRegistered}
									onChange={handleChange}
								/>
							</div>
						</div>
					</CardContent>
				</Card>
				{/* clinic section */}
				<Card className="mb-6">
					<CardHeader className="flex bg-[#039342] rounded-lg ">
						<CardTitle className="text-white">Clinic Details</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100 mt-4">
								<p>
									<strong>Clinic Name:</strong>
								</p>
								<Input
									name="clinicName"
									value={formData.clinicName}
									onChange={handleChange}
								/>
							</div>
							<div className="border p-4 rounded-lg shadow-sm bg-gray-100">
								<p>
									<strong>Clinic Address:</strong>
								</p>
								<Textarea
									name="clinicAddress"
									value={formData.clinicAddress}
									onChange={handleChange}
									className="bg-gray-100"
								/>
							</div>
							<div className="flex space-x-4">
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<p>
										<strong>City:</strong>
									</p>
									<Input
										name="city"
										value={formData.city}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<p>
										<strong>State:</strong>
									</p>
									<Input
										name="state"
										value={formData.state}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<p>
										<strong>Pincode:</strong>
									</p>
									<Input
										name="pincode"
										value={formData.pincode}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div>
								{/* Clickable Div to Open Modal */}
								<div
									className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-100 w-full cursor-pointer"
									onClick={() => setOpen(true)}
								>
									<h3 className="text-semibold">Working Days and Time</h3>
									<Button className="justify-end bg-[#039342] text-white">Add Working Days</Button>
								</div>

								{/* Modal */}
								<Dialog
									open={open}
									onOpenChange={setOpen}
								>
									<DialogContent className="max-w-lg">
										<DialogHeader>
											<DialogTitle>Working Days & Time</DialogTitle>
										</DialogHeader>

										{/* Working Days Form */}
										<div className="space-y-4">
											{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
												<div
													key={day}
													className="flex items-center justify-between p-2 border rounded-lg"
												>
													<span className="font-medium">{day}</span>
													{day === "Wednesday" ? (
														<span className="text-gray-500 text-sm">Physio is not working on this day.</span>
													) : (
														<div className="flex gap-2">
															<select className="border p-1 rounded">
																<option>12:00 PM</option>
															</select>
															<span>to</span>
															<select className="border p-1 rounded">
																<option>12:00 PM</option>
															</select>
														</div>
													)}
												</div>
											))}
										</div>
									</DialogContent>
								</Dialog>
							</div>
						</div>
					</CardContent>
				</Card>
				{/* Home Care Details */}
				<Card className="mb-6">
					<CardHeader className="flex bg-[#039342] rounded-lg">
						<div className="flex items-center space-x-2 text-white">
							<CardTitle>Home Care Details</CardTitle>
						</div>
						<h3 className="text-white">You can view home care details below:</h3>
					</CardHeader>

					<CardContent>
						<div className="space-y-4">
							<div className="flex space-x-4">
								<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-semibold mb-2">Pincode Where you serve</h3>
									<Input
										name="Pincode"
										value={formData.Pincode}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-semibold mb-2">Consultation Duration</h3>
									<Input
										name="ConsultationDuration"
										value={formData.ConsultationDuration}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="flex space-x-4 mt-4">
								<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-semibold mb-2">Consultation Fees For 5 km</h3>
									<Input
										name="ConsultationFees"
										value={formData.ConsultationFees}
										onChange={handleChange}
									/>
								</div>
								<div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
									<h3 className="font-semibold mb-2">Consultation Fees For 10 km</h3>
									<Input
										name="ConsultationFees"
										value={formData.ConsultationFees}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div>
								{/* Clickable Div to Open Modal */}
								<div
									className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-100 w-full cursor-pointer"
									onClick={() => setOpen(true)}
								>
									<h3 className="text-semibold">Working Days and Time</h3>
									<Button className="justify-end bg-[#039342] text-white">Add Working Days</Button>
								</div>

								{/* Modal */}
								<Dialog
									open={open}
									onOpenChange={setOpen}
								>
									<DialogContent className="max-w-lg">
										<DialogHeader>
											<DialogTitle>Working Days & Time</DialogTitle>
										</DialogHeader>

										{/* Working Days Form */}
										<div className="space-y-4">
											{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
												<div
													key={day}
													className="flex items-center justify-between p-2 border rounded-lg"
												>
													<span className="font-medium">{day}</span>
													{day === "Wednesday" ? (
														<span className="text-gray-500 text-sm">Physio is not working on this day.</span>
													) : (
														<div className="flex gap-2">
															<select className="border p-1 rounded">
																<option>12:00 PM</option>
															</select>
															<span>to</span>
															<select className="border p-1 rounded">
																<option>12:00 PM</option>
															</select>
														</div>
													)}
												</div>
											))}
										</div>
									</DialogContent>
								</Dialog>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card className="mb-6">
					<CardHeader className="flex bg-[#039342] rounded-lg">
						<CardTitle className="text-white">Other Treatment Details</CardTitle>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
};

export default EditDetail;
