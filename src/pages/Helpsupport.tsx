import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, MoreVertical, PlusCircle, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import image from "@/assets/Export (1).png";
import { Dialog, DialogContent, DialogDescription,  DialogHeader, DialogTitle } from "@/components/ui/dialog";

const queries = [
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Opened" },
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Closed" },
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Closed" },
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Opened" },
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Closed" },
  { date: "24 Jan 2025", email: "boyabhishek@gmail.com", status: "Closed" },
];

const Helpsupport: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-end patients-center mb-6">
        <div className="flex patients-center gap-5 mr-auto flex-row">
          <h1 className="font-semibold text-2xl">
           Help And Support
          </h1>
        </div>
        <div className="flex patients-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Calendar or date filter
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
                Any Data or filter
                <PlusCircle  />
              </Button>
          <Button
            variant="outline"
            className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
          >
              <img src={image} alt="Export Icon" className="w-5 h-5" />
            Export
          </Button>
        </div>
      </div>
      <Tabs defaultValue="patient-query" className="mb-4">
        <TabsList className="flex p-2 mt-5 bg-gray-50 justify-start ">
        <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="patient-query"
          >
            Patient Query
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="physio-query"
          >
            Physio Query
          </TabsTrigger>
          <TabsTrigger
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50"
            value="website-query"
          >
            Website Query
          </TabsTrigger>
        </TabsList>
   
      <TabsContent value="patient-query">
      <div className="flex justify-between items-center mb-4">
      <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Physio's doctor name..."
                className="pl-10"
              />
            </div>
        <div className="flex gap-2">
          <Button variant="outline">Reopened<ChevronDown/></Button>
          <Button variant="outline">Any Filter<ChevronDown/></Button>
        </div>
      </div>
<Card><CardContent> <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Issue Created Date</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Message Sent by Patient</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((query, index) => (
            <TableRow key={index}>
              <TableCell>{query.date}</TableCell>
              <TableCell>{query.email}</TableCell>
              <TableCell>
                I had an exceptional experience with Dr. [Physio's Name]! I visited for [specific condition] ... <a href="#" className="text-green-500">Read More</a>
              </TableCell>
              <td className="py-4">
                        <span
                          className={`inline-flex patients-center px-3 py-1 rounded-full text-sm font-medium ${
                            query.status.toLowerCase() === "opened"
                              ? "bg-[#ECFDF3] text-[#039342]"
                              : query.status.toLowerCase() === "closed"
                              ?"bg-[#FDE5EA] text-[#F93C65]"
                              :"bg-[#FEF8E4] text-[#E4C569]"
                              
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                            query.status.toLowerCase() === "opened"
                                ? "bg-[#039342]"
                                : query.status.toLowerCase() === "closed"
                                ? "bg-[#F93C65]"
                                : "bg-[#E4C569]"
                            }`}
                          ></span>
                          {query.status}
                        </span>
                      </td>
                      <td> <Button variant="ghost" onClick={() => setIsModalOpen(true)}><MoreVertical size={16} /></Button></td>
            </TableRow>
          ))}
        </TableBody>
      </Table></CardContent></Card>
     

      </TabsContent>
      <TabsContent value="physio-query">
      <div className="flex justify-between items-center mb-4">
      <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Physio's doctor name..."
                className="pl-10"
              />
            </div>
        <div className="flex gap-2">
          <Button variant="outline">Reopened</Button>
          <Button variant="outline">Any Filter</Button>
        </div>
      </div>
<Card><CardContent> <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Issue Created Date</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Message Sent by Physio</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((query, index) => (
            <TableRow key={index}>
              <TableCell>{query.date}</TableCell>
              <TableCell>{query.email}</TableCell>
              <TableCell>
                I had an exceptional experience with Dr. [Physio's Name]! I visited for [specific condition] ... <a href="#" className="text-green-500">Read More</a>
              </TableCell>
              <td className="py-4">
                        <span
                          className={`inline-flex patients-center px-3 py-1 rounded-full text-sm font-medium ${
                            query.status.toLowerCase() === "opened"
                              ? "bg-[#ECFDF3] text-[#039342]"
                              : query.status.toLowerCase() === "closed"
                              ?"bg-[#FDE5EA] text-[#F93C65]"
                              :"bg-[#FEF8E4] text-[#E4C569]"
                              
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                            query.status.toLowerCase() === "opened"
                                ? "bg-[#039342]"
                                : query.status.toLowerCase() === "closed"
                                ? "bg-[#F93C65]"
                                : "bg-[#E4C569]"
                            }`}
                          ></span>
                          {query.status}
                        </span>
                      </td>
                      <td> <MoreVertical size={16} /></td>
            </TableRow>
          ))}
        </TableBody>
      </Table></CardContent></Card>
     

      </TabsContent>
      <TabsContent value="website-query">
      <div className="flex justify-between items-center mb-4">
      <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search for Physio's doctor name..."
                className="pl-10"
              />
            </div>
        <div className="flex gap-2">
          <Button variant="outline">Reopened</Button>
          <Button variant="outline">Any Filter</Button>
        </div>
      </div>
<Card><CardContent> <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Issue Created Date</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Message Sent through Website</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((query, index) => (
            <TableRow key={index}>
              <TableCell>{query.date}</TableCell>
              <TableCell>{query.email}</TableCell>
              <TableCell>
                I had an exceptional experience with Dr. [Physio's Name]! I visited for [specific condition] ... <a href="#" className="text-green-500">Read More</a>
              </TableCell>
              <td className="py-4">
                        <span
                          className={`inline-flex patients-center px-3 py-1 rounded-full text-sm font-medium ${
                            query.status.toLowerCase() === "opened"
                              ? "bg-[#ECFDF3] text-[#039342]"
                              : query.status.toLowerCase() === "closed"
                              ?"bg-[#FDE5EA] text-[#F93C65]"
                              :"bg-[#FEF8E4] text-[#E4C569]"
                              
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                            query.status.toLowerCase() === "opened"
                                ? "bg-[#039342]"
                                : query.status.toLowerCase() === "closed"
                                ? "bg-[#F93C65]"
                                : "bg-[#E4C569]"
                            }`}
                          ></span>
                          {query.status}
                        </span>
                      </td>
                      <td>  
                  <MoreVertical className="w-5 h-5" />
                </td>
                     
            </TableRow>
          ))}
        </TableBody>
      </Table></CardContent></Card>
     

      </TabsContent>
      </Tabs>
     
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Help & Supports</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <p className="text-black">Physio Message</p>
            <textarea className="w-full border rounded-md p-2 mb-2" placeholder="Enter message" />
            <p className="text-black">Received Email</p>
            <input className="w-full border rounded-md p-2 mb-2" placeholder="Pre-filled physio email" />
            <p className="text-black">Sender Email</p>
            <input className="w-full border rounded-md p-2 mb-2" value="admin@gmail.com" readOnly />
            <p className="text-black">Subject if any</p>
            <input className="w-full border rounded-md p-2 mb-2" placeholder="Subject if any" />
            <p className="text-black">Message</p>
            <textarea className="w-full border rounded-md p-2 mb-4" placeholder="Enter reply message" />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button className="bg-green-600 text-white">Send & Close Ticket</Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
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

export default Helpsupport;
