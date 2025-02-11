import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog,DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Export from "@/assets/Export (1).png";
import { MoreVertical } from "lucide-react";
import funnel from "@/assets/FunnelSimple.png";
const issues = [
  {
    date: "24 Jan 2025",
    email: "boyabhishek@gmail.com",
    message: "I had an exceptional experience with Dr. [Physio's Name]! I visited for [specific condition, e.g., chronic back pain]...",
    status: "Opened",
  },
  ...Array(5).fill({
    date: "24 Jan 2025",
    email: "boyabhishek@gmail.com",
    message: "I had an exceptional experience with Dr. [Physio's Name]! I visited for [specific condition, e.g., chronic back pain]...",
    status: "Closed",
  })
];

export default function Help() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Help & Supports</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            Reopened   <img src={funnel} alt="" />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            Closed One, Filter   <img src={funnel} alt="" />
          </Button>
          <Button
        variant="outline"
        className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
      >
        <img src={Export} alt="Export Icon" className="w-5 h-5" />
        Export
      </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Issue Created Date</TableHead>
            <TableHead>Email Address'</TableHead>
            <TableHead>Message Sent by Physio</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue, index) => (
            <TableRow key={index}>
              <TableCell>{issue.date}</TableCell>
              <TableCell>{issue.email}</TableCell>
              <TableCell>
                {issue.message} <span className="text-green-600 cursor-pointer">Read More</span>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 text-sm rounded-lg ${issue.status === "Opened" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                  {issue.status}
                </span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" onClick={() => setIsModalOpen(true)}><MoreVertical size={16} /></Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Help & Supports</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <p>Physio Message or Patient Message</p>
            <textarea className="w-full border rounded-md p-2 mb-2" placeholder="Enter message" />
            <p>Received Email</p>
            <input className="w-full border rounded-md p-2 mb-2" placeholder="Pre-filled physio email" />
            <p>Sender Email</p>
            <input className="w-full border rounded-md p-2 mb-2" value="admin@gmail.com" readOnly />
            <p>Subject if any</p>
            <input className="w-full border rounded-md p-2 mb-2" placeholder="Subject if any" />
            <p>Message</p>
            <textarea className="w-full border rounded-md p-2 mb-4" placeholder="Enter reply message" />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button className="bg-green-600 text-white">Send & Close Ticket</Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
       {/* Pagination Section */}
       <div className="flex justify-between items-center mt-4">
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
}
