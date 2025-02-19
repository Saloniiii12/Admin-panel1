import { Card, CardContent} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
const Basicdetail = () => {
 
  
  return (
    <Card className="mb-6">
         <CardContent>
    <div className="flex items-start gap-6">
    <Avatar className="w-32 h-32 rounded-full bg-gray-100 mt-8" />
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="p-4 mt-4">  <p>
                  <strong>Name:</strong>
                </p>
                <p style={{ color: "#515662" }}>Dr. Abhi Ajmera</p></Card>
            <Card className="p-4 mt-4">    <p>
                  <strong>Contact Number:</strong>
                </p>
                <p style={{ color: "#515662" }}>123456789</p></Card>
            <Card className="p-4 mt-2">    <p>
                  <strong>Gender:</strong>
                </p>
                <p style={{ color: "#515662" }}>Male</p></Card>
            <Card className="p-4 mt-2">    <p>
                  <strong>Born Year:</strong>
                </p>
                <p style={{ color: "#515662" }}>2004</p></Card>
   
          </div>
          
        </div>
 {/* State, City, and Pincode Section */}
 <div className="mt-4 grid grid-cols-3 gap-4">
          <Card className="p-4"><p><strong>State:</strong></p> <p>Rajasthan</p></Card>
          <Card className="p-4"><p><strong>City:</strong></p> <p>Jaipur</p></Card>
          <Card className="p-4"><p><strong>Pincode:</strong></p> <p>302012</p></Card>
      
        </div>
        <div className="mt-4 p-4 border rounded-lg">
          <strong>Patient Address:</strong>
          <p>
            Q3 Service India Private Limited, Vaishali Nagar 2nd Floor Office 204, Sankalp Tower
            Kalwar Road, Vaishali Nagar, Jaipur, Rajasthan 302021, India
          </p>
        </div>  
        </CardContent>      
    </Card>
    
  )
}

export default Basicdetail
