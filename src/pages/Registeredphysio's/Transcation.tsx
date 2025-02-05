import {  Table,TableHeader, TableHead, TableRow,TableCell,TableBody } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
const Transcation = () => {
  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-6">
    <Input placeholder="Search with patient name..." className="w-96" />
      <div className="flex gap-4 items-center">
        <Button variant="outline" className="flex items-center">
          <Filter className="mr-2 h-4 w-4" />
          Filter by date
        </Button>
        <Button variant="outline" className="flex items-center">
          <Filter className="mr-2 h-4 w-4" />
          Filter Any
        </Button>
        <Button variant="outline" className="flex items-center text-white bg-[#039342] hover:bg-green-600 hover:text-white">
          
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
              <TableHead>Transcation Id</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Transcation Date</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Type</TableHead>
                <TableHead>Payment Status</TableHead>
                
              </TableRow>
            </TableHeader>
          
            <TableBody>
              {[...Array(7)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Transcation Id</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">Himanshu Saini</span>
                      
                    </div>
                  </TableCell>
                  <TableCell>24 Jan 2025 </TableCell>
                  <TableCell>Home Care</TableCell>
                  <TableCell>₹1000</TableCell>
                  <TableCell>Consultation</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${index === 2 ? "bg-[#FDE5EA] text-[#F93C65]" : "bg-green-100 text-green-800"}`}
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
  )
}

export default Transcation
