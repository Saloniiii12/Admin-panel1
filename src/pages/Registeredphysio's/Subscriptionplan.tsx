import {  Table,TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
const Subscriptionplan = () => {
  return (
    <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <Card className="bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-green-600">


        <CardContent className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mt-5 text-white">Preminum Plan</h3>
          <p className="text-2xl font-bold text-white">₹6,499</p>
          <div className="flex flex-wrap gap-5 text-white">
            <p>Patient Date: 10 Jan 2024</p>
            <p>Plan Duration: 6 Months</p>
            <p>Valid From: 10 Jan 2024</p>
            <p>Valid Till: 10 June 2024</p>
          </div>
          <Button className="mt-2 bg-gradient-to-r from-[#039342] to-[#0BB57C] border border-#EAEBEC"  >
            Active
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC">
        <CardContent className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mt-5 text-white">Free Plan</h3>
          <p className="text-2xl font-bold text-white">₹0</p>
          <div className="flex flex-wrap gap-5 text-white">
            <p>Patient Count: 4/4 Patient</p>
            <p>Plan Duration: 6 Months</p>
            <p>Valid From: 10 Jan 2024</p>
            <p>Valid Till: 10 June 2024</p>
          </div>
          <Button className="mt-2 bg-gradient-to-r from-[#F93C65] to-[#FF5E84] border border-#EAEBEC" >
            Expired
          </Button>
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
            <Button variant="outline" className="flex items-center">
              {/* <exports className="mr-2 h-4 w-4" /> */}
              Export
            </Button>
          </div>
        </div>

        <Table  className="w-full">
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
         
        </Table>

        
      </CardContent>
    </Card>
  </div>
  )
}

export default Subscriptionplan
