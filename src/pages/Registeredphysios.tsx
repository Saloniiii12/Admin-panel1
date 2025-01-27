import React, { useState } from "react";
import { Button } from "@/ui/button"; // Import Shadcn UI Button component
import { Table, TableHeader } from "@/ui/table"; // You can use Shadcn UI components for the table as well
import { Toaster } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/ui/dropdown-menu";
import { ChevronDown,ChevronUp} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Avatar } from "@/ui/avatar";
import { Filter } from "lucide-react";
import {  TableBody, TableCell, TableHead, TableRow } from "@/ui/table";
// Define the Appointment type
type Appointment = {
  patientName: string;
  gender: string;
  age: number;
  serviceType: string;
  physioName: string;
  appointmentDate: string;
  totalAmount: number;
  paymentStatus: string;
  paymentDetails: string;
};

// Sample appointment data
const appointments: Appointment[] = [
  {
    patientName: "Ashwin Sharma",
    gender: "Male",
    age: 20,
    serviceType: "Home Care",
    physioName: "Dr. Abh Mehra",
    appointmentDate: "20 Oct 2024, 4:00 PM",
    totalAmount: 450,
    paymentStatus: "Paid",
    paymentDetails: "Paid on 20 Oct, 2024 at 4:10 PM",
  },
  {
    patientName: "Ashwin Sharma",
    gender: "Male",
    age: 20,
    serviceType: "Home Care",
    physioName: "Dr. Himanshu",
    appointmentDate: "20 Oct 2024, 4:00 PM",
    totalAmount: 450,
    paymentStatus: "Not Paid",
    paymentDetails: "No data available",
  },
  // Add more rows as needed
];


  

