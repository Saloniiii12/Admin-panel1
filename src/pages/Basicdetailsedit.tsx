import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown} from "lucide-react";
import { Input } from "@/components/ui/input";
import Profile from "@/assets/Ellipse 348.png";
import Updateprofile from "@/assets/Ellipse 348 (1).png";
const Basicdetailsedit = () => {
    const [profile] = useState({
        name: "Abhishek Ajmera",
        contact: "+91 9876543210",
        email: "boyabhishek@gmail.com",
        gender: "Male",
        experience: "32 months",
        dob: "10 Jan 1998",
        about: "Enter about or details about the physio.",
        updatedGender: "Female",
        updatedDob: "20 June 2000",
            degree: "Bachelor of Physiotherapy, Master of Physiotherapy...",
            specialization: "General Pain, Ortho Pain,",
            subSpecialization: "Elbow Pain, Neck Pain, Leg Pain, Head Pain, Back Pain",
            insurancePatient: "Yes",
            iapRegistered: "No",
            iapNumber: "876543210",
            updatedDegree: "Bachelor of Physiotherapy, Master of Physiotherapy...",
            updatedSpecialization: "General Pain, Ortho Pain,",
            updatedSubSpecialization: "Elbow Pain, Neck Pain, Leg Pain, Head Pain, Back Pain",
            updatedInsurancePatient: "No",
            updatedIapRegistered: "Yes",
            updatedIapNumber: "876543210",
          
      });
       const [clinic] = useState({
    name: "Abhishek Ajmera Clinic & Physio Center",
    address: "Plot no 3 Ram nagar Jaipur 302020",
    city: "Jaipur",
    state: "Jaipur",
    pincode: "302012",
    consultationFees: "₹ 500",
    consultationDuration: "30 minutes",
   
    workingDays: {
      Sunday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
      Monday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
      Tuesday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
    },
    updatedName: "Abhishek Clinic & Physio Center",
    updatedAddress: "Plot no 786 Ram nagar Jaipur 302020",
    updatedCity: "Bikaner",
    updatedState: "Delhi",
    updatedPincode: "201220",
    updatedConsultationFees: "₹ 800",
    updatedConsultationDuration: "20 minutes",
  
    updatedWorkingDays: {
      Sunday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
      Monday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
      Tuesday: ["12:00 PM - 12:00 PM", "12:00 PM - 12:00 PM"],
    },
  });
  const [home] = useState({
    pincode:"302012",
    updatedpincode:"302022",
    duration:"30 minute",
    updatedduration:"35 minute",
    fivekm:"₹500",
    tenkm:"1000",
    updatedfivekm:"₹550",
    updatedtenkm:"₹1100",
  });
  
  const days = ["Sunday", "Monday", "Tuesday"];
  return (
    <div>
        {/* Basic Detail */}
    <Card className="mb-6">
      <CardContent>
        <div className="flex flex-col md:flex-row gap-10 p-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <p className="mt-2 text-lg font-medium">Profile Image</p>
          <img src={Profile} alt="" className="w-28 h-28 rounded-full shadow-md" />
         
        </div>
        <p>
                  <strong>Name:</strong>
                </p>
        <Input  value={profile.name} readOnly />
        <p>
                  <strong>Contact Number:</strong>
                </p>
        <Input  value={profile.contact} readOnly />
        <p>
                  <strong>Email:</strong>
                </p>
        <Input  value={profile.email} readOnly />
        <p>
                  <strong>Gender:</strong>
                </p>
        <Input  value={profile.gender} readOnly />
        <p>
                  <strong>Experience:</strong>
                </p>
        <Input  value={profile.experience} readOnly />
        <p>
                  <strong>Date of Birth:</strong>
                </p>
        <Input  value={profile.dob} readOnly />
        <p>
                  <strong>About Physio:</strong>
                </p>
        <Input  value={profile.about} readOnly />
      </div>

      {/* Right Column - Updated Details */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <p className="mt-2 text-lg font-medium text-[#039342]">Updated Profile Image</p>
          <img src={Updateprofile} alt="" className="w-28 h-28 rounded-full shadow-md" />
       
        </div>
        <p className="text-[#039342]">     <strong>Updated Name:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.name}></Input>
        <p className="text-[#039342]">
                  <strong>Updated Contact Number:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.contact}></Input>
        <p className="text-[#039342]">
                  <strong>Updated Email:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.email}></Input>
        <p className="text-[#039342]">
                  <strong>Updated Gender:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]"value={profile.updatedGender}></Input>
        <p className="text-[#039342]">
                  <strong>Updated Experience:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.experience}></Input>
        <p className="text-[#039342]">
                  <strong>Updated DOB:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.updatedDob}></Input>
        <p className="text-[#039342]">
                  <strong>Updated About Physio:</strong>
                </p>
        <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={profile.about}></Input>
      </div>
    </div>
        </CardContent>
      </Card>

      {/* Professional Details */}
      <Card className="mb-6">
    <CardHeader className="flex bg-[#039342] rounded-lg">
      <div className="flex items-center space-x-2 text-white"  id="professional-details-card">
        <CardTitle>Professional Details</CardTitle>
       
           <ChevronDown size={20}/>
      </div>
      <h3 className="text-white">You can view professional details below:</h3>
    </CardHeader>
   
      <CardContent>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

          {/* Selected Degree */}
          <div>
            <p className="font-semibold">Selected Degree</p>
            <Input value={profile.degree} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Update Degree</p>
            <Card className="p-1.5 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedDegree}</Card>
          </div>

          {/* Degree Images */}
          <div>
            <p className="font-semibold">Degree Images</p>
            <div className="flex gap-2 mt-1">
             
                <img src={" "} alt="" className="w-16 h-16 rounded-md border" />
           
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Degree Images</p>
            <div className="flex gap-2 mt-1">
               <img  src={" "} alt="" className="w-16 h-16 rounded-md border" />
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="font-semibold">Uploaded Achievement</p>
            <div className="flex gap-2 mt-1">
              
                <img  src={" "} alt="" className="w-16 h-16 rounded-md border" />
            
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Uploaded Achievement</p>
            <div className="flex gap-2 mt-1">
              
                <img  src={" "} alt="" className="w-16 h-16 rounded-md border" />
             
            </div>
          </div>

          {/* Specialization */}
          <div>
            <p className="font-semibold">Specialization</p>
            <Input value={profile.specialization} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Specialization</p>
            <Card className="p-1.5 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedSpecialization}</Card>
          </div>

          {/* Sub-Specialization */}
          <div>
            <p className="font-semibold">Sub-Specialization</p>
            <Input value={profile.subSpecialization} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Sub-Specialization</p>
            <Card className="p-1.5 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedSubSpecialization}</Card>
          </div>

          {/* Insurance Patient */}
          <div>
            <p className="font-semibold">Like to treat insurance patient?</p>
            <Input value={profile.insurancePatient} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Like to treat insurance patient?</p>
            <Card className="p-1.5 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedInsurancePatient}</Card>
          </div>

          {/* IAP Registered */}
          <div>
            <p className="font-semibold">IAP Registered</p>
            <Input value={profile.iapRegistered} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">IAP Registered</p>
            <Card className="p-2 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedIapRegistered}</Card>
          </div>

          {/* IAP Number */}
          <div>
            <p className="font-semibold">IAP Number</p>
            <Input value={profile.iapNumber} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated IAP Number</p>
            <Card className="p-1.5 bg-[#E6F4ECB2] text-[#039342]">{profile.updatedIapNumber}</Card>
          </div>

          {/* IAP Certificates */}
          <div>
            <p className="font-semibold">Uploaded IAP Certificate</p>
            <div className="flex gap-2 mt-1">
             
                <img  src={" "} alt="" className="w-16 h-16 rounded-md border" />
            
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated IAP Certificate</p>
            <div className="flex gap-2 mt-1">
             
                <img  src={" "} alt="" className="w-16 h-16 rounded-md border" />
          
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
            {/* Clinic Details */}
            <Card className="mb-6">
    <CardHeader className="flex bg-[#039342] rounded-lg">
      <div className="flex items-center space-x-2 text-white"  id="clinic-details-card">
        <CardTitle>Clinic Details</CardTitle>
          <ChevronDown size={20} />
        
      </div>
      <h3 className="text-white">You can view professional details below:</h3>
    </CardHeader>
    <CardContent>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

          {/* Clinic Name */}
          <div>
            <p className="font-semibold">Clinic Name</p>
            <Input value={clinic.name} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Clinic Name</p>
            <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedName}></Input>
          </div>

          {/* Address */}
          <div>
            <p className="font-semibold">Clinic Address</p>
            <Input value={clinic.address} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Clinic Address</p>
            <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedAddress}></Input>
          </div>

          {/* City */}
          <div>
            <p className="font-semibold">City</p>
            <Input value={clinic.city} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated City</p>
            <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedCity}></Input>
          </div>

          {/* State */}
          <div>
            <p className="font-semibold">State</p>
            <Input value={clinic.state} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated State</p>
            <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedState}></Input>
          </div>

          {/* Pincode */}
          <div>
            <p className="font-semibold">Pincode</p>
            <Input value={clinic.pincode} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Pincode</p>
            <Input className=" bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedPincode}></Input>
          </div>

          {/* Clinic Images */}
          <div>
            <p className="font-semibold">Uploaded Clinic Images</p>
            <div className="flex gap-2">
              
                <img src={" "} alt=" " className="w-16 h-16 rounded-md border" />
           
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Clinic Images</p>
            <div className="flex gap-2">
             
                <img src={" "} alt=" " className="w-16 h-16 rounded-md border" />
          
            </div>
          </div>

          {/* Consultation Fees */}
          <div>
            <p className="font-semibold">Consultation Fees</p>
            <Input value={clinic.consultationFees} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Consultation Fees</p>
            <Input className="p-2 bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedConsultationFees}></Input>
          </div>

          {/* Consultation Duration */}
          <div>
            <p className="font-semibold">Consultation Duration</p>
            <Input value={clinic.consultationDuration} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Consultation Duration</p>
            <Input className="p-2 bg-[#E6F4ECB2] text-[#039342]" value={clinic.updatedConsultationDuration}></Input>
          </div>

          
      {/* Original Working Days */}
      <div className="w-full">
        <h2 className="text-gray-900 font-semibold text-lg mb-4">Working Days</h2>
        {days.map((day) => (
          <div key={day} className="bg-white shadow-md rounded-lg p-4 mb-4">
        
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
            </div>
            <div className="mt-0">    <h3 className="text-gray-800 font-medium">{day}</h3></div>
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
            </div>
          </div>
        ))}
      </div>

      {/* Updated Working Days */}
      <div className="w-full">
        <h2 className="text-[#039342] font-semibold text-lg mb-4">Updated Working Days</h2>
        {days.map((day) => (
          <div key={day} className="bg-[#E6F4ECB2] shadow-md rounded-lg p-4 mb-4">
         
            <div className="flex gap-4 mt-2 ml-32">
            
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
            </div>
            <div className="mt-0">  <h3 className="text-[#039342] font-medium ">{day}</h3></div>
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
            </div>
          </div>
        ))}
      </div>
    

        </div>
      </CardContent>
    </Card>

            {/* Home Care Details */}
            <Card className="mb-6">
    <CardHeader className="flex bg-[#039342] rounded-lg">
      <div className="flex items-center space-x-2 text-white"  id="homecare-details-card">
        <CardTitle>Home Care Detail</CardTitle>
          <ChevronDown size={20} />
        
      </div>
      <h3 className="text-white">You can view home care details below:</h3>
    </CardHeader>
    <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <p className="font-semibold">Pincode Where You Serve</p>
            <Input value={home.pincode} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Pincode Where You Serve</p>
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedpincode}></Input>
          </div>
          <div>
            <p className="font-semibold">Consultation Duration</p>
            <Input value={home.duration} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Consultation Duration</p>
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedduration}></Input>
          </div>

          <div>
            <p className="font-semibold">Consultation Fees for 5 KM</p>
            <Input value={home.fivekm} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Consultation Fees for 5 KM</p>
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedfivekm}></Input>
          </div>

          {/* State */}
          <div>
            <p className="font-semibold">Consultation Fees for 10 KM</p>
            <Input value={home.tenkm} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342]">Updated Consultation Fees for 10 KM</p>
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedduration}></Input>
          </div>          
      {/* Original Working Days */}
      <div className="w-full">
        <h2 className="text-gray-900 font-semibold text-lg mb-4">Working Days</h2>
        {days.map((day) => (
          <div key={day} className="bg-white shadow-md rounded-lg p-4 mb-4">
        
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
            </div>
            <div className="mt-0">    <h3 className="text-gray-800 font-medium">{day}</h3></div>
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-24 text-center" placeholder="12:00 PM" />
            </div>
          </div>
        ))}
      </div>

      {/* Updated Working Days */}
      <div className="w-full">
        <h2 className="text-[#039342] font-semibold text-lg mb-4">Updated Working Days</h2>
        {days.map((day) => (
          <div key={day} className="bg-[#E6F4ECB2] shadow-md rounded-lg p-4 mb-4">
         
            <div className="flex gap-4 mt-2 ml-32">
            
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
            </div>
            <div className="mt-0">  <h3 className="text-[#039342] font-medium ">{day}</h3></div>
            <div className="flex gap-4 mt-2 ml-32">
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
              <span className="text-gray-600">to</span>
              <input type="text" className="border p-2 rounded-md w-32 text-center" placeholder="12:00 PM" />
            </div>
          </div>
        ))}
      </div>
        </div>
      </CardContent>
    </Card>
            {/* Other Treatment Details */}
            <Card className="mb-6">
    <CardHeader className="flex bg-[#039342] rounded-lg">
        
      <div className="flex items-center space-x-2 text-white"  id="other-details-card">
        <CardTitle>Other Treatment Detail</CardTitle>
          <ChevronDown size={20} />
        
      </div>
      <h3 className="text-white">You can view other treatment details below:</h3>
    </CardHeader>
    <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <div>
            <p className="font-semibold mb-2">Treatment Name & charges: </p>
            <Input value={home.tenkm} readOnly />
          </div>
          <div>
            <p className="font-semibold text-[#039342] mb-2">Updated Treatment Name & charges:</p>
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedtenkm}></Input>
          </div> 
            <Input value={home.tenkm} readOnly />
            <Input className="p-1.5 bg-[#E6F4ECB2] text-[#039342]" value={home.updatedtenkm}></Input>
         
          </div>
          </CardContent>
            </Card>
    
    </div>
    
  )
}

export default Basicdetailsedit
