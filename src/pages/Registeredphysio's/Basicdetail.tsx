import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Basicdetail = () => {
  const [openCardId, setOpenCardId] = useState<number | null>(null);
  const [degreeImages, setDegreeImages] = useState<File[]>([]);

  const toggleContent = (cardId: number) => {
    setOpenCardId((prevId) => (prevId === cardId ? null : cardId));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDegreeImages(Array.from(e.target.files)); // Update the degreeImages state with selected files
    }
  };

  const renderDegreeImages = () => {
    return degreeImages.map((image, index) => (
      <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-100">
        <img src={URL.createObjectURL(image)} alt={`Degree Image ${index}`} className="w-full h-auto rounded-md" />
      </div>
    ));
  };

  return (
    <div>
      <Card className="mb-6">
        <CardContent>
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <Avatar className="w-32 h-32 rounded-full bg-gray-100 mt-5" />
            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 mt-4">
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Name:</strong>
                </p>
                <p style={{ color: "#515662" }}>Dr. Abhi Ajmera</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Gender:</strong>
                </p>
                <p style={{ color: "#515662" }}>Male</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Experience:</strong>
                </p>
                <p style={{ color: "#515662" }}>2 Years</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Date of Birth:</strong>
                </p>
                <p style={{ color: "#515662" }}>19 Jan 1998</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Contact Number:</strong>
                </p>
                <p style={{ color: "#515662" }}>9876543210</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <p>
                  <strong>Email :</strong>
                </p>
                <p style={{ color: "#515662" }}>bayabhishek@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">About Physio</h3>
              <p>
                Dr. Abhi Mehra is a skilled physiotherapist dedicated to improving patients' physical health and well-being. With expertise in pain management, rehabilitation, and mobility restoration, Dr. Mehra offers personalized treatment plans tailored to individual needs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Details */}
      <Card className="mb-6">
        <CardHeader className="flex bg-[#039342] rounded-lg">
          <div className="flex items-center space-x-2 text-white">
            <CardTitle>Professional Details</CardTitle>
            <button onClick={() => toggleContent(1)} className="p-2">
              {openCardId === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          <h3 className="text-white">You can view professional details below:</h3>
        </CardHeader>
        {openCardId === 1 && (
          <CardContent>
            <div className="space-y-4">
              <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">Degree Name</h3>
                <p>Bachelor of Physiotherapy, Master of Physiotherapy</p>
              </div>

             {/* Degree Images Section */}
             <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">Degree Images</h3>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="mb-4"
                />
                <div className="grid grid-cols-3 gap-4">
                  {degreeImages.length > 0 && renderDegreeImages()}
                </div>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
              <h3 className="font-semibold mb-2">Achievement Images</h3></div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">Specialization</h3>
                <p>General Pain, Ortho Pain</p>
              </div>

              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">Sub-Specialization</h3>
                <p>Elbow Pain, Neck Pain, Leg Pain, Head Pain, Back Pain</p>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">Like to treat insurance patient?</h3>
                <p>No</p>
              </div>

              <div className="flex space-x-4">
                <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                  <h3 className="font-semibold mb-2">IAP Registered</h3>
                  <p>Yes</p>
                </div>
                <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                  <h3 className="font-semibold mb-2">IAP Number</h3>
                  <p>8750123645112100</p>
                </div>
              </div>

              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">IAP certificate</h3>
              </div>
              <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
                <h3 className="font-semibold mb-2">IAP Registered</h3>
                <p>No</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
   


     
            {/* Clinic Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-[#039342] rounded-lg">
        <div className="flex items-center space-x-2 text-white">
          <CardTitle>Clinic Details</CardTitle>
          <button onClick={()=>toggleContent(2)} className="p-2">
          {openCardId===2?<ChevronUp size={20}/>:<ChevronDown size={20}/>}
         </button>
        </div>
        <h3 className="text-white">You can view clinic details below:</h3>
      </CardHeader>
      {openCardId === 2 && (
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Clinic Name</h3>
                      <p>Abhishek Ajmera Clinic and Physio Center</p>
                    </div>
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Clinic Address</h3>
                      <p>Plot 4 Ram Nagar, Shyam Nagar, Jaipur 302020</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">City</h3>
                      <p>Jaipur</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">State</h3>
                      <p>Rajasthan</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Pincode</h3>
                      <p>302020</p>
                    </div>
                  </div>
                  <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                    <h3 className="font-semibold mb-2">Clinic Images</h3>
                  </div>

                  <div className="flex space-x-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Consultation Fees</h3>
                      <p>₹450</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">
                        Consultation Duration
                      </h3>
                      <p>30 minutes</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Working Days & Time</h3>
                   {/* <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1"> */}
                    
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm w-[350px] bg-gray-100">
      <span className="font-medium text-lg">Wednesday</span>
      <div className="flex flex-col gap-2 text-green-600 text-sm">
        <div className="flex gap-1">
          <span>10:00</span>
          <span>AM</span>
          <span>To</span>
          <span>12:00</span>
          <span>PM</span>
        </div>
        <hr/>
        <div className="flex gap-1">
          <span>3:00</span>
          <span>PM</span>
          <span>To</span>
          <span>4:00</span>
          <span>PM</span>
        </div>
      </div>
    </div>
                  </div>
                  
                  
              
              </CardContent>
      )}
            </Card>

            {/* Home Care Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-[#039342] rounded-lg">
        <div className="flex items-center space-x-2 text-white">
          <CardTitle>Home Care Details</CardTitle>
          <button onClick={()=>toggleContent(3)} className="p-2">
          {openCardId===3?<ChevronUp size={20}/>:<ChevronDown size={20}/>}
         </button>
        </div>
        <h3 className="text-white">You can view home care details below:</h3>
      </CardHeader>
      {openCardId===3 && (
              <CardContent>
                 <div className="flex space-x-4 mt-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Pincode Where You Serve</h3>
                      <p>322201</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">
                        Consultation Duration
                      </h3>
                      <p>30 minutes</p>
                    </div>
                  </div>
                 <div className="flex space-x-4 mt-4">
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Consultation Fees For 5 km </h3>
                      <p>₹450</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">
                      Consultation Fees For 10 km
                      </h3>
                      <p>₹450</p>
                    </div>
                  </div>
                  <h3 className="text-semibold mt-4 mb-4">Working Days and Time</h3>
                  <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm w-[350px] bg-gray-100">
      <span className="font-medium text-lg">Sunday</span>
      <div className="flex flex-col gap-2 text-green-600 text-sm">
        <div className="flex gap-1">
          <span>10:00</span>
          <span>AM</span>
          <span>To</span>
          <span>12:00</span>
          <span>PM</span>
        </div>
        <hr/>
        <div className="flex gap-1">
          <span>3:00</span>
          <span>PM</span>
          <span>To</span>
          <span>4:00</span>
          <span>PM</span>
        </div>
      </div>
    </div>
                 
              </CardContent>
      )}
            </Card>
            {/* Other Treatment Details */}
            <Card className="mb-6">
            <CardHeader className="flex bg-[#039342] rounded-lg">
        <div className="flex items-center space-x-2 text-white">
          <CardTitle>Other Treatment Details</CardTitle>
          <button onClick={()=>toggleContent(4)} className="p-2">
          {openCardId===4?<ChevronUp size={20}/>:<ChevronDown size={20}/>}
         </button>
        </div>
        <h3 className="text-white">Check the other treatment price mention by physio</h3>
      </CardHeader>
      {openCardId===4 && (
              <CardContent>
                <div className="space-y-4">
                <div className="flex space-x-4">
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Treatment Name</h3>
                      <p>Back Pain</p>
                    </div>
                    <div className="border p-4 mt-4 rounded-lg shadow-sm bg-gray-100 flex-1">
                      <h3 className="font-semibold mb-2">Treatment Name</h3>
                      <p>Back Pain</p>
                    </div>
                  
                  </div>
                
                 
                </div>
              </CardContent>
      )}
            </Card>
    </div>
    
  )
}

export default Basicdetail
