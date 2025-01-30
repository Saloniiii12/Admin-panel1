import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, ChevronDown, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const physios = [
  { name: "Olivia Rhye", email: "olivia@untitledui.com", type: "Clinic & Home", phone: "9876543210", plan: "Free Plan", status: "Not Approved" },
  { name: "Demi Wilkinson", email: "demi@untitledui.com", type: "Home Care", phone: "9876543210", plan: "Premium Plan", status: "Approved" },
  { name: "Candice Wu", email: "candice@untitledui.com", type: "Clinic & Home", phone: "9876543210", plan: "Free Plan", status: "Not Approved" },
  { name: "Drew Cano", email: "drew@untitledui.com", type: "Clinic & Home", phone: "9876543210", plan: "Premium Plan", status: "Approved" },
  { name: "Orlando Diggs", email: "orlando@untitledui.com", type: "Clinic & Home", phone: "9876543210", plan: "Free Plan", status: "Not Approved" },
  { name: "Andi Lane", email: "andi@untitledui.com", type: "Clinic & Home", phone: "9876543210", plan: "Premium Plan", status: "Approved" },
];

export default function PhysioDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    
<div className="flex justify-end items-center mb-6">
  <div className="flex items-center gap-4">
    <Button variant="outline">All Time <ChevronDown /></Button>
    <Button className="bg-white text-black">Add Physio's +</Button>
    <Button variant="outline" className="bg-[#039342] text-white">Export</Button>
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
            <Input placeholder="Search for Physio’s doctor name..." className="w-1/3" />
            <div className="flex gap-2">
              <Button variant="outline">Plan Status <ChevronDown /></Button>
              <Button variant="outline">Date Filter</Button>
              <Button variant="outline">Physio’s Plan</Button>
              <Button variant="outline">Service Type</Button>
              <Button variant="outline">Approved</Button>
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
                      <td className="text-blue-600">{physio.plan}</td>
                      <td className={physio.status === "Approved" ? "text-green-500" : "text-red-500"}>{physio.status}</td>
                      <td><DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical className="cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline"><ChevronLeft /></Button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button key={num} variant={num === 1 ? "default" : "outline"}>{num}</Button>
              ))}
            </div>
            <Button variant="outline"><ChevronRight /></Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
