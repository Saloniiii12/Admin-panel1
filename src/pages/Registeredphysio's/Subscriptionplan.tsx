import { useState, useRef } from "react";
import { Table, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, MoreVertical } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface SubscriptionPlan {
  name: string;
  total: string;
  coupon: string;
  couponcode:string;
  couponamount: string;
  paid: string;
  date: string;
  type: string;
  approvedate:string;
}

const SubscriptionHistory: SubscriptionPlan[] = [
  {
    name: "Premium Plan",
    total: "2,199",
    coupon: "No",
    couponcode:"",
    couponamount: "0",
    paid: "2,199",
    date: "20 Dec 2024",
    type: "Online",
    approvedate:"22 Dec 2024",
  },
  {
    name: "Premium Plan",
    total: "2,199",
    coupon: "Yes",
    couponcode:"PHYS200",
    couponamount: "2,199",
    paid: "0",
    date: "20 Dec 2024",
    type: "Online",
    approvedate:"22 Dec 2024",
  },
  {
    name: "Free Plan",
    total: "0",
    coupon: "No",
    couponcode:"",
    couponamount: "0",
    paid: "0",
    date: "20 Dec 2024",
    type: "Online",
    approvedate:"22 Dec 2024",
  },
];

const Subscriptionplan = () => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState<{ bottom: null; left: number } | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const openModal = (plan: SubscriptionPlan, event?: unknown) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ bottom:null , left: rect.left - 50 });
    }
  };

  return (
    <div className="p-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <Card className="bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-green-600">
        <CardContent className="flex flex-col items-start">
        <div className="flex flex-row ">
          <h3 className="text-lg font-semibold mt-8 text-white">Preminum Plan</h3>
          <Button className="mt-8 bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-#EAEBEC ml-64 p-5"  >
            Active
          </Button>
          </div>
          <p className="text-2xl font-bold text-white mb-2">₹6,499</p>
          <div className="flex flex-row gap-5 text-white">
            <p>Patient Date:  Jan 2024</p>
            <p>Plan Duration:  Months</p>
            <p>Valid From:  Jan 2024</p>
            <p>Valid Till:  June 2024</p>
          </div>
        </CardContent>
      </Card>
      
    <Card className="bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-green-600">
        <CardContent className="flex flex-col items-start">
          <div className="flex flex-row ">
          <h3 className="text-lg font-semibold mt-8 text-white">Free Plan</h3>
          <Button className="mt-8 bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC ml-72 p-5"  >
            Expired
          </Button>
          </div>
          <p className="text-2xl font-bold text-white mb-2">₹0</p>
          <div className="flex flex-row gap-5 text-white">
            <p>Patient Date:  Jan 2024</p>
            <p>Plan Duration:  Months</p>
            <p>Valid From:  Jan 2024</p>
            <p>Valid Till:  June 2024</p>
          </div>
         
        </CardContent>
      </Card>

    
    </div>
      <Card>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center mt-6">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Payment Type Filter
              </Button>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Date Filters
              </Button>
              <Button variant="outline" className="flex items-center">Export</Button>
            </div>
          </div>

          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Plan Name</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Coupon Applied</TableHead>
                <TableHead>Coupon Amount</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Payment Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <tbody>
              {SubscriptionHistory.map((plan, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{plan.name}</td>
                  <td className="p-2">{plan.total}</td>
                  <td>{plan.coupon}</td>
                  <td>{plan.couponamount}</td>
                  <td>{plan.paid}</td>
                  <td>{plan.date}</td>
                  <td>{plan.type}</td>
                  <td>
                    {/* Assign reference to track button position */}
                    <div ref={buttonRef} className="relative">
                      <MoreVertical
                        className="cursor-pointer"
                        onClick={(event) => openModal(plan, event)}
                      />
                    </div>
                  </td>
                </tr>
              ))} 
            </tbody>
          </Table>
        </CardContent>
      </Card>

      {/*  POP-UP  */}
      {selectedPlan && isModalOpen && position && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={false}>
          <DialogContent
            className="absolute z-50 bg-white shadow-lg border border-gray-200 rounded-lg p-4"
            style={{
              bottom: `${position.bottom}px`,
              left: `${position.left}px`,
              width: "300px",
            }}
          >
            <DialogHeader>
              <DialogTitle>
                {"Subscription Details"}
              </DialogTitle>
              <DialogDescription>
                {selectedPlan.coupon === "Yes" ? (
                  <>
                    <p><strong>Plan Type</strong> {selectedPlan.name}</p>
                    <p><strong>Total Amount</strong> ₹{selectedPlan.total}</p>
                    <p><strong>Coupon Applied</strong> ₹{selectedPlan.paid}</p>
                    <p><strong>Coupon Code</strong> ₹{selectedPlan.couponcode}</p>
                    <p><strong>Coupon Amount</strong> ₹{selectedPlan.couponamount}</p>
                    <p><strong>Amount Paid</strong> ₹{selectedPlan.paid}</p>
                    <p><strong>Payment Type</strong> ₹{selectedPlan.type}</p>
                    <p><strong>Payment Date</strong> ₹{selectedPlan.date}</p>
                    <p><strong>Physio Approved Date</strong> ₹{selectedPlan.approvedate}</p>
                  </>
                ) : (
                  <>
                    <p><strong>Total Amount:</strong> ₹{selectedPlan.name}</p>
                    <p><strong>Amount Paid:</strong> ₹{selectedPlan.total}</p>
                    <p><strong>Payment Type:</strong> {selectedPlan.type}</p>
                  </> 
                )}
                
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Subscriptionplan;
