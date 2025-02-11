import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  MoreVertical,
  Lock,
  Search,
  Eye,
  Info,
  Unlock,
} from "lucide-react";
import coin from "@/assets/Vector (7).png";
import Invoice from "@/assets/Invoice.png";
import Vector from "@/assets/Vector (4).png";
import image from "@/assets/Export (1).png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const patients = [
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    gender: "Male",
    state: "Rajasthan",
    city: "Jaipur",
    pincode: "302020",
    date: "2005",
  },
];
const consultation = [
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Success",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Progress",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Consultation",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
];
const treatment = [
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Success",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Progress",
  },
  {
    name: "Olivia Rhye",
    date: "23 Oct 2024",
    time: "4:30",
    necessity: "Treatment",
    type: "Clinic & Home",
    phone: "9876543210",
    status: "Pending",
  },
];

const Patient: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [amount, setAmount] = useState("");

  const handleViewDetails = () => {
    setOpenDialog(true); // Open the dialog when "View Details" is clicked
  };
  const handleView = () => {
    setOpenDialog(true);
  };
  const handleClick = () => {
    const patientId = 4; // Replace this with dynamic ID logic
    navigate(`/overview/${patientId}`);
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-end patients-center mb-6">
        <div className="flex patients-center gap-5 mr-auto flex-row">
          <h1 className="font-semibold text-2xl">Patient Overview</h1>
          <p className="text-lg text-black bg-[#E6F4EC]">(20,000 Patient's)</p>
        </div>
        <div className="flex patients-center gap-4">
          <Button
            variant="outline"
            className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
          >
            <img src={image} alt="Export Icon" className="w-5 h-5" />
            Export
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0 ">
        <Card className="p-4 text-center rounded-none">
          <p>Total Patient's</p>
          <p className="text-xl font-semibold">20,000</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Service Used</p>
          <p className="text-xl font-semibold">12,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Not in Service</p>
          <p className="text-xl font-semibold ">10,120</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Not Open app/3 month last login</p>
          <p className="text-xl font-semibold">2,000</p>
        </Card>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="flex p-2 mt-5 bg-gray-50 justify-start ">
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="all"
          >
            All Patient's
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="consultation"
          >
            Consultation Only
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="treatment"
          >
            Treatment Only
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="Blocked"
          >
            Blocked Patient's
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="Coins"
          >
            Coins Request
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Patient name..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {/* Plan Status Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Date
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Week</DropdownMenuItem>
                  <DropdownMenuItem>Month</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    State Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
              {/* Physio’s Plan Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    City Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Basic</DropdownMenuItem>
                  <DropdownMenuItem>Premium</DropdownMenuItem>
                </DropdownMenuContent> */}
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Patient Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuItem>Clinic</DropdownMenuItem>
                </DropdownMenuContent> */}
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Not in Service
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Approved</DropdownMenuItem>
                  <DropdownMenuItem>Unapproved</DropdownMenuItem>
                </DropdownMenuContent> */}
              </DropdownMenu>
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Patient Name</th>
                    <th>Contact No.</th>
                    <th>Born Year</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Pincode</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">
                        <p className="font-medium">{patient.name}</p>
                      </td>
                      <td>{patient.phone}</td>
                      <td>{patient.date}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.state}</td>
                      <td>{patient.city}</td>
                      <td>{patient.pincode}</td>

                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black text-white">
                            <DropdownMenuItem onClick={handleClick}>
                              <Eye />
                              View{" "}
                            </DropdownMenuItem>

                            <hr />
                            <DropdownMenuItem>
                              <Lock />
                              Block
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="consultation">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Patient name..."
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Date Filter
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>Yesterday</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    City Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    State Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Pincode Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem></DropdownMenuItem>
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
                    <th className="p-2">Patient Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Necessity</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {consultation.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <p className="font-medium">{patient.name}</p>
                      </td>
                      <td>{patient.date}</td>
                      <td>{patient.phone}</td>
                      <td>{patient.time}</td>
                      <td>
                        {patient.necessity}

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-0 text-black"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader className="flex justify-between">
                              <DialogTitle>Appointment Details</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Appointment Date
                                </span>
                                <span className="font-medium">{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Appointment Time
                                </span>
                                <span className="font-medium">{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Service Type
                                </span>
                                <span className="font-medium">{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Booking Date
                                </span>
                                <span className="font-medium">{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Total Amount
                                </span>
                                <span className="font-medium">₹{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payable Amount
                                </span>
                                <span className="font-medium">₹{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payment Method
                                </span>
                                <span className="font-medium">{}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payment Status
                                </span>
                                <span className="font-medium text-yellow-600">
                                  {}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payment Date
                                </span>
                                <span className="font-medium">
                                  {"No data available"}
                                </span>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>

                      <td className="py-4">
                        <span
                          className={`inline-flex patients-center px-3 py-1 rounded-full text-sm font-medium ${
                            patient.status.toLowerCase() === "success"
                              ? "bg-[#ECFDF3] text-[#039342]"
                              : patient.status.toLowerCase() === "progress"
                              ? "bg-[#FEF8E4] text-[#E4C569]"
                              : "bg-[#FDE5EA] text-[#F93C65]"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                              patient.status.toLowerCase() === "success"
                                ? "bg-[#039342]"
                                : patient.status.toLowerCase() === "progress"
                                ? "bg-[#E4C569]"
                                : "bg-[#F93C65]"
                            }`}
                          ></span>
                          {patient.status}
                        </span>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-black text-white">
                            <DropdownMenuItem onClick={handleViewDetails}>
                              <Eye />
                              View Appointment Details
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem onClick={handleClick}>
                              <img src={Vector} className="w-4 h-4" />
                              View Patient Profile
                            </DropdownMenuItem>
                            <hr />
                            {/* Open Dialog on Click */}

                            <DropdownMenuItem
                              onClick={() => setIsDialogOpen(true)}
                            >
                              <img src={Invoice} className="w-4 h-4" />
                              Bill Summary (Physio End)
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <Lock />
                              Block Patient
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                          <Dialog
                            open={openDialog}
                            onOpenChange={setOpenDialog}
                          >
                            <DialogTrigger asChild>
                              {/* The trigger is managed by the "View Details" action */}
                              <Button style={{ display: "none" }} />
                            </DialogTrigger>
                            <DialogContent className="max-w-xl mx-auto p-4 bg-white shadow-none rounded-lg">
                              <div className="flex border-b">
                                <button
                                  onClick={() => setActiveTab("basic")}
                                  className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                    activeTab === "basic"
                                      ? "border-b-2 border-green-500 text-green-500"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Basic Details
                                </button>
                                <button
                                  onClick={() => setActiveTab("appointment")}
                                  className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                    activeTab === "appointment"
                                      ? "border-b-2 border-green-500 text-green-500"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Appointment Details
                                </button>
                                <button
                                  onClick={() => setActiveTab("payment")}
                                  className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                    activeTab === "treatment"
                                      ? "border-b-2 border-green-500 text-green-500"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Payment Details
                                </button>
                              </div>
                              <div className="p-2">
                                {activeTab === "basic" && (
                                  <div>
                                    <label className="block text-gray-700">
                                      Patient Name
                                    </label>
                                    <input
                                      type="text"
                                      value="Taimur Khan"
                                      readOnly
                                      className="w-full p-2 border rounded"
                                    />

                                    <label className="block mt-4 text-gray-700">
                                      Patient Age
                                    </label>
                                    <input
                                      type="text"
                                      value="12"
                                      readOnly
                                      className="w-full p-2 border rounded"
                                    />

                                    <label className="block mt-4 text-gray-700">
                                      Gender
                                    </label>
                                    <input
                                      type="text"
                                      value="Male"
                                      readOnly
                                      className="w-full p-2 border rounded"
                                    />
                                  </div>
                                )}
                                {activeTab === "appointment" && (
                                  <div className="grid grid-cols-2 gap-4 mt-0 ">
                                    <div>
                                      <label className="text-gray-600">
                                        Appointment Date
                                      </label>
                                      <input
                                        type="text"
                                        value="30 Jan 2025"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Appointment Time
                                      </label>
                                      <input
                                        type="text"
                                        value="4:00 PM"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Payment Method
                                      </label>
                                      <input
                                        type="text"
                                        value="Cash"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Booking Date
                                      </label>
                                      <input
                                        type="text"
                                        value="20 Jan 2025"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Consultation Charges
                                      </label>
                                      <input
                                        type="text"
                                        value="₹ 950"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Payment Date
                                      </label>
                                      <input
                                        type="text"
                                        value="20 Jan 2025"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Rescheduled Appointment Date
                                      </label>
                                      <input
                                        type="text"
                                        value="30 Jan 2025"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div>
                                      <label className="text-gray-600">
                                        Rescheduled Appointment Time
                                      </label>
                                      <input
                                        type="text"
                                        value="4:00 PM"
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <label className="text-gray-600">
                                        Patient Problem
                                      </label>
                                      <textarea
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      ></textarea>
                                    </div>
                                    <div className="col-span-2">
                                      <label className="text-gray-600">
                                        Physio Prescription
                                      </label>
                                      <textarea
                                        className="w-full p-2 mt-1 border rounded bg-gray-100"
                                        disabled
                                      ></textarea>
                                    </div>
                                  </div>
                                )}

                                {activeTab === "payment" && (
                                  <div className="mt-0 space-y-2 text-sm text-gray-700">
                                    <p className=" flex justify-between ">
                                      <span className="font-semibold">
                                        Consultation Charges:
                                      </span>{" "}
                                      {"₹960"}
                                    </p>

                                    <p className=" flex justify-between text-green-500">
                                      <span className="font-semibold ">
                                        Physioplus Coin:
                                      </span>
                                      <span>{"-₹0"}</span>
                                    </p>
                                    <p className=" flex justify-between text-green-500">
                                      <span className="font-semibold ">
                                        Voucher Code:
                                      </span>{" "}
                                      <span>{"-₹0"}</span>
                                    </p>
                                    <hr />
                                    <p className=" flex justify-between">
                                      <span className="font-semibold ">
                                        Total Bill
                                      </span>{" "}
                                      <span>{"₹960"}</span>
                                    </p>
                                  </div>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenu>

                        {/* Dialog Component */}
                        <Dialog
                          open={isDialogOpen}
                          onOpenChange={setIsDialogOpen}
                        >
                          <DialogContent className="max-w-lg bg-white text-black">
                            <DialogHeader>
                              <DialogTitle>Bill Summary</DialogTitle>
                              <DialogDescription>
                                Here are the details of the bill for this
                                patient.
                              </DialogDescription>
                            </DialogHeader>
                            {/* Add bill details here */}
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="treatment">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Patient name..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
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
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Patient Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Necessity</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {treatment.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <p className="font-medium">{patient.name}</p>
                      </td>
                      <td>{patient.date}</td>
                      <td>{patient.phone}</td>
                      <td>{patient.time}</td>
                      <td>
                        {patient.necessity}

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-0 text-black"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader className="flex justify-between">
                              <DialogTitle>Treatment Details</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Treatment Duration
                                </span>
                                <span className="font-medium">{"5 Days"}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Treatment Start Date
                                </span>
                                <span className="font-medium">
                                  {"20 Jan 2025"}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Treatment End Date
                                </span>
                                <span className="font-medium">
                                  {"25 Jan 2025"}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Service Type
                                </span>
                                <span className="font-medium">
                                  {"Home Care"}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Treatment Time
                                </span>
                                <span className="font-medium">{"4:30 PM"}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Treatment Amount
                                </span>
                                <span className="font-medium">₹{2500}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Amount Paid Yet
                                </span>
                                <span className="font-medium">₹{0}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payment Status
                                </span>
                                <span className="font-medium text-yellow-600">
                                  {"Not Paid"}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Payment Date
                                </span>
                                <span className="font-medium">
                                  {"No data available"}
                                </span>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>

                      <td className="py-4">
                        <span
                          className={`inline-flex patients-center px-3 py-1 rounded-full text-sm font-medium ${
                            patient.status.toLowerCase() === "success"
                              ? "bg-[#ECFDF3] text-[#039342]"
                              : patient.status.toLowerCase() === "progress"
                              ? "bg-[#FEF8E4] text-[#E4C569]"
                              : "bg-[#FDE5EA] text-[#F93C65]"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                              patient.status.toLowerCase() === "success"
                                ? "bg-[#039342]"
                                : patient.status.toLowerCase() === "progress"
                                ? "bg-[#E4C569]"
                                : "bg-[#F93C65]"
                            }`}
                          ></span>
                          {patient.status}
                        </span>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-black text-white">
                            <DropdownMenuItem onClick={handleView}>
                              <Eye />
                              View Appointment Details
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem onClick={handleClick}>
                              <img src={Vector} className="w-4 h-4" />
                              View Patient Profile
                            </DropdownMenuItem>
                            <hr />
                            {/* Open Dialog on Click */}
                            <DropdownMenuItem
                              onClick={() => setIsDialogOpen(true)}
                            >
                              <img src={Invoice} className="w-4 h-4" />
                              Bill Summary (Physio End)
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <Lock />
                              Block Patient
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                          <DialogTrigger asChild>
                            {/* The trigger is managed by the "View Details" action */}
                            <Button style={{ display: "none" }} />
                          </DialogTrigger>
                          <DialogContent className="max-w-xl mx-auto p-4 bg-white shadow-none rounded-lg">
                            <div className="flex border-b">
                              <button
                                onClick={() => setActiveTab("basic")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "basic"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Basic Details
                              </button>
                              <button
                                onClick={() => setActiveTab("appointment")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "appointment"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Appointment Details
                              </button>
                              <button
                                onClick={() => setActiveTab("payment")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "treatment"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Payment Details
                              </button>
                            </div>
                            <div className="p-2">
                              {activeTab === "basic" && (
                                <div>
                                  <label className="block text-gray-700">
                                    Patient Name
                                  </label>
                                  <input
                                    type="text"
                                    value="Taimur Khan"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />

                                  <label className="block mt-4 text-gray-700">
                                    Patient Age
                                  </label>
                                  <input
                                    type="text"
                                    value="12"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />

                                  <label className="block mt-4 text-gray-700">
                                    Gender
                                  </label>
                                  <input
                                    type="text"
                                    value="Male"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />
                                </div>
                              )}
                              {activeTab === "appointment" && (
                                <div className="grid grid-cols-2 gap-4 mt-0 ">
                                  <div>
                                    <label className="text-gray-600">
                                      Appointment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="30 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Appointment Time
                                    </label>
                                    <input
                                      type="text"
                                      value="4:00 PM"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Payment Method
                                    </label>
                                    <input
                                      type="text"
                                      value="Cash"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Booking Date
                                    </label>
                                    <input
                                      type="text"
                                      value="20 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Consultation Charges
                                    </label>
                                    <input
                                      type="text"
                                      value="₹ 950"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Payment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="20 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Rescheduled Appointment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="30 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Rescheduled Appointment Time
                                    </label>
                                    <input
                                      type="text"
                                      value="4:00 PM"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div className="col-span-2">
                                    <label className="text-gray-600">
                                      Patient Problem
                                    </label>
                                    <textarea
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    ></textarea>
                                  </div>
                                  <div className="col-span-2">
                                    <label className="text-gray-600">
                                      Physio Prescription
                                    </label>
                                    <textarea
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    ></textarea>
                                  </div>
                                </div>
                              )}

                              {activeTab === "payment" && (
                                <div className="mt-0 space-y-2 text-sm text-gray-700">
                                  <p className=" flex justify-between ">
                                    <span className="font-semibold">
                                      Consultation Charges:
                                    </span>{" "}
                                    {"₹960"}
                                  </p>

                                  <p className=" flex justify-between text-green-500">
                                    <span className="font-semibold ">
                                      Physioplus Coin:
                                    </span>
                                    <span>{"-₹0"}</span>
                                  </p>
                                  <p className=" flex justify-between text-green-500">
                                    <span className="font-semibold ">
                                      Voucher Code:
                                    </span>{" "}
                                    <span>{"-₹0"}</span>
                                  </p>
                                  <hr />
                                  <p className=" flex justify-between">
                                    <span className="font-semibold ">
                                      Total Bill
                                    </span>{" "}
                                    <span>{"₹960"}</span>
                                  </p>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        {/* Dialog Component */}
                        <Dialog
                          open={isDialogOpen}
                          onOpenChange={setIsDialogOpen}
                        >
                          <DialogContent
                            className="max-w-lg bg-white text-black shadow-lg border border-gray-300"
                            style={{ backgroundColor: "white" }}
                          >
                            <DialogHeader>
                              <DialogTitle>Bill Summary</DialogTitle>
                              <DialogDescription>
                                Here are the details of the bill for this
                                patient.
                              </DialogDescription>
                            </DialogHeader>
                            {/* Add bill details here */}
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Blocked">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Patient name..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Date Filter
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Week</DropdownMenuItem>
                  <DropdownMenuItem>Month</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Not in Service
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>

              <Dialog
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                modal={false}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Blocked
                    <Lock />
                  </Button>
                </DialogTrigger>

                <DialogContent className="absolute right-96 top-3/4 -translate-y-52 ml-96 w-80 p-0 shadow-lg bg-white border border-gray-300 rounded-lg ">
                  <div className="bg-[#039342] text-white p-5 rounded-t-lg">
                    <DialogHeader>
                      <DialogTitle>Block Patient</DialogTitle>
                    </DialogHeader>
                  </div>
                  <div className="px-4 mt-0 mb-4">
                    <h2>Name</h2>
                    <Input
                      placeholder="Enter name if available"
                      className="mb-2"
                    />
                    <h2>Number</h2>
                    <Input
                      placeholder="Enter number to block patient"
                      className="mb-2"
                    />
                    <h2>Reason</h2>
                    <Input
                      placeholder="Enter reason to block patient"
                      className="mb-4"
                    />
                    <Button className="bg-[#039342] text-white w-full hover:bg-[#039342]">
                      Save & Block Patient
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* Table */}

          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Patient Name</th>
                    <th>Contact No.</th>
                    <th>Born Year</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Pincode</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">
                        <p className="font-medium">{patient.name}</p>
                      </td>
                      <td>{patient.phone}</td>
                      <td>{patient.date}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.state}</td>
                      <td>{patient.city}</td>
                      <td>{patient.pincode}</td>

                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black text-white">
                            <DropdownMenuItem>
                              <img src={Vector} className="w-4 h-4" />
                              View Patient Profile
                            </DropdownMenuItem>

                            <hr />
                            <DropdownMenuItem>
                              <Unlock />
                              Unblock Patient
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Coins">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Patient name..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {/* Plan Status Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Date
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Week</DropdownMenuItem>
                  <DropdownMenuItem>Month</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    State Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
              {/* Physio’s Plan Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    City Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Pincode Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Patient Name</th>
                    <th>Contact No.</th>
                    <th>Born Year</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Pincode</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">
                        <p className="font-medium">{patient.name}</p>
                      </td>
                      <td>{patient.phone}</td>
                      <td>{patient.date}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.state}</td>
                      <td>{patient.city}</td>
                      <td>
                        <Dialog
                          open={isModalOpen}
                          onOpenChange={setIsModalOpen}
                        >
                          <DialogTrigger asChild>
                            <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                              Approve
                              <img src={coin} alt="" className="text-black" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="rounded-lg p-6 w-[400px]">
                            <DialogHeader>
                              <DialogTitle>Add Physioplus Coins</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium">
                                  Add Coins Amount
                                </label>
                                <Input
                                  type="number"
                                  placeholder="₹ Enter Coins Amount"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium">
                                  Coin Expiry Date
                                </label>
                                <div className="relative">
                                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                  <Input
                                    type="text"
                                    placeholder="Select Date"
                                    readOnly
                                    className="pl-10"
                                  />
                                </div>
                                <Calendar
                                  id="calendar"
                                  mode="single"
                                  className="mt-2 hidden"
                                />
                              </div>
                              <div className="flex justify-between">
                                <Button
                                  variant="outline"
                                  onClick={() => setIsModalOpen(false)}
                                  className="w-1/3"
                                >
                                  Cancel
                                </Button>
                                <Button className="w-1/2 bg-green-600 hover:bg-green-700">
                                  Add Physioplus Coins
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>

                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black text-white">
                            <DropdownMenuItem onClick={handleClick}>
                              <Eye />
                              View Detail{" "}
                            </DropdownMenuItem>

                            <hr />
                            <DropdownMenuItem>
                              <Lock />
                              Block Patient
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* Pagination */}
      <div className="flex justify-between patients-center mt-6">
        <Button className="bg-white px-4 py-2 text-black hover:bg-white hover:text-black rounded">
          Previous
        </Button>
        <div>
          {[...Array(10)].map((_, index) => (
            <Button
              key={index}
              className={`px-3 py-1 mx-1 rounded ${
                index === 0
                  ? "bg-[#F9F5FF] text-[#7F56D9]"
                  : "bg-gray-200 hover:bg-[#F9F5FF] hover:text-[#7F56D9]"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
        <Button className="bg-white text-black hover:bg-white hover:text-black px-4 py-2 rounded">
          Next
        </Button>
      </div>
    </div>
  );
};
export default Patient;
