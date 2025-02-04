import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";
import { Lock, Crown, ChevronRight, ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Transcation from "./Registeredphysio's/Transcation";
import Basicdetail from "./Registeredphysio's/Basicdetail";
import Subscriptionplan from "./Registeredphysio's/Subscriptionplan";
import Appointment from "./Registeredphysio's/Appointment";
import HelpandSupport from "./Registeredphysio's/HelpandSupport";
import RatingandReviews from "./Registeredphysio's/RatingandReviews";
import Wallet from "./Registeredphysio's/Wallet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const ViewDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic detail");
  

  const navigate = useNavigate(); 

  const handleEditClick = () => {
    const physioId = 3; // Replace this with dynamic ID logic
    navigate(`/edit/${physioId}`);
  };
 // Breadcrumb Component
const Breadcrumbs = ({ customPath }: { customPath?: string[] }) => {
  const location = useLocation();
  const paths = customPath || location.pathname.split("/").filter((path) => path);

  return (
    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
      <Link to="/" className="text-gray-700 hover:underline text-2xl">Registered Physio's</Link>
      {paths.map((path, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link to={`/${paths.slice(0, index + 1).join("/")}`} className="hover:underline capitalize">
            {path.replace("-", "")}
          </Link>
        </div>
      ))}
    </div>
  );
};
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Breadcrumbs Section */}
  
    <Breadcrumbs />
        <div className="flex items-center space-x-3 ml-auto">
          <Button className="bg-white text-black hover:bg-gray-200">
            Block Physio
            <Lock />
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 ml-auto mr-4 flex items-center gap-2">
  Approved
  <span className="w-2 h-2 bg-[#039342] rounded-full"></span>
</Button>

          <Button className="bg-[#039342] text-white hover:bg-green-700">
            <Crown />
            Premium Plan
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList className="w-full bg-white ">
          <TabsTrigger
  value="basic detail"
  className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
>
  Basic Detail
</TabsTrigger>

            <TabsTrigger value="subscription plan"
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">
              Subscription Plan
            </TabsTrigger>
            <TabsTrigger value="transaction" className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Transaction</TabsTrigger>
            <TabsTrigger value="wallet"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Wallet</TabsTrigger>
            <TabsTrigger value="appointment"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Appointment</TabsTrigger>
            <TabsTrigger value="rating & reviews"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="help & support"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Help & Support</TabsTrigger>
            <TabsContent value="basic detail">
              {/* Basic Details Section */}
              <div className="mt-0 mb-2 p-0  ml-60 justify-normal">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" onClick={handleEditClick}>
                      Edit <ChevronDown />{" "}
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </TabsContent>
          </TabsList>
          <TabsContent value="basic detail">
            <Basicdetail />
          </TabsContent>
          <TabsContent value="subscription plan">
            <Subscriptionplan />
          </TabsContent>
          <TabsContent value="transaction">
            <Transcation />
          </TabsContent>
          <TabsContent value="wallet">
            <Wallet />
          </TabsContent>
          <TabsContent value="appointment">
            <Appointment />
          </TabsContent>
          <TabsContent value="rating & reviews">
            <RatingandReviews />
          </TabsContent>
          <TabsContent value="help & support">
            <HelpandSupport />
          </TabsContent>
        </Tabs>

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
      {/* Toaster Notification */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ViewDetail;
