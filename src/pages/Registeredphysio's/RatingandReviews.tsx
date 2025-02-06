import { Table, TableHeader } from "@/components/ui/table"; 
import { Card, CardContent } from "@/components/ui/card";
import funnel from "@/assets/FunnelSimple.png";
import {  TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button"; 
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import Export from "@/assets/Export (1).png";
  const RatingandReviews = () => {
  return (
    <div className="p-6">
       <div className="grid grid-cols-3 gap-0 ">
       <Card className="p-4 text-center rounded-none">
          <p>Total Reviews</p>
          <p className="text-xl font-semibold">15,020</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Total Rating</p>
          <p className="text-xl font-semibold">2,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Average Rating</p>
          <p className="text-xl font-semibold ">4.2 Star</p>
        </Card>
</div>
    <Card className="mt-4">
      <CardContent>
        <div className="flex justify-between items-center mb-4 mt-6">
          <h2 className="font-semibold text-xl">Rating & Reviews</h2>
          <div className="flex gap-4 items-center">
            <Button variant="outline" className="flex items-center">
            <img src={funnel} className="w-4 h-4" />
              Rating 4, 5, 3
            </Button>
            <Button variant="outline" className="flex items-center">
            <img src={funnel} className="w-4 h-4" />
              Consultation
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
                      <DropdownMenuItem>Block</DropdownMenuItem>
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
