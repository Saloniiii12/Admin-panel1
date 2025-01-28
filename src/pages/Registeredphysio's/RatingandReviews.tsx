import { Table, TableHeader } from "@/components/ui/table"; 
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";
import {  TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button"; 
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  const RatingandReviews = () => {
  return (
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
  )
}

export default RatingandReviews
