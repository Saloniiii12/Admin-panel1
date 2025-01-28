import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";
import { Lock,Crown, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Transcation from "./Registeredphysio's/Transcation";
import Basicdetail from "./Registeredphysio's/Basicdetail";
import Subscriptionplan from "./Registeredphysio's/Subscriptionplan";
import Appointment from "./Registeredphysio's/Appointment";
import HelpandSupport from "./Registeredphysio's/HelpandSupport";
import RatingandReviews from "./Registeredphysio's/RatingandReviews";
import Wallet from "./Registeredphysio's/Wallet";

const RegisteredPhysios: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-gray-100 min-h-screen p-6">
     
       

        {/* Title Section */}
        <div className="flex justify-between items-center mb-4">
    {/* Breadcrumbs Section */}
 <div className="flex items-center space-x-2 mb-6">
          <button className="bg-gray-100 text-2xl font-semibold" >Registered Physios</button>
          <span><ChevronRight/></span>
          <button className="bg-gray-100 text-lg">Physio's detail</button>
        </div>
          
          <div className="flex items-center space-x-3 ml-auto">
           
                <Button className="bg-white text-black hover:bg-gray-200">
                  Block Physio
                  <Lock/>
                </Button>
            <Button className="bg-white text-black hover:bg-gray-200 ml-auto mr-4">
              Approved
            </Button>
            <Button className="bg-[#039342] text-white hover:bg-green-700">
              <Crown/>Premium Plan
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList className="w-full">
            <TabsTrigger value="basic detail">Basic Detail</TabsTrigger>
            <TabsTrigger value="subscription plan">Subscription Plan</TabsTrigger>
            <TabsTrigger value="transaction">Transaction</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="appointment">Appointment</TabsTrigger>
            <TabsTrigger value="rating & reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger value="help & support">Help & Support</TabsTrigger>
            
          </TabsList>
          
          <TabsContent value="basic detail">
            {/* Basic Details Section */}
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
                  index === 0 ? "bg-[#F9F5FF] text-[#7F56D9]" : "bg-gray-200 hover:bg-[#F9F5FF] hover:text-[#7F56D9]" 
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

export default RegisteredPhysios;
