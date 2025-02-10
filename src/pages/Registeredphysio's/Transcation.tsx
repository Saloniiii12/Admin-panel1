import { useState } from "react";
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
import { Info, Eye, ChevronDown, Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Invoice from "@/assets/Invoice.png";
import image from "@/assets/Export (1).png";
import funnel from "@/assets/FunnelSimple.png";
const Transcation = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    consultation: false,
    treatment: false,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleOption = (option: "consultation" | "treatment") => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

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
                <img src={funnel} alt="" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Yesterday</DropdownMenuItem>
              <DropdownMenuItem>Custom</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Appointment
                <ChevronDown className="mr-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => toggleOption("consultation")}>
                <Checkbox
                  checked={selectedOptions.consultation}
                  className="mr-2"
                />
                Consultation
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleOption("treatment")}>
                <Checkbox
                  checked={selectedOptions.treatment}
                  className="mr-2"
                />
                Treatment
              </DropdownMenuItem>
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
                    <TableCell>24 Jan 2025</TableCell>
                    <TableCell>Home Care</TableCell>
                    <TableCell>₹1000</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        Consultation
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
                          <Button variant="ghost">...</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-black text-white">
                          <DropdownMenuItem>
                            <Eye />
                            View Details
                          </DropdownMenuItem>
                          <hr />
                          <DropdownMenuItem onClick={handleOpen}>
                            <img src={Invoice} className="w-4 h-4" />
                            View Physio Invoice
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
