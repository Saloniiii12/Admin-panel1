//import { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button"; 
  import {  TableBody, TableCell, TableHead, TableRow,Table,TableHeader } from "@/components/ui/table";

const HelpandSupport = () => {
      const data = [
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Opened" },
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Closed" },
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Closed" },
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Closed" },
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Closed" },
        { date: "24 Jan 2025", email: "boyabhishek@gmail.com", message: "I had an exceptional experience with Dr. [Physio's Name]!", status: "Closed" }
      ];
      
        
  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-4" >
      <h2 className="text-xl font-semibold">Help & Supports</h2>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            
            <Button variant="outline">Choose,One Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Reopened</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All</DropdownMenuItem>
            <DropdownMenuItem>Reopened</DropdownMenuItem>
            <DropdownMenuItem>Closed</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-[#039342] text-white" variant="outline">Export</Button>
      </div>
      
    </div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue Created Date</TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Message Sent by Physio</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.message} <span className="text-blue-600 cursor-pointer">Read More</span></TableCell>
            <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${index === 2 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                    >
                      {index === 2 ? "Pending" : "Success"}
                    </span>
                  </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

   
  </div>
  )
}

export default HelpandSupport
