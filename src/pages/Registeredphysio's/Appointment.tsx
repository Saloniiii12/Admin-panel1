import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Table, TableHeader } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Info, MoreVertical,Eye,Lock, Search} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Invoice from "@/assets/Invoice.png";
import Vector from "@/assets/Vector (4).png";
import Export from "@/assets/Export (1).png";
const Appointment = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<
    string | number | null
  >(null);
  const appointments = [
    {
      name: "Mohan Singh",
      gender: "Male",
      date: "30 Jan 2024",
      time: "4:30 PM",
      necessity: "Consultation",
      Type: "Clinic",
      status: "Pending",
      booking: "18 Jan 2025",
      total: "₹950",
      payable: "₹950",
      method: "Cash",
      Status: "Pending",
      PayDate: "20 Jan 2025",
    },
    {
      name: "Sohna Singh",
      gender: "Male",
      date: "30 Jan 2024",
      time: "4:30 PM",
      necessity: "Consultation",
      Type: "Home",
      status: "Success",
    },
    {
      name: "Sohna Singh",
      gender: "Female",
      date: "30 Jan 2024",
      time: "4:30 PM",
      necessity: "Treatment @ 4 Days",
      Type: "Clinic",
      status: "Progress",
    },
    {
      name: "Sohna Singh",
      gender: "Male",
      date: "30 Jan 2024",
      time: "4:30 PM",
      necessity: "Consultation",
      Type: "Home",
      status: "Success",
    },
  ];
  const[open,setOpen]=useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
 const [openDialog, setOpenDialog] = useState(false);
 const [activeTab, setActiveTab] = useState("basic");
  const handleViewDetails = () => {
    setOpenDialog(true); // Open the dialog when "View Details" is clicked
  };
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
      <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search with patient name..."
        className="pl-10 w-80"
      />
   
        </div>
        <div className="flex space-x-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filter Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cash">Consultation</SelectItem>
              <SelectItem value="online">Treatment</SelectItem>
            </SelectContent>
          </Select>
          <Button
        variant="outline"
        className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
      >
        <img src={Export} alt="Export Icon" className="w-5 h-5" />
        Export
      </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-0 ">
        <Card className="p-4 text-center rounded-none">
          <p>Total Appointment</p>
          <p className="text-xl font-semibold">15,020</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Upcoming Consultation</p>
          <p className="text-xl font-semibold">2,900</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Created Treatment</p>
          <p className="text-xl font-semibold ">12,999</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Ongoing Treatment</p>
          <p className="text-xl font-semibold">2,000</p>
        </Card>
        <Card className="p-4 text-center rounded-none">
          <p>Completed Consultation</p>
          <p className="text-xl font-semibold">10,120</p>
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
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appt, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {appt.name} (@{appt.gender})
                  </TableCell>
                  <TableCell>{appt.date}</TableCell>
                  <TableCell>{appt.time}</TableCell>
                  <TableCell>
                    {appt.necessity}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedAppointment(appt.necessity)}
                        >
                          <Info className="w-4 h-4 " />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="p-6 rounded-lg max-w-xs bg-white shadow-lg">
                        <div className="flex justify-between items-center border-b pb-2">
                          <p className="text-lg font-semibold">
                            Appointment Details
                          </p>
                        </div>
                        {selectedAppointment && (
                          <div className="mt-4 space-y-2 text-sm text-gray-700">
                            <p className=" flex justify-between ">
                              <span className="font-semibold">
                                Appointment Date:
                              </span>{" "}
                              {appt.date}
                            </p>

                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Appointment Time:
                              </span>{" "}
                              <span>{appt.time}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Service Type:
                              </span>{" "}
                              <span>{appt.Type}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Booking Date:
                              </span>{" "}
                              <span>{appt.booking}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Total Amount:
                              </span>{" "}
                              <span>{appt.total}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Payable Amount:
                              </span>{" "}
                              <span>{appt.payable}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Payment Method:
                              </span>{" "}
                              <span>{appt.method}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Payment Status:
                              </span>{" "}
                              <span>{appt.status}</span>
                            </p>
                            <p className=" flex justify-between ">
                              <span className="font-semibold">
                                Payment Date:
                              </span>{" "}
                              <span>{appt.PayDate}</span>
                            </p>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>

                  <TableCell>{appt.Type}</TableCell>
                
                  <TableCell className="flex items-center ">
  <span
    className={`px-2 py-1 rounded-full text-sm font-medium ${
      index === 2 ? "bg-[#FDE5EA] text-[#F93C65]" : "bg-green-100 text-green-800"
    }`}
  >
    {appt.status}
  </span>
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuItem onClick={handleViewDetails}>
          <Eye/>
          View Appointment Details
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem >
        <img src={Vector}  className="w-4 h-4" />
          View Patient Profile 
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem onClick={handleOpen}>
        <img src={Invoice}  className="w-4 h-4" />
          Bill Summary(Physio End)
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem >
          <Lock/>
          Block Patient
        </DropdownMenuItem>
      </DropdownMenuContent>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          {/* The trigger is managed by the "View Details" action */}
          <Button style={{ display: 'none' }} />
        </DialogTrigger>
       <DialogContent className="max-w-xl mx-auto p-4 bg-white shadow-none rounded-lg">
            
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("basic")}
          className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
            activeTab === "basic" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
        >
          Basic Details
        </button>
        <button
          onClick={() => setActiveTab("appointment")}
          className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
            activeTab === "appointment" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
        >
          Appointment Details
        </button>
        <button
          onClick={() => setActiveTab("treatment")}
          className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
            activeTab === "treatment" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
        >
         Treatment Details
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
            activeTab === "payment" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
        >
          Payment Details
        </button>
      </div>
      <div className="p-2">
        {activeTab === "basic" && (
          <div >
            <label className="block text-gray-700">Patient Name</label>
            <input type="text" value="Taimur Khan" readOnly className="w-full p-2 border rounded" />

            <label className="block mt-4 text-gray-700">Patient Age</label>
            <input type="text" value="12" readOnly className="w-full p-2 border rounded" />

            <label className="block mt-4 text-gray-700">Gender</label>
            <input type="text" value="Male" readOnly className="w-full p-2 border rounded" />
          </div>
        )}
        {activeTab === "appointment" &&  (  <div className="grid grid-cols-2 gap-4 mt-0 ">
          <div>
           
            <label className="text-gray-600">Appointment Date</label>
            <input
              type="text"
              value="30 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Appointment Time</label>
            <input
              type="text"
              value="4:00 PM"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Payment Method</label>
            <input
              type="text"
              value="Cash"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Booking Date</label>
            <input
              type="text"
              value="20 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Consultation Charges</label>
            <input
              type="text"
              value="₹ 950"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Payment Date</label>
            <input
              type="text"
              value="20 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Rescheduled Appointment Date</label>
            <input
              type="text"
              value="30 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Rescheduled Appointment Time</label>
            <input
              type="text"
              value="4:00 PM"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-600">Patient Problem</label>
            <textarea
              className="w-full p-2 mt-1 border rounded bg-gray-100"
             
              disabled
            >
            </textarea>
          </div>
          <div className="col-span-2">
            <label className="text-gray-600">Physio Prescription</label>
            <textarea
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              
              disabled
            >
            </textarea>
          </div>
        </div>
      )}
        {activeTab === "treatment" &&  (  <div className="grid grid-cols-2 gap-4 mt-0 ">
          <div>
           
            <label className="text-gray-600">Treatment Date</label>
            <input
              type="text"
              value="30 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Appointment Time</label>
            <input
              type="text"
              value="4:00 PM"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Payment Method</label>
            <input
              type="text"
              value="Cash"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Booking Date</label>
            <input
              type="text"
              value="20 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Consultation Charges</label>
            <input
              type="text"
              value="₹ 950"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Payment Date</label>
            <input
              type="text"
              value="20 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Rescheduled Appointment Date</label>
            <input
              type="text"
              value="30 Jan 2025"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600">Rescheduled Appointment Time</label>
            <input
              type="text"
              value="4:00 PM"
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              disabled
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-600">Patient Problem</label>
            <textarea
              className="w-full p-2 mt-1 border rounded bg-gray-100"
             
              disabled
            >
            </textarea>
          </div>
          <div className="col-span-2">
            <label className="text-gray-600">Physio Prescription</label>
            <textarea
              className="w-full p-2 mt-1 border rounded bg-gray-100"
              
              disabled
            >
            </textarea>
          </div>
        </div>
      )}
        {activeTab === "payment" && (<div className="mt-0 space-y-2 text-sm text-gray-700">
                            <p className=" flex justify-between ">
                              <span className="font-semibold">
                                Consultation Charges:
                              </span>{" "}
                              {"₹960"}
                            </p>

                            <p className=" flex justify-between text-green-500">
                              <span className="font-semibold ">
                                Physioplus Coin:
                              </span>
                              <span>{"-₹0"}</span>
                            </p>
                            <p className=" flex justify-between text-green-500">
                              <span className="font-semibold ">
                                Voucher Code:
                              </span>{" "}
                              <span>{"-₹0"}</span>
                              </p>
                              <hr />
                              <p className=" flex justify-between">
                              <span className="font-semibold ">
                                Total Bill
                              </span>{" "}
                              <span>{"₹960"}</span>
                            </p></div>)}
      </div>
    </DialogContent>
      </Dialog>
      <Dialog open={open} onOpenChange={setOpen} >
  <DialogContent >
    <div className="mt-0 space-y-2 text-sm text-gray-700">
      <h3 className="mt-0 font-bold">Bill Summary</h3>
                            <p className=" flex justify-between ">
                              <span className="font-semibold">
                                Consultation Charges
                              </span>{" "}
                              {"₹960"}
                            </p>

                            <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Plateform Fees
                              </span>
                              <span>{"-₹22"}</span>
                            </p>

                            <p className=" flex justify-between ">
                              <span className="font-normal">
                                GST on plateform Fees
                              </span>
                              <span>{"-₹3.9"}</span>
                            </p>
                            <hr />
                                <p className=" flex justify-between ">
                              <span className="font-semibold ">
                                Physio Earning
                              </span>
                              <span>{"₹74.5"}</span>
                              </p>
    </div>
  </DialogContent>
</Dialog>

    </DropdownMenu>
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Appointment;
