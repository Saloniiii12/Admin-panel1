import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Lock,
} from "lucide-react";
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
  },
  {
    name: "Demi Wilkinson",
    email: "demi@untitledui.com",
    type: "Home Care",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
  },
  {
    name: "Candice Wu",
    email: "candice@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Free Plan",
    details: "0/4 Patient",
    status: "Not Approved",
  },
  {
    name: "Drew Cano",
    email: "drew@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
  },
  {
    name: "Orlando Diggs",
    email: "orlando@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Free Plan",
    details: "0/4 PAtient",
    status: "Not Approved",
  },
  {
    name: "Andi Lane",
    email: "andi@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
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
  },
  {
    name: "Demi Wilkinson",
    email: "demi@untitledui.com",
    type: "Home Care",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
  },
  {
    name: "Candice Wu",
    email: "candice@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    status: "Approved",
  },
  {
    name: "Drew Cano",
    email: "drew@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
  },
  {
    name: "Orlando Diggs",
    email: "orlando@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Basic Plan",
    details: "0/4 Patient",
    status: "Approved",
  },
  {
    name: "Andi Lane",
    email: "andi@untitledui.com",
    type: "Clinic & Home",
    phone: "9876543210",
    plan: "Premium Plan",
    details: "Paid on 20 Oct 2024 at 4 30 PM",
    status: "Approved",
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
        <div className="flex items-center gap-4">
          <Button variant="outline">
            All Time <ChevronDown />
          </Button>
          <Button variant="outline">Add Physio's +</Button>
          <Button
            variant="outline"
            className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
          >
            Export
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="grid grid-cols-5 divide-x divide-gray-300 border border-gray-300 rounded-lg p-4">
          <div className="text-center px-4">
            <p className="text-lg font-semibold">Total Physio's</p>
            <p className="text-2xl font-bold">15,020</p>
          </div>
          <div className="text-center px-4">
            <p className="text-lg font-semibold">Approved Physio's</p>
            <p className="text-2xl font-bold">12,999</p>
          </div>
          <div className="text-center px-4">
            <p className="text-lg font-semibold">Premium Plan Physio's</p>
            <p className="text-2xl font-bold">10,120</p>
          </div>
          <div className="text-center px-4">
            <p className="text-lg font-semibold">Free Plan Physio's</p>
            <p className="text-2xl font-bold">2,900</p>
          </div>
          <div className="text-center px-4">
            <p className="text-lg font-semibold">Pending Physio's</p>
            <p className="text-2xl font-bold">2,000</p>
          </div>
        </CardContent>
      </Card>
      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="flex space-x-4 border-b p-2 mt-5">
          <TabsTrigger value="all">All Physio's</TabsTrigger>
          <TabsTrigger value="approved">Approved Physio's</TabsTrigger>
          <TabsTrigger value="unapproved">Unapproved Physio's</TabsTrigger>
          <TabsTrigger value="blocked">Block Physio's</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* Search & Filters */}
          <div className="flex justify-between my-4">
            <Input
              placeholder="Search for Physio’s doctor name..."
              className="w-1/3"
            />
            <div className="flex gap-2">
              <Button variant="outline">
                Plan Status:Active,Expired
                <ChevronDown />
              </Button>

              <Button variant="outline">
                Physio’s Plan
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Service Type
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Approved
                <ChevronDown />
              </Button>
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
                        <p className="text-blue-600">{physio.plan}</p>
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
                      </td>
                      <td
                        className={
                          physio.status === "Approved"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {physio.status}
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
                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
            <Input
              placeholder="Search for Physio’s doctor name..."
              className="w-1/3"
            />
            <div className="flex gap-2">
              <Button variant="outline">
                Plan Status:Active,Expired
                <ChevronDown />
              </Button>

              <Button variant="outline">
                Physio’s Plan
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Service Type
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Approved
                <ChevronDown />
              </Button>
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
                      <td className="text-blue-600">{physio.plan}</td>
                      <td className="p-2">
                        <p className="font-medium text-green-500">
                          {physio.status}
                        </p>
                        <p className="text-sm text-gray-500">
                          {physio.details}
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
                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
            <Input
              placeholder="Search for Physio’s doctor name..."
              className="w-1/3"
            />
            <div className="flex gap-2">
              <Button variant="outline">
                Plan Status:Active,Expired
                <ChevronDown />
              </Button>

              <Button variant="outline">
                Physio’s Plan
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Service Type
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Approved
                <ChevronDown />
              </Button>
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
                      <td className="text-blue-600">{physio.plan}</td>
                      <td>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                              Approved
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60  shadow-lg bg-white p-4 rounded-md right-0 absolute">
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
                              Approv
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

                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
            <Input
              placeholder="Search for Physio’s doctor name..."
              className="w-1/3"
            />
            <div className="flex gap-2">
              <Button variant="outline">
                Physio’s Plan
                <ChevronDown />
              </Button>
              <Button variant="outline">
                Service Type
                <ChevronDown />
              </Button>
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
                <DialogContent className="w-80 p-6 ">
                  <DialogHeader>
                    <DialogTitle>Block Physio</DialogTitle>
                  </DialogHeader>
                  <Input
                    placeholder="Enter name if available"
                    className="mb-2"
                  />
                  <Input
                    placeholder="Enter number to block physio"
                    className="mb-2"
                  />
                  <Input
                    placeholder="Enter reason to block physio"
                    className="mb-4"
                  />
                  <Button className="bg-[#039342] text-white w-full">
                    Save & Block Physio
                  </Button>
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
                        <p className="text-blue-600">{physio.plan}</p>
                        <p className="text-sm text-gray-500">
                          {physio.details}
                        </p>
                      </td>
                      <td
                        className={
                          physio.status === "Approved"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {physio.status}
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
                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
        <Button variant="outline">
          <ChevronLeft />
        </Button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Button key={num} variant={num === 1 ? "default" : "outline"}>
              {num}
            </Button>
          ))}
        </div>
        <Button variant="outline">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
export default Registeredphysios;
