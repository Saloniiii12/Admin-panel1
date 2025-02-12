import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import logo from "../assets/User.png";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "./ui/input";
const Navbar = () => {
	const navigate = useNavigate();

	const handleLogOut = () => {
		localStorage.removeItem("token");
		navigate("/auth/login");
	};

	return (
		<div className="bg-white w-full h-16">
			<div className="px-8 w-full h-full flex justify-between items-center">
				<div className="flex items-center w-full justify-between">
					{/* Search Bar */}
					<div className="relative w-1/3">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
						<Input
							placeholder="Search"
							className="pl-10 bg-gray-100"
						/>
					</div>

					<div
						className="relative cursor-pointer  "
						onClick={() => navigate("/notification")}
					>
						<Bell className="w-5 h-5 ml-auto " />
						<div className="absolute bottom-3 left-3 text-white bg-red-600 rounded-full flex items-center justify-center px-1 text-xs ml-auto">
							5
						</div>
					</div>
				</div>

				<div className="mx-4">|</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="flex justify-center items-center gap-4 cursor-pointer">
							<Avatar className="flex justify-center items-center rounded-full overflow-hidden ring-1 ring-gray-400 cursor-pointer">
								<AvatarImage
									src={logo}
									className="object-contain w-6 h-6"
								/>
								<AvatarFallback>P</AvatarFallback>
							</Avatar>
							<div className="flex justify-center items-center">
								<p>Name</p> <ChevronDown className="w-4 h-4" />
							</div>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-48 my-0.5 me-10">
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
