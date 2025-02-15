import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import logo from "../assets/User.png";
import { useNavigate } from "react-router-dom";
import{Bell, Search} from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import Profile from "@/assets/Ellipse 348.png";
const notifications = [
	{ time: "11:00 PM", date: "Today" },
	{ time: "11:00 AM", date: "Today" },
	{ time: "11:00 AM", date: "Yesterday" },
	{ time: "10:30 PM", date: "Yesterday" },
	{ time: "11:00 PM", date: "27 Jan, 2025" },
	{ time: "10:30 PM", date: "27 Jan, 2025" },
	{ time: "11:00 AM", date: "27 Jan, 2025" },
  ];
const Navbar = () => {
	const navigate = useNavigate();

	

	const handleLogOut = () => {
	//sessionStorage.removeItem("token");
		navigate("/auth/login");
	};
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-white w-full h-20">
			<div className="px-12 w-full h-full flex justify-between items-center">
      <div className="flex items-center w-full justify-between mr-8">
        {/* Search Bar */}
        
		<div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <Input
        placeholder="Search"
        className="pl-10"
      />
   
        </div>
       
		<Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Bell className="w-6 h-6 text-gray-700" />
      </PopoverTrigger>
      <PopoverContent className="w-full p-4 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <Tabs defaultValue="physio" >
          <TabsList className="flex border-b text-sm p-2 mt-5 bg-white ">
            <TabsTrigger value="physio" className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50">Physio’s (8)</TabsTrigger>
            <TabsTrigger value="patient" className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50" >Patient’s (7)</TabsTrigger>
            <TabsTrigger value="support" className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50">Help & Support (6)</TabsTrigger>
            <TabsTrigger value="coins" className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50">Coins (5)</TabsTrigger>
            <TabsTrigger value="withdrawal"className="border-b-2 rounded-none shadow-none border-gray-200  data-[state=active]:text-green-500 data-[state=active]:border-green-500 data-[state=active]:bg-gray-50">Withdrawal (8)</TabsTrigger>
          </TabsList>
          <TabsContent value="physio">
            <ScrollArea className="h-96 mt-2">
              {notifications.map((notification, index) => (
                <div key={index} className="mt-4">
               
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{notification.date}</h4>
                
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={Profile} alt="User" />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">🎉 New Physio Joined!</p>
                      <p className="text-xs text-gray-500">
                        Abhishek Ajmera just signed up and is ready to get started! <span className="text-green-600 font-medium">Tap to view their Profile</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="coins">
            <ScrollArea className="h-96 mt-2">
              {notifications.map((notification, index) => (
                <div key={index} className="mt-4">
               
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{notification.date}</h4>
                
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={Profile} alt="User" />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">🎉 New Coins Request Recieved!</p>
                      <p className="text-xs text-gray-500">
                        Abhishek Ajmera just signed up and is ready to get started! <span className="text-green-600 font-medium">Tap to view their Profile</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="support">
            <ScrollArea className="h-96 mt-2">
              {notifications.map((notification, index) => (
                <div key={index} className="mt-4">
               
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{notification.date}</h4>
                
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={Profile} alt="User" />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">🎉 New Help And Support Request!</p>
                      <p className="text-xs text-gray-500">
                        Abhishek Ajmera just signed up and is ready to get started! <span className="text-green-600 font-medium">Tap to view their Profile</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="patient">
            <ScrollArea className="h-96 mt-2">
              {notifications.map((notification, index) => (
                <div key={index} className="mt-4">
               
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{notification.date}</h4>
                
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={Profile} alt="User" />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">🎉 New Patient Registered!</p>
                      <p className="text-xs text-gray-500">
                        Abhishek Ajmera just signed up and is ready to get started! <span className="text-green-600 font-medium">Tap to view their Profile</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="withdrawal">
            <ScrollArea className="h-96 mt-2">
              {notifications.map((notification, index) => (
                <div key={index} className="mt-4">
               
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{notification.date}</h4>
                
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={Profile} alt="User" />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">🎉 Withdrawal Request Submitted!</p>
                      <p className="text-xs text-gray-500">
                        Abhishek Ajmera just signed up and is ready to get started! <span className="text-green-600 font-medium">Tap to view their Profile</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
		  

        </Tabs>
      </PopoverContent>
    </Popover>
        </div>
		 
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="rounded-full overflow-hidden ring-1 ring-gray-400 cursor-pointer">
							<AvatarImage
								src={logo}
								className="object-contain"
							/>
							<AvatarFallback>P</AvatarFallback>
						</Avatar>
            
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-48 mx-4 my-0.5">
						<DropdownMenuItem className=" cursor-pointer">Profile</DropdownMenuItem>
						<DropdownMenuItem
							className=" cursor-pointer"
							 onClick={handleLogOut}
						>
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};
export default Navbar;
