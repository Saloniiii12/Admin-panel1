import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import wallet from "@/assets/Frame 1000006867.png";
import {  MoreVertical, FileText,ChevronDown,Search, CalendarIcon, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Export from "@/assets/Vector (8).png";
import coins from "@/assets/Coins.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
const coin = [
  { id: 1,name:"Abhishek", type: "Consultation", date: "30 Jan 2025 ", total: "₹1000", coins: "₹500", payable: "₹500 (Cash)", status: "Success" },
  { id: 2,name:"Abhi", type: "Treatment", date: "30 Jan 2025 ", total: "₹1000", coins: "₹500", payable: "₹500 (Online)", status: "Success" },
  { id: 3,name:"Dev", type: "Consultation", date: "30 Jan 2025 ", total: "₹1000", coins: "₹500", payable: "₹500 (Cash)", status: "Pending" },
  { id: 4,name:"Jay", type: "Consultation", date: "30 Jan 2025 ", total: "₹1000", coins: "₹500", payable: "₹500 (Online)", status: "Success" },
];

const Physiopluscoin: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleBillOpen = () => {
    setOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Filter By Date
                <ChevronDown/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Yesterday</DropdownMenuItem>
              <DropdownMenuItem>Custom</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">Export
          <img src={Export} alt="Export Icon" className="w-3 h-3 text-black" /></Button>
       
          <Dialog
                          open={isModalOpen}
                          onOpenChange={setIsModalOpen}
                        >
                          <DialogTrigger asChild>
                          <Button className="flex items-center bg-[#039342] text-white"> Add Coins 
          <img src={coins} alt="" className="text-black" />
          </Button>
                          </DialogTrigger>
                          <DialogContent className="rounded-lg p-6 w-[400px]">
                            <DialogHeader>
                              <DialogTitle>Add Physioplus Coins</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium">
                                  Add Coins Amount
                                </label>
                                <Input
                                  type="number"
                                  placeholder="₹ Enter Coins Amount"
                                  
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium">
                                  Coin Expiry Date
                                </label>
                                <div className="relative">
                                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                  <Input
                                    type="text"
                                    placeholder="Select Date"
                                    readOnly
                                    className="pl-10"
                                  />
                                </div>
                                <Calendar
                                  id="calendar"
                                  mode="single"
                                  className="mt-2 hidden"
                                />
                              </div>
                              <div className="flex justify-between">
                                <Button
                                  variant="outline"
                                  onClick={() => setIsModalOpen(false)}
                                  className="w-1/3"
                                >
                                  Cancel
                                </Button>
                                <Button className="w-1/2 bg-green-600 hover:bg-green-700">
                                  Add Physioplus Coins
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
        </div>
      </div>
      <Card className="p-4 bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-[#EAEBEC] font-semibold w-64 text-[#FFFFFF]">
        <div className="flex items-center gap-2">
      <img src={wallet} alt="Export Icon" className="w-5 h-5 mt-2" />
  
        <div className="text-lg">Physio Plus Coins</div>
        </div>
        <div className="text-xl ml-6">₹3,000</div>
       
      </Card>
      <Tabs defaultValue="coins-used">
        <TabsList>
          <TabsTrigger value="coins-used">Coins Used</TabsTrigger>
          <TabsTrigger value="coins-added">Coins Added</TabsTrigger>
        </TabsList>
        <TabsContent value="coins-used">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction Id</TableHead>
                <TableHead>Transaction Name</TableHead>
                <TableHead>Transaction Type</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Paid Via Coins</TableHead>
                <TableHead>Payable Amount</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coin.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell>Transaction Id</TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>{coin.type}</TableCell>
                  <TableCell>{coin.date}</TableCell>
                  <TableCell>{coin.total}</TableCell>
                  <TableCell>{coin.coins}</TableCell>
                  <TableCell>{coin.payable}</TableCell>
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
                        <Button variant="ghost" className="p-2">
                          <MoreVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-black text-white">
                        <DropdownMenuItem className="flex items-center space-x-2 bg-black text-white" onClick={handleBillOpen}>
                          <FileText className="mr-2" /> Bill Summary
                        </DropdownMenuItem>
                        <Dialog open={open} onOpenChange={setOpen} >
                          <DialogContent >
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
                                <span className="font-normal text-green-500 ">
                                  PhysioPlus Coin
                                </span>
                                <span className="text-green-600">{"-₹220"}</span>
                              </p>

                              
                              <hr />
                              <p className=" flex justify-between ">
                                <span className="font-semibold ">
                              Total Bill
                                </span>
                                <span>{"₹741"}</span>
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="coins-added">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction Id</TableHead>
                <TableHead> Amount Added</TableHead>              
                <TableHead>Coin Expired Date</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coin.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell>Transaction Id</TableCell>
                  <TableCell>{coin.coins}</TableCell>
                  <TableCell>{coin.date}</TableCell>
                  <TableCell>{coin.date}</TableCell>
                  
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="p-2">
                          <MoreVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-black text-white">
                        <DropdownMenuItem className="flex items-center space-x-2 bg-black text-white">
                          <FileText className="mr-2" /> Bill Summary
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      
      </Tabs>
        {/* Pagination */}
        <div className="flex justify-between patients-center mt-6">
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
export default Physiopluscoin;
