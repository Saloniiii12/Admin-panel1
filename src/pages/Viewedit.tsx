import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "react-hot-toast";
import {  ChevronRight} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import Basicdetailsedit from "./Basicdetailsedit";
const Viewedit: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basic detail");
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
        <Button className="bg-[#039342] text-white hover:bg-green-700">
           
            Approved All
          </Button>  
          <Button className="bg-white text-black hover:bg-gray-200 ml-auto mr-4 flex items-center gap-2">
  Decline
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
          <TabsTrigger
  value="professional detail"
  className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
>
<a href="#professional-details-card">Professional Details</a>
</TabsTrigger>
          <TabsTrigger
  value="clinic detail"
  className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
>
 <a href="#clinic-details-card">Clinic Details</a>
</TabsTrigger>
          <TabsTrigger
  value="homecare detail"
  className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
>
<a href="#homecare-details-card">Home Care Details</a>
</TabsTrigger>
          <TabsTrigger
  value="treatment detail"
  className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500"
>
<a href="#other-details-card">Other Treatment Details</a>
</TabsTrigger>
          </TabsList>
          <TabsContent value="basic detail">
            <Basicdetailsedit />
          </TabsContent>
          <TabsContent value="professional detail">
            
            <Basicdetailsedit />
          </TabsContent>
          <TabsContent value="clinic detail">
            <Basicdetailsedit />
          </TabsContent>
          <TabsContent value="homecare detail">
            <Basicdetailsedit />
          </TabsContent>
          <TabsContent value="treatment detail">
            <Basicdetailsedit />
          </TabsContent>
        </Tabs>

       
      </div>
      {/* Toaster Notification */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Viewedit;
