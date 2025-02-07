import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  MoreVertical,
  Lock,
Search,
} from "lucide-react";
import image from "@/assets/Export (1).png"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const physios = [
  {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Free Plan",
    details: "0/4 Patient",
    status: "Not Approved",
    date:"No data available",
  },
  {
    name: "Demi Wilkinson",
    email: "demi@untitledui.com",
    type: "Home Care",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 20 Oct 2024 at 4 AM",
  },
  {
    name: "Candice Wu",
    email: "candice@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Free Plan",
    details: "0/4 Patient",
    status: "Not Approved",
    date:"No data available",
  },
  {
    name: "Drew Cano",
    email: "drew@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 20 Oct 2024 at 4 AM",
  },
  {
    name: "Orlando Diggs",
    email: "orlando@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Free Plan",
    details: "0/4 PAtient",
    status: "Not Approved",
    date:"No data available",
  },
  {
    name: "Andi Lane",
    email: "andi@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 20 Oct 2024 at 4 AM",
  },
];
const approvedphysios = [
  {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
  {
    name: "Demi Wilkinson",
    email: "demi@untitledui.com",
    type: "Home Care",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
  {
    name: "Candice Wu",
    email: "candice@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
  {
    name: "Drew Cano",
    email: "drew@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
  {
    name: "Orlando Diggs",
    email: "orlando@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
  {
    name: "Andi Lane",
    email: "andi@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
    date:"On 23 Oct 2024 at 4 AM",
  },
];
const unapprovedphysios = [
  {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    //status: "Approved",
  },
  {
    name: "Demi Wilkinson",
    email: "demi@untitledui.com",
    type: "Home Care",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    //status: "Approved",
  },
  {
    name: "Candice Wu",
    email: "candice@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    //status: "Approved",
  },
  {
    name: "Drew Cano",
    email: "drew@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    //status: "Approved",
  },
  {
    name: "Orlando Diggs",
    email: "orlando@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    //status: "Approved",
  },
  {
    name: "Andi Lane",
    email: "andi@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    //status: "Approved",
  },
];
const Registeredphysios: React.FC = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    const physioId = 3; // Replace this with dynamic ID logic
    navigate(`/view/${physioId}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    <div className="flex justify-end items-center mb-6">
    <div className="flex items-center gap-5 mr-auto flex-row">
      <h1 className="font-semibold text-2xl">Registered Physio's</h1>
      <p className="text-lg text-black bg-[#E6F4EC]">(15,000 Physio's)</p>
    </div>
    <div className="flex items-center gap-4">
    <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    All Time
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Week</DropdownMenuItem>
                  <DropdownMenuItem>Month</DropdownMenuItem>
                  <DropdownMenuItem>Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
      <Button variant="outline">Add Physio's +</Button>
      <Button
        variant="outline"
        className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
      >
        <img src={image} alt="Export Icon" className="w-5 h-5" />
        Export
      </Button>
    </div>
  </div>
  
      <div className="grid grid-cols-5 gap-0 ">
        <Card className="p-4 text-center rounded-none">
          <p>Total Physio's</p>
          <p className="text-xl font-semibold">12,999</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Approved Physio's</p>
          <p className="text-xl font-semibold">12,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Premium Plan Physio's</p>
          <p className="text-xl font-semibold ">10,120</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Free Plan Physio's</p>
          <p className="text-xl font-semibold">2,000</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Pending Physio's</p>
          <p className="text-xl font-semibold">2,900</p>
        </Card>
      </div>
      {/* Tabs */}

      <Tabs defaultValue="all">
        <TabsList className="flex p-2 mt-5 bg-gray-50 justify-start ">
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
            value="edit"
          >
            Physio Edit Request
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
          <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search for Physio’s doctor name..."
        className="pl-10"
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
{/* 
              Service Type Dropdown */}
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
                    <tr key={index} className="border-b">
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
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
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
                        <p className="text-sm text-gray-500">
                          {physio.date}
                        </p>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleViewClick}>
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
        </TabsContent>
        <TabsContent value="approved">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
          <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search for Physio’s doctor name..."
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
                    <th className="p-2">Physio Details</th>
                    <th>Service Type</th>
                    <th>Contact Number</th>
                    <th>Plan Details</th>
                    <th>Profile Status</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedphysios.map((physio, index) => (
                    <tr key={index} className="border-b">
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
                              physio.plan === "Basic Plan"
                                ? "bg-blue-400"
                                : physio.plan === "Premium Plan"
                                ? "bg-yellow-300"
                                : ""
                            }`}
                          ></span>
                          {physio.plan}
                        </p>
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-black flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              physio.status === "Approved"
                                ? "bg-green-400"
                                : physio.status === "Not Approved"
                                ? "bg-red-500"
                                : ""
                            }`}
                          ></span>
                          {physio.status}
                        </p>
                        <p className="text-sm text-gray-500">
                          {physio.date}
                        </p>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleViewClick}>
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
        </TabsContent>
        <TabsContent value="unapproved">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
          <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search for Physio’s doctor name..."
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
                    <th className="p-2">Physio Details</th>
                    <th>Service Type</th>
                    <th>Contact Number</th>
                    <th>Plan Details</th>
                    <th>Profile Status</th>
                  </tr>
                </thead>
                <tbody>
                  {unapprovedphysios.map((physio, index) => (
                    <tr key={index} className="border-b">
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
                              physio.plan === "Basic Plan"
                                ? "bg-blue-400"
                                : physio.plan === "Premium Plan"
                                ? "bg-yellow-300"
                                : ""
                            }`}
                          ></span>
                          {physio.plan}
                        </p>
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
                      </td>
                      <td>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                              Approve
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60  shadow-lg bg-white p-4 rounded-md ">
                            <h3 className="font-bold">
                              Wants to approved Dr. Abhishek Mehra?
                            </h3>
                            <p>
                              Are you sure you want to approve this
                              physiotherapist?Approving them will grant them
                              access to the plateform,allowing them to provide
                              services and manage thier profile
                            </p>
                            <Button className=" flex-row bg-green-700">
                              Cancel
                            </Button>
                            <Button className="ml-3 mt-2 bg-green-700">
                              Approve
                            </Button>
                          </PopoverContent>
                        </Popover>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleViewClick}>
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
        </TabsContent>
        <TabsContent value="blocked">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
          <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search for Physio’s doctor name..."
        className="pl-10"
      />
    </div>
            <div className="flex gap-2">
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
        <DialogTitle>Block Physio</DialogTitle>
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
                    placeholder="Enter number to block physio"
                    className="mb-2"
                  />
                   <h2>Reason</h2>
                  <Input
                    placeholder="Enter reason to block physio"
                    className="mb-4"
                  />
                  <Button className="bg-[#039342] text-white w-full hover:bg-[#039342]">
                    Save & Block Physio
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
                    <th className="p-2">Physio Details</th>
                    <th>Service Type</th>
                    <th>Contact Number</th>
                    <th>Plan Details</th>
                    <th>Profile Status</th>
                  </tr>
                </thead>
                <tbody>
                  {physios.map((physio, index) => (
                    <tr key={index} className="border-b">
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
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
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
                        <p className="text-sm text-gray-500">
                          {physio.date}
                        </p>
                      </td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleViewClick}>
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
        </TabsContent>
        <TabsContent value="edit">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
          <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search for Physio’s doctor name..."
        className="pl-10"
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
{/* 
              Service Type Dropdown */}
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
                   
                  </tr>
                </thead>
                <tbody>
                  {physios.map((physio, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <p className="font-medium">{physio.name}</p>
                        <p className="text-sm text-gray-500">{physio.email}</p>
                      </td>
                      <td>{physio.type}</td>
                      <td>{physio.phone}</td>
                      
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={handleViewClick}>
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
        </TabsContent>
      </Tabs>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
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
export default Registeredphysios;
