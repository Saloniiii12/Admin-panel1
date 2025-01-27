import { Input } from "@/ui/input";
import logo from "@/assets/image 2.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [disabled, setDisabled] = useState<boolean>(true);

	if (!state || !state.token || state.token === "") {
		navigate("/auth/login");
	}

	useEffect(() => {
		if (confirmPassword === password && password.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [confirmPassword, password]);

	const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
		} else if (password.length === 0) {
			toast.error("Password cannot be empty");
		} else {
			toast.success("Password reset successfully!");
			navigate("/auth/login");
		}
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Physioplus"
						src={logo}
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Reset Password</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						onSubmit={handleResetPassword}
						className="space-y-6"
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm/6 font-medium text-gray-900"
							>
								New Password
							</label>
							<div className="mt-2">
								<Input
									id="password"
									name="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete="password"
									className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm/6 font-medium text-gray-900"
								>
									Confirm Password
								</label>
							</div>
							<div className="mt-2">
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
									autoComplete="confirmPassword"
									className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-red-400 disabled:cursor-not-allowed"
								disabled={disabled}
							>
								Reset Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
