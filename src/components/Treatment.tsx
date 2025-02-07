import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


const Treatment = () => {
  return (

      <div className="overflow-auto mt-4 border rounded-lg p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Appointment Id</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Posted On</TableHead>
              <TableHead>Review</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[...Array(8)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  Mohan Singh<br />
                  <span className="text-sm text-gray-500">@Male</span>
                </TableCell>
                <TableCell>#PPHY125613</TableCell>
                <TableCell>4 / 5 Star</TableCell>
                <TableCell>24 Jan 2025</TableCell>
                <TableCell>I am fwejlnfln newjkfnwelfn d elwndlqedwndlwn</TableCell>
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
      </div>
 
  );
};

export default Treatment;
