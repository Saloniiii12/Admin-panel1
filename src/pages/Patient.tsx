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

import { useNavigate } from "react-router-dom";

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

  const handleViewClick = () => {
    const physioId = 3; // Replace this with dynamic ID logic
    navigate(`/view/${physioId}`);
  };
  

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
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>Yesterday</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent> */}
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
                            <DropdownMenuItem onClick={handleViewClick}>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-0 text-black"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                        </DropdownMenu>
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
                            <DropdownMenuItem>
                              <Eye />
                              View Appointment Details
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <img src={Vector} className="w-4 h-4" />
                              View Patient Profile
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <img src={Invoice} className="w-4 h-4" />
                              Bill Summary(Physio End)
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-0 text-black"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                        </DropdownMenu>
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
                            <DropdownMenuItem>
                              <Eye />
                              View Appointment Details
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <img src={Vector} className="w-4 h-4" />
                              View Patient Profile
                            </DropdownMenuItem>
                            <hr />
                            <DropdownMenuItem>
                              <img src={Invoice} className="w-4 h-4" />
                              Bill Summary(Physio End)
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

              <Button variant="outline" className="bg-[#039342] text-white">
                {" "}
                Block Patient
                <Lock className="ml-2" />
              </Button>
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
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>Yesterday</DropdownMenuItem>
                  <DropdownMenuItem>Custom</DropdownMenuItem>
                </DropdownMenuContent> */}
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
                    Pincode Wise
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuItem>Clinic</DropdownMenuItem>
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
                      <td>
                        <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                          Approve
                          <img src={coin} alt="" className="text-black" />
                        </Button>
                      </td>

                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black text-white">
                            <DropdownMenuItem onClick={handleViewClick}>
                              <Eye />
                              View Detail{" "}
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
