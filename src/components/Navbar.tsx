import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import logo from "../assets/User.png";
import { useNavigate } from "react-router-dom";
import{Bell} from "lucide-react";
const Navbar = () => {
	const navigate = useNavigate();

	

	const handleLogOut = () => {
	//sessionStorage.removeItem("token");
		navigate("/auth/login");
	};

	return (
		<div className="bg-white w-full h-16">
			<div className="px-8 h-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-sm rounded-lg px-8 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
       
				<div
					className="relative cursor-pointer"
					onClick={() => navigate("/notification")}
				>
					<Bell className="w-5 h-5 ml-auto" />
					<div className="absolute bottom-3 left-3 text-white bg-red-600 rounded-full flex items-center justify-center px-1 text-xs ml-auto">
						5
					</div>
				</div>
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
