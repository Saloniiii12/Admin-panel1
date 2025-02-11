

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

import { ChevronRight, Pencil } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const EditPatient = () => {
  const [formData, setFormData] = useState({
    name: "Dr. Abhi Ajmera",
    gender: "Male",
    
    contact: "9876543210",
    
    address: "Plot 4 Ram Nagar, Shyam Nagar, Jaipur 302020",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302020",
   
    Pincode: "302020",
    
    year:"2004",
    //addphysioworking:"",
  });
  //
  const FileRef = useRef<HTMLInputElement>(null);

  //
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
            <div className="flex justify-between items-center mb-4">
        {/* Breadcrumbs Section */}
  
    <Breadcrumbs />
      <div className="flex justify-end mb-4">
        <Button className="bg-[#039342] text-white mt-0 rounded-lg">
          Save Changes
        </Button>
        </div>
      </div>
      <div>
        <Card className="mb-6">
          <CardContent>
            <div className="flex items-start space-x-4">
              <div className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center mt-12 relative">
                {/* Profile Image (if you have a default image, use it here) */}
                <div className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center mt-0">
                  {/* Placeholder for the image */}
                  <span className="text-white">Image</span>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  ref={FileRef}
                  onChange={handleChange}
                  className="hidden"
                />

                <div
                  className="w-8 h-8 p-2 rounded-full absolute bottom-0 left-2/3 bg-green-700 cursor-pointer flex justify-center items-center"
                  onClick={() => FileRef.current?.click()}
                >
                  <Pencil className="text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="p-4 mt-4  bg-[#F4F4F4B2]">  <p>
                  <strong>Name:</strong>
                  </p>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  /></Card>
            <Card className="p-4 mt-4  bg-[#F4F4F4B2]">    <p>
                  <strong>Contact Number:</strong></p>
                  <Input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  /></Card>
            <Card className="p-4 mt-2  bg-[#F4F4F4B2]">    <p>
                  <strong>Gender:</strong>
                </p>
                <Input
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  /></Card>
            <Card className="p-4 mt-2  bg-[#F4F4F4B2]">    <p>
                  <strong>Born Year:</strong>
                </p>
                <Input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}/></Card>
          </div>   
           </div>
           <div className="mt-4 grid grid-cols-3 gap-4">
          <Card className="p-4  bg-[#F4F4F4B2]"><p><strong>State:</strong></p>   <Input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  /></Card>
          <Card className="p-4  bg-[#F4F4F4B2]"><p><strong>City:</strong></p>   <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  /></Card>
          <Card className="p-4 bg-[#F4F4F4B2]"><p><strong>Pincode:</strong></p>   <Input
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  /></Card>
      
        </div>
        <div className="mt-4">
        <div className="mt-4 p-4 border rounded-lg  bg-[#F4F4F4B2]">
          <strong>Patient Address:</strong>
          <Input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
        </div>  
        </div>
          </CardContent>
        </Card>
        </div>
    </div>
  );
};

export default EditPatient;
{/* <Input
name="name"
value={formData.name}
onChange={handleChange}
/> */}