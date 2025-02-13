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
} from "lucide-react";
import image from "@/assets/Export (1).png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const details = [
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    experience: "2+ Years",
    state: "Rajasthan",
    date: "2005",
    speciality: "General Pain Sports Physiotherapy",
    status: "Approved",
    statusR: "Not Approved",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    experience: "2+ Years",
    state: "Rajasthan",
    status: "Approved",
    date: "2005",
    speciality: "General Pain Sports Physiotherapy",
    statusR: "Not Approved",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    experience: "2+ Years",
    state: "Rajasthan",
    date: "2005",
    status: "Approved",
    speciality: "General Pain Sports Physiotherapy",
    statusR: "Not Approved",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    experience: "2+ Years",
    state: "Rajasthan",
    date: "2005",
    status: "Approved",
    speciality: "General Pain Sports Physiotherapy",
    statusR: "Not Approved",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    state: "Rajasthan",
    experience: "2+ Years",
    status: "Approved",
    date: "2005",
    speciality: "General Pain Sports Physiotherapy",
    statusR: "Not Approved",
  },
  {
    name: "Olivia Rhye",
    phone: "9876543210",
    state: "Rajasthan",
    experience: "2+ Years",
    status: "Approved",
    date: "2005",
    speciality: "General Pain Sports Physiotherapy",
    statusR: "Not Approved",
  },
];

const Editrequest: React.FC = () => {
  const navigate = useNavigate();

  const [selectedRow, setSelectedRow] = useState(null);

const handleDialogOpen = (index) => {
  setSelectedRow(index);
};

const [open, setOpen] = useState(false);



const handleDialogClose = () => {
  setSelectedRow(null);
};


  const handleClick = () => {
    const physioId = 4; // Replace this with dynamic ID logic
    navigate(`/viewedit/${physioId}`);
  };
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-end patients-center mb-6">
        <div className="flex patients-center gap-5 mr-auto flex-row">
          <h1 className="font-semibold text-2xl">
            Physio Profile Edit Request
          </h1>
          <p className="text-lg text-black bg-[#E6F4EC]">(15,020 Physio's)</p>
        </div>
        <div className="flex patients-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                All Time
                <ChevronDown className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
          >
            <img src={image} alt="Export Icon" className="w-5 h-5" />
            Export
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0 ">
        <Card className="p-4 text-center rounded-none">
          <p>Total Request</p>
          <p className="text-xl font-semibold">20,000</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Total Approved Request</p>
          <p className="text-xl font-semibold">12,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Total Rejected Request</p>
          <p className="text-xl font-semibold ">10,120</p>
        </Card>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="physio edit">
        <TabsList className="flex p-2 mt-5 bg-gray-50 justify-start ">
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="physio edit"
          >
            Physio Edit Request
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="Physio approved"
          >
            Physio Edit Approved
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="Profile Rejected"
          >
            Profile Edit Rejected
          </TabsTrigger>
        </TabsList>
        <TabsContent value="physio edit">
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
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Physio Details</th>
                    <th>Specialty</th>
                    <th>Experience</th>
                    <th>Contact Number</th>
                    <th>State</th>
                    <th>Issued Rated Date</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4">
                        <p className="font-medium">{detail.name}</p>
                      </td>
                      <td>{detail.speciality}</td>
                      <td>{detail.experience}</td>
                      <td>{detail.phone}</td>
                      <td>{detail.state}</td>
                      <td>{detail.date}</td>

                      <td>
                      <DropdownMenu>
  <DropdownMenuTrigger>
    <MoreVertical className="cursor-pointer" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-black text-white">
    <DropdownMenuItem onClick={handleClick}>
      <Eye />
      View Edit Request{" "}
    </DropdownMenuItem>

    <hr />
    
    {/* Dialog for Reject Request */}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Lock />
          Reject Request
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="absolute right-96 top-3/4 -translate-y-52 ml-96 w-80 p-0 shadow-lg bg-white border border-gray-300 rounded-lg">
          <div className="bg-[#039342] text-white p-5 rounded-t-lg">
            <DialogHeader>
              <DialogTitle>Reject Request</DialogTitle>
            </DialogHeader>
          </div>
          <div className="px-4 mb-0">
            <h2>Enter Reason</h2>
            <Input
              placeholder="Enter reason to block"
              className="mt-2 mb-2"
            />
          </div>
          <Button className="bg-[#039342] text-white w-full hover:bg-[#039342] px-4 mb-6">
                    Save & Block Physio
                  </Button>
        </DialogContent>
    </Dialog>
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
        <TabsContent value="Physio approved">
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
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Physio Details</th>
                    <th>Speciality</th>
                    <th>Contact Number</th>
                    <th>State</th>
                    <th>Profile Status</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <p className="font-medium">{detail.name}</p>
                      </td>
                      <td>{detail.speciality}</td>
                      <td>{detail.phone}</td>
                      <td>{detail.state}</td>
                      <td>{detail.status}</td>
                      <td>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreVertical className="cursor-pointer" />
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Profile Rejected">
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
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardContent>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="p-2">Physio Details</th>
                    <th>Speciality</th>
                    <th>Contact Number</th>
                    <th>State</th>
                    <th>Profile Status</th>
                  </tr>
                </thead>
                <tbody>
                {details.map((detail, index) => (
  <tr key={index} className="border-b">
    <td className="p-2">
      <p className="font-medium">{detail.name}</p>
    </td>
    <td>{detail.speciality}</td>
    <td>{detail.phone}</td>
    <td>{detail.state}</td>
    <td>{detail.statusR}</td>
    <td>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-black text-white">
          {/* Open Dialog on Click */}
          <DropdownMenuItem onClick={() => handleDialogOpen(index)}>
            <Eye />
            View Reject Reason
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Dialog Component (Only Opens for Selected Row) */}
      <Dialog open={selectedRow === index} onOpenChange={handleDialogClose}>
        <DialogContent className="absolute right-96 top-3/4 -translate-y-52 ml-96 w-80 p-0 shadow-lg bg-white border border-gray-300 rounded-lg">
          <div className="bg-[#039342] text-white p-5 rounded-t-lg">
            <DialogHeader>
              <DialogTitle>View Reject Reason</DialogTitle>
            </DialogHeader>
          </div>
          <div className="px-4 mt-0 mb-4">
            <h2>View Reason</h2>
            <Input
              placeholder="Multiple times request raised by physio and we don't want to edit these time."
              className="mb-2"
            />
          </div>
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
export default Editrequest;
