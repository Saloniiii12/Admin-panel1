import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {  TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Table, TableHeader } from "@/components/ui/table"; 
import { Button } from "@/components/ui/button";
const Appointment = () => {
    const appointments = [
        { name: "Mohan Singh", gender: "Male", date: "30 Jan 2024", time: "4:30 PM", necessity: "Consultation", amount: "₹500", Type: "Clinic", status: "Pending" },
        { name: "Sohna Singh", gender: "Male", date: "30 Jan 2024", time: "4:30 PM", necessity: "Consultation", amount: "₹500", Type: "Home", status: "Success" },
        { name: "Sohna Singh", gender: "Female", date: "30 Jan 2024", time: "4:30 PM", necessity: "Treatment @ 4 Days", amount: "₹500", Type: "Clinic", status: "Progress" },
        { name: "Sohna Singh", gender: "Male", date: "30 Jan 2024", time: "4:30 PM", necessity: "Consultation", amount: "₹500", Type: "Home", status: "Success" },
      ];
  return (
    
          <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Input  placeholder="Search with patient name..." className="w-1/3" />
        <div className="flex space-x-4">
          <Select>
            <SelectTrigger className="w-32"><SelectValue placeholder="Filter by date" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32"><SelectValue placeholder="Filter Any" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="online">Online</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#039342]">Export</Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <Card className="p-4 text-center">
          <p>Total Appointment</p>
          <p className="text-xl font-bold">15,020</p>
        </Card>
        <Card className="p-4 text-center">
          <p>Upcoming Consultation</p>
          <p className="text-xl font-bold">2,900</p>
        </Card>
        <Card className="p-4 text-center">
          <p>Created Treatment</p>
          <p className="text-xl font-bold">12,999</p>
        </Card>
        <Card className="p-4 text-center">
          <p>Ongoing Treatment</p>
          <p className="text-xl font-bold">2,000</p>
        </Card>
        <Card className="p-4 text-center">
          <p>Completed Consultation</p>
          <p className="text-xl font-bold">10,120</p>
        </Card>
      </div>
      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Necessity</TableHead>
                <TableHead>Amount</TableHead>
               
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appt, index) => (
                <TableRow key={index}>
                  <TableCell>{appt.name} (@{appt.gender})</TableCell>
                  <TableCell>{appt.date}</TableCell>
                  <TableCell>{appt.time}</TableCell>
                  <TableCell>{appt.necessity}</TableCell>
                  <TableCell>{appt.amount}</TableCell>
                  
                  <TableCell>{appt.Type}</TableCell>
                  <TableCell>
                  <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${index === 2 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                      >
                        {index === 2 ? "Pending" : "Success"}
                      </span>
                    </TableCell>
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

export default Appointment
