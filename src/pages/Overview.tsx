import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";
import { Lock, Crown, ChevronRight, ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Help from "./Patient/Help";
import Transactionpatient from "./Patient/Transactionpatient";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Basic from "./Patient/Basic";
import Appointmentdetails from "./Patient/Appointmentdetails";
import Physiopluscoin from "./Patient/Physiopluscoin";
const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic detail");
  

  const navigate = useNavigate(); 

  const handleEdit = () => {
    const patientId = 4; // Replace this with dynamic ID logic
    navigate(`/editpatient/${patientId}`);
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

            <TabsTrigger value="appointmentdetails"
            className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">
              Appointment Details
            </TabsTrigger>
            
             <TabsTrigger value="transaction"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Transaction</TabsTrigger>
            <TabsTrigger value="physiopluscoin"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Physioplus Coin</TabsTrigger>
            <TabsTrigger value="help"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500">Help & Support</TabsTrigger>
            <TabsContent value="basic detail">
              {/* Basic Details Section */}
              <div className="mt-0 mb-2 p-0  ml-96 justify-normal">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" onClick={handleEdit}>
                      Edit <ChevronDown />{" "}
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </TabsContent>
          </TabsList>
          <TabsContent value="basic detail">
            <Basic />
          </TabsContent>
          <TabsContent value="appointmentdetails">
            <Appointmentdetails />
          </TabsContent>
          <TabsContent value="transaction">
            <Transactionpatient />
          </TabsContent>
          <TabsContent value="physiopluscoin">
            <Physiopluscoin />
          </TabsContent>
          <TabsContent value="help">
            <Help />
          </TabsContent>
        </Tabs>

       
      </div>
      {/* Toaster Notification */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Overview;
