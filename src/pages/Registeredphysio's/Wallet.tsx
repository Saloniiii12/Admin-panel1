
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import wallet from "@/assets/Frame 1000006867.png";
import Funnel from "@/assets/FunnelSimple.png";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import image from "@/assets/Export (1).png";

const data = [
  { date: "10 Jan 2025", balance: "₹ 5000", amount: "₹ 2000", status: "Pending" },
  { date: "10 Jan 2025", balance: "₹ 6000", amount: "₹ 1000", status: "Pending" }
];

const Wallet = () => {
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search with patient name..." className="w-96" />
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
  <span>Wallet Balance ₹74.1</span>
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
                      <Button className="bg-[#DFF1E7] hover:bg-[#DFF1E7] text-[#039342]">Approved Now</Button>
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