const RegisteredPhysios: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Registered Physios</h1>
          <div className="flex items-center space-x-3 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white text-black hover:bg-gray-200">
                  All Time
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>This Week</DropdownMenuItem>
                <DropdownMenuItem>This Month</DropdownMenuItem>
                <DropdownMenuItem>This Year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-white text-black hover:bg-gray-200 ml-auto mr-4">
              Add Physio's
            </Button>
            <Button className="bg-green-500 text-white hover:bg-green-600">
              Premium Plan
            </Button>
          </div>
        </div>
        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList>
            <TabsTrigger value="basic detail">Basic Detail</TabsTrigger>
            <TabsTrigger value="subscription plan">
              Subscription Plan
            </TabsTrigger>
            <TabsTrigger value="transaction">Transaction</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="appointment">Appointment</TabsTrigger>
            <TabsTrigger value="rating & reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="help & support">Help & Support</TabsTrigger>
          </TabsList>
          <TabsContent value="basic detail">
            {/* Basic Details Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  {/* Profile Image */}
                  <Avatar className="w-32 h-32 rounded-full bg-gray-100 mt-5" />
                  {/* Info Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Name:</strong>
                      </p>
                      <p style={{ color: "#515662" }}>Dr. Abhi Ajmera</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Gender:</strong>
                      </p>
                      <p style={{ color: "#515662" }}>Male</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Experience:</strong>
                      </p>
                      <p style={{ color: "#515662" }}>2 Years</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Date of Birth:</strong>
                      </p>
                      <p style={{ color: "#515662" }}>19 Jan 1998</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Contact Number:</strong>
                      </p>
                      <p style={{ color: "#515662" }}>9876543210</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                      <p>
                        <strong>Email :</strong>
                      </p>
                      <p style={{ color: "#515662" }}>bayabhishek@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                    <h3 className="font-semibold mb-2">About Physio</h3>
                    <p>
                      Dr. Abhi Mehra is a skilled physiotherapist dedicated to
                      improving patients' physical health and well-being. With
                      expertise in pain management, rehabilitation, and mobility
                      restoration, Dr. Mehra offers personalized treatment plans
                      tailored to individual needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card className="mb-6 ">
            <CardHeader className="flex bg-green-600 rounded-lg">
        <div className="flex items-center space-x-2 ">
          <CardTitle>Professional Details</CardTitle>
          <button onClick={toggleContent} className="p-2 ">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      {isOpen && (
        
        <CardContent>
          
          <div className="space-y-4">
            <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2 ">Degree Name</h3>
              <p>Bachelor of Physiotherapy, Master of Physiotherapy</p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">Degree Images</h3>
            </div>
            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">Specialization</h3>
              <p>General Pain, Ortho Pain</p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">Sub-Specialization</h3>
              <p>Elbow Pain, Neck Pain, Leg Pain, Head Pain, Back Pain</p>
            </div>
            <div className="flex space-x-4">
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                <h3 className="font-semibold mb-2">IAP Registered</h3>
                <p>Yes</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                <h3 className="font-semibold mb-2">IAP Number</h3>
                <p>8750123645112100</p>
              </div>
            </div>
            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">IAP certificate</h3>
            </div>
            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">IAP Number</h3>
              <p>8750123645112100</p>
            </div>
            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">IAP Registered</h3>
              <p>No</p>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
     
            {/* Clinic Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-green-600 rounded-lg">
        <div className="flex items-center space-x-2">
          <CardTitle>Clinic Details</CardTitle>
          <button onClick={toggleContent} className="p-2 ">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      {isOpen && (
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Clinic Name</h3>
                      <p>Abhishek Ajmera Clinic and Physio Center</p>
                    </div>
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Clinic Address</h3>
                      <p>Plot 4 Ram Nagar, Shyam Nagar, Jaipur 302020</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">City</h3>
                      <p>Jaipur</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">State</h3>
                      <p>Rajasthan</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Pincode</h3>
                      <p>302020</p>
                    </div>
                  </div>
                  <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                    <h3 className="font-semibold mb-2">Clinic Images</h3>
                  </div>

                  <div className="flex space-x-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Consultation Fees</h3>
                      <p>₹450</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">
                        Consultation Duration
                      </h3>
                      <p>30 minutes</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Working Days & Time</h3>
                   {/* <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1"> */}
                    
                    </div>
                    
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                    <ul className="list-disc list-inside">
                      <li>
                        Sunday: 10:00 AM - 12:00 PM, 1:00 PM - 2:00
                        PM
                      </li>
                    </ul>
                    </div>
                  </div>
                  
                  
              
              </CardContent>
      )}
            </Card>

            {/* Home Care Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-green-600 rounded-lg">
        <div className="flex items-center space-x-2">
          <CardTitle>Home Care Details</CardTitle>
          <button onClick={toggleContent} className="p-2 ">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      {isOpen && (
              <CardContent>
                <div className="space-y-4">
                <div className="flex space-x-4">
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Pincode Where you serve</h3>
                      <p>302020</p>
                    </div>
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Consultation Fees</h3>
                      <p>₹ 450</p>
                    </div>
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Consultation Duration</h3>
                      <p>30 minutes</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                  <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                    <ul className="list-disc list-inside">
                      <li>
                        Sunday: 10:00 AM - 12:00 PM, 1:00 PM - 2:00
                        PM
                      </li>
                    </ul>
                    </div>
                  </div>
                 
                </div>
              </CardContent>
      )}
            </Card>
            {/* Other Treatment Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-green-600 rounded-lg">
        <div className="flex items-center space-x-2">
          <CardTitle>Other Treatment Details</CardTitle>
          <button onClick={toggleContent} className="p-2 ">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      {isOpen && (
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
                  <div className="flex space-x-4">
                  <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                    <ul className="list-disc list-inside">
                      <li>
                        Sunday: 10:00 AM - 12:00 PM, 1:00 PM - 2:00
                        PM
                      </li>
                    </ul>
                    </div>
                  </div>
                 
                </div>
              </CardContent>
      )}
            </Card>
          </TabsContent>
          <TabsContent value="subscription plan">
          <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-green-600">
  

          <CardContent className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mt-5 text-white">Preminum Plan</h3>
            <p className="text-2xl font-bold text-white">₹6,499</p>
            <div className="flex flex-wrap gap-5 text-white">
              <p>Patient Date: 10 Jan 2024</p>
              <p>Plan Duration: 6 Months</p>
              <p>Valid From: 10 Jan 2024</p>
              <p>Valid Till: 10 June 2024</p>
            </div>
            <Button className="mt-2 bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-#EAEBEC"  >
              Active
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC">
          <CardContent className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mt-5 text-white">Free Plan</h3>
            <p className="text-2xl font-bold text-white">₹0</p>
            <div className="flex flex-wrap gap-5 text-white">
              <p>Patient Count: 4/4 Patient</p>
              <p>Plan Duration: 6 Months</p>
              <p>Valid From: 10 Jan 2024</p>
              <p>Valid Till: 10 June 2024</p>
            </div>
            <Button className="mt-2 bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC" >
              Expired
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
           
            <div className="flex gap-4 items-center mt-6">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Payment Type Filter
              </Button>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Date Filters
              </Button>
              <Button variant="outline" className="flex items-center">
                {/* <exports className="mr-2 h-4 w-4" /> */}
                Export
              </Button>
            </div>
          </div>

          <Table  className="w-full">
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
           
          </Table>

          
        </CardContent>
      </Card>
    </div>
          </TabsContent>
          <TabsContent value="transaction">
          <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Transaction</h1>
        <div className="flex gap-4 items-center">
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter by date
          </Button>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter Any
          </Button>
          <Button variant="outline" className="flex items-center">
            
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction Id</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Service Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
            
              <TableBody>
                {[...Array(7)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>Transaction Id</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">Himanshu Saini</span>
                        <span className="text-sm text-gray-500">30 Jan 2024</span>
                      </div>
                    </TableCell>
                    <TableCell>Home Care</TableCell>
                    <TableCell>₹1000</TableCell>
                    <TableCell>Consultation</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${index === 2 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                      >
                        {index === 2 ? "Pending" : "Success"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost">...</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        
        </CardContent>
      </Card>
    </div>

      
          </TabsContent>
          <TabsContent value="wallet">
            {/* Content for Clinic Appointments */}
          </TabsContent>
          <TabsContent value="appointment">
            {/* Content for Clinic Appointments */}
          </TabsContent>
          <TabsContent value="rating & reviews">
          <div className="p-6">
      <Card className="mb-6">
        <CardContent className="flex justify-between items-center">
          <div className="text-center mt-5">
            <h3 className="text-lg font-semibold">Total Reviews</h3>
            <p className="text-2xl">15,020</p>
          </div>
          <div className="text-center mt-5">
            <h3 className="text-lg font-semibold">Total Rating</h3>
            <p className="text-2xl">2,900</p>
          </div>
          <div className="text-center mt-5">
            <h3 className="text-lg font-semibold">Average Rating</h3>
            <p className="text-2xl">4.2 Star</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex justify-between items-center mb-4 mt-6">
            <h2 className="text-xl font-semibold">Rating & Reviews</h2>
            <div className="flex gap-4 items-center">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Rating 4, 5, 3
              </Button>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Consultation
              </Button>
              <Button variant="outline" className="flex items-center">
                {/* //<Export className="mr-2 h-4 w-4" /> */}
                Export
              </Button>
            </div>
          </div>

          <Table>
            
              <TableHeader>
                
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Appointment Id</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Posted On</TableHead>
                <TableHead>Actions</TableHead>
                </TableRow>
                 </TableHeader>
            
           
            <TableBody>
              {[...Array(8)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Mohan Singh<br /><span className="text-sm text-muted">@Male</span></TableCell>
                  <TableCell>#PPHY125613</TableCell>
                  <TableCell>4 / 5 Star</TableCell>
                  <TableCell>24 Jan 2025</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost">...</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
            
          
        </CardContent>
      </Card>
    </div>
  
          </TabsContent>
          <TabsContent value="help & support">
            {/* Table Section */}
            <div className="overflow-x-auto">
              <Table className="min-w-full border-collapse">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">
                      Patient Name
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Service Type
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Physio Name
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Appointment Date & Time
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Total Amount
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">
                        {appointment.patientName} <br />
                        <span className="text-gray-500 text-sm">
                          @{appointment.gender} • Age: {appointment.age}
                        </span>
                      </td>
                      <td className="border border-gray-300 p-2">
                        {appointment.serviceType}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {appointment.physioName}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {appointment.appointmentDate}
                      </td>
                      <td className="border border-gray-300 p-2">
                        ₹ {appointment.totalAmount}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <span
                          className={`${
                            appointment.paymentStatus === "Paid"
                              ? "text-green-500 font-bold"
                              : "text-red-500 font-bold"
                          }`}
                        >
                          {appointment.paymentStatus}
                        </span>
                        <br />
                        <span className="text-gray-500 text-sm">
                          {appointment.paymentDetails}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-4">
          <Button className="bg-gray-300 px-4 py-2 rounded">Previous</Button>
          <div>
            {[...Array(10)].map((_, index) => (
              <Button
                key={index}
                className={`px-3 py-1 mx-1 rounded ${
                  index === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </Button>
            ))}
          </div>
          <Button className="bg-gray-300 px-4 py-2 rounded">Next</Button>
        </div>
      </div>
      {/* Toaster Notification */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegisteredPhysios;
