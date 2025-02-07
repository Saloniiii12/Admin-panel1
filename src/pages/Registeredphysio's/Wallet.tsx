
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import wallet from "@/assets/Frame 1000006867.png";
import Funnel from "@/assets/FunnelSimple.png";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import image from "@/assets/Export (1).png";
import coin from "@/assets/Vector (6).png";
import ruppes from "@/assets/CurrencyInr.png";
import { Info, Search } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
// /import { useState } from "react";

const data = [
  { date: "10 Jan 2025", balance: "₹ 5000", amount: "₹ 2000", status: "Pending" },
  { date: "10 Jan 2025", balance: "₹ 6000", amount: "₹ 1000", status: "Pending" }
];

const Wallet = () => {
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
       
        <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search with patient name..."
        className="pl-10 w-80"
      />
   
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter by date</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Oldest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter Any</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Approved</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
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

      <div className="grid grid-cols-6 gap-0 mb-4 ">
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>Total Earning ₹100</span>
</div>
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>Wallet Balance  ₹74.1<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon" className="ml-0 text-black">
      <Info className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48 bg-black text-white">
        <DropdownMenuItem >
        <img src={coin}  className="w-4 h-4" />
          ₹1000 Coins Included
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem >
        <img src={ruppes}  className="w-4 h-4" />
          ₹500 Earning in Cash
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem >
        <img src={ruppes}  className="w-4 h-4" />
          ₹500 Earning in Cash
        </DropdownMenuItem>
      </DropdownMenuContent>
</DropdownMenu>
</span>
</div>
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>PhysioPlus Earning ₹10</span>
</div>
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>Coins Earned ₹50</span>
</div>
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>GST ₹18</span>
</div>
      <div className="p-4 border flex items-center gap-2 rounded-none">
  <img src={wallet} alt="Export Icon" className="w-6 h-6" />
  <span>Physio Earning ₹5</span>
</div>
       
        
      </div>

      <Tabs defaultValue="withdrawal-request">
      <div className="flex justify-between items-center mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="withdrawal-request">Withdrawal Request</TabsTrigger>
          <TabsTrigger value="withdrawal-approved">Withdrawal Approved</TabsTrigger>
        </TabsList>
        <div className="flex gap-4 items-center">
        <Button
        variant="outline"
        className="flex items-center"
      >
       
        Payment Type Filter
        <img src={Funnel} className="w-4 h-4" />
      </Button>     
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button
        variant="outline"
        className="flex items-center"
      >
    
        Date Filter
        <img src={Funnel} className="w-4 h-4" />
      </Button>  
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem >
                Today
              </DropdownMenuItem>
              <DropdownMenuItem >
                Yesterday
              </DropdownMenuItem>
              <DropdownMenuItem >
                Custom
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
        <TabsContent value="withdrawal-request">
          <div className="border-black">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Wallet Balance</TableHead>
                  <TableHead>Requested Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Update Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.balance}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${index === 1 ? "bg-[#FDE5EA] text-[#F93C65]" : "bg-green-100 text-green-800"}`}
                      >
                        {index === 1 ? "Pending" : "Success"}
                      </span>
                    </TableCell>
                    <TableCell>
                  
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                              Approve
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60  shadow-lg bg-white p-4 rounded-md">
                            <h3 className="font-bold">
                              Wants to approved Dr. Abhishek Mehra?
                            </h3>
                            <p>
                              Are you sure you want to approve this
                              physiotherapist?Approving them will grant them
                              access to the plateform,allowing them to provide
                              services and manage thier profile
                            </p>
                            <Button className=" flex-row bg-green-700">
                              Cancel
                            </Button>
                            <Button className="ml-3 mt-2 bg-green-700">
                              Approve
                            </Button>
                          </PopoverContent>
                        </Popover>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="withdrawal-approved">
          <div className="border-black">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Wallet Balance</TableHead>
                  <TableHead>Requested Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Update Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.balance}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
        
                      <span
                        className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                 Success
                      </span>
                    </TableCell>
                    <TableCell>
                  
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">
                              Approve
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60  shadow-lg bg-white p-4 rounded-md">
                            <h3 className="font-bold">
                              Wants to approved Dr. Abhishek Mehra?
                            </h3>
                            <p>
                              Are you sure you want to approve this
                              physiotherapist?Approving them will grant them
                              access to the plateform,allowing them to provide
                              services and manage thier profile
                            </p>
                            <Button className=" flex-row bg-green-700">
                              Cancel
                            </Button>
                            <Button className="ml-3 mt-2 bg-green-700">
                              Approve
                            </Button>
                          </PopoverContent>
                        </Popover>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

     </div>
  );
};

export default Wallet;

