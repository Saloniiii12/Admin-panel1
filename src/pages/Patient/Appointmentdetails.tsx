import {useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Eye, ChevronDown, Search, MoreVertical,Lock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Invoice from "@/assets/Invoice.png";
import image from "@/assets/Export (1).png";

const Transcation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleView = () => {
    setOpenDialog(true);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
 
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Search with patient name..."
            className="pl-10 w-80"
          />
        </div>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Filter By Date
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Yesterday</DropdownMenuItem>
              <DropdownMenuItem>Custom</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            className="bg-[#039342] text-white hover:bg-[#039342] hover:text-white"
          >
            <img src={image} alt="Export Icon" className="w-5 h-5" />
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
                  <TableHead>Patient Name</TableHead>
                  <TableHead> Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Necessity</TableHead>

                  <TableHead>Appointment Status</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {[...Array(7)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">Himanshu Saini</span>
                      </div>
                    </TableCell>
                    <TableCell>24 Jan 2025</TableCell>
                    <TableCell>4 P.M.</TableCell>
                    <TableCell>
                      <span>{index === 2 ? "Home" : "Clinic"}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span>{index === 2 ? "Consultation" : "Treatment"}</span>
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-2 text-gray-500"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <div className="mt-0 space-y-2 text-sm text-gray-700">
                              <h3 className="mt-0 font-bold">
                                Transcation Summary
                              </h3>
                              <p className=" flex justify-between ">
                                <span className="font-semibold">
                                  Consultation Charges
                                </span>{" "}
                                {"₹2,500"}
                              </p>
                              <hr />
                              <p className=" flex justify-between ">
                                <span className="font-semibold ">
                                  Total Bill
                                </span>
                                <span>{"₹1,000"}</span>
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${
                          index === 2
                            ? "bg-[#FDE5EA] text-[#F93C65]"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {index === 2 ? "Pending" : "Success"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost">
                            <MoreVertical />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-black text-white">
                          <DropdownMenuItem onClick={handleView}>
                            <Eye />
                            View Consultation Details
                          </DropdownMenuItem>
                          <hr />
                          <DropdownMenuItem onClick={handleOpen} >
                            <img src={Invoice} className="w-4 h-4" />
                            Bill Summary
                          </DropdownMenuItem>
                          <hr/>
                          <DropdownMenuItem>
                            <Lock />
                          Block Patient
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                        <Dialog open={open} onOpenChange={setOpen}>
                          <DialogContent>
                            <div className="mt-0 space-y-2 text-sm text-gray-700">
                              <h3 className="mt-0 font-bold">
                                Physio Invoice/Bill
                              </h3>
                              <p className=" flex justify-between ">
                                <span className="font-normal">
                                  Consultation Charges
                                </span>{" "}
                                {"₹1000"}
                              </p>

                              <p className=" flex justify-between ">
                                <span className="font-normal ">
                                  Plateform Fees
                                </span>
                                <span>{"-₹220"}</span>
                              </p>

                              <p className=" flex justify-between ">
                                <span className="font-normal">
                                  GST on plateform Fees
                                </span>
                                <span>{"-₹39"}</span>
                              </p>
                              <hr />
                              <p className=" flex justify-between ">
                                <span className="font-semibold ">
                                  Physio Payable
                                </span>
                                <span>{"₹741"}</span>
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                          <DialogTrigger asChild>
                            {/* The trigger is managed by the "View Details" action */}
                            <Button style={{ display: "none" }} />
                          </DialogTrigger>
                          <DialogContent className="max-w-xl mx-auto p-4 bg-white shadow-none rounded-lg">
                            <div className="flex border-b">
                              <button
                                onClick={() => setActiveTab("basic")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "basic"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Basic Details
                              </button>
                              <button
                                onClick={() => setActiveTab("appointment")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "appointment"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Appointment Details
                              </button>
                              <button
                                onClick={() => setActiveTab("payment")}
                                className={`py-2 px-4 text-sm font-semibold focus:outline-none ${
                                  activeTab === "treatment"
                                    ? "border-b-2 border-green-500 text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                Payment Details
                              </button>
                            </div>
                            <div className="p-2">
                              {activeTab === "basic" && (
                                <div>
                                  <label className="block text-gray-700">
                                    Patient Name
                                  </label>
                                  <input
                                    type="text"
                                    value="Taimur Khan"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />

                                  <label className="block mt-4 text-gray-700">
                                    Patient Age
                                  </label>
                                  <input
                                    type="text"
                                    value="12"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />

                                  <label className="block mt-4 text-gray-700">
                                    Gender
                                  </label>
                                  <input
                                    type="text"
                                    value="Male"
                                    readOnly
                                    className="w-full p-2 border rounded"
                                  />
                                </div>
                              )}
                              {activeTab === "appointment" && (
                                <div className="grid grid-cols-2 gap-4 mt-0 ">
                                  <div>
                                    <label className="text-gray-600">
                                      Appointment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="30 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Appointment Time
                                    </label>
                                    <input
                                      type="text"
                                      value="4:00 PM"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Payment Method
                                    </label>
                                    <input
                                      type="text"
                                      value="Cash"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Booking Date
                                    </label>
                                    <input
                                      type="text"
                                      value="20 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Consultation Charges
                                    </label>
                                    <input
                                      type="text"
                                      value="₹ 950"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Payment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="20 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Rescheduled Appointment Date
                                    </label>
                                    <input
                                      type="text"
                                      value="30 Jan 2025"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label className="text-gray-600">
                                      Rescheduled Appointment Time
                                    </label>
                                    <input
                                      type="text"
                                      value="4:00 PM"
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    />
                                  </div>
                                  <div className="col-span-2">
                                    <label className="text-gray-600">
                                      Patient Problem
                                    </label>
                                    <textarea
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    ></textarea>
                                  </div>
                                  <div className="col-span-2">
                                    <label className="text-gray-600">
                                      Physio Prescription
                                    </label>
                                    <textarea
                                      className="w-full p-2 mt-1 border rounded bg-gray-100"
                                      disabled
                                    ></textarea>
                                  </div>
                                </div>
                              )}

                              {activeTab === "payment" && (
                                <div className="mt-0 space-y-2 text-sm text-gray-700">
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
                                  </p>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
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
};

export default Transcation;