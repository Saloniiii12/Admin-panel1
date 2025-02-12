import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/image 2.png";

import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import { login } from "@/lib/api/auth";
import { isAxiosError, LoginResponse } from "@/lib/types/auth";

export default function Login() {
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const formValues = {
			mobile: formData.get("mobile"),
			password: formData.get("password"),
		};

		try {
			const res: LoginResponse | undefined = await login(String(formValues.mobile), String(formValues.password));
			if (res && res.status >= 200 && res.status < 300) {
				toast.success("Login successful");
				localStorage.setItem("token", res.data.token);
				navigate("/");
			} else {
				toast.error("Invalid mobile or password");
			}
		} catch (error) {
			if (isAxiosError(error)) {
				const errorMessage = error.response?.data?.message || "Something went wrong";
				toast.error(errorMessage);
			} else {
				toast.error("Something went wrong");
			}
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
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						onSubmit={handleSubmit}
						className="space-y-6"
					>
						<div>
							<label
								htmlFor="mobile"
								className="block text-sm/6 font-medium text-gray-900"
							>
								Mobile Number
							</label>
							<div className="mt-2">
								<Input
									id="mobile"
									name="mobile"
									type="mobile"
									maxLength={10}
									required
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
									Password
								</label>
								<div className="text-sm">
									<Link
										to={"/auth/forget-password"}
										className="font-semibold text-green-600 hover:text-green-500"
									>
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<Input
									id="password"
									name="password"
									type="password"
									required
									autoComplete="current-password"
									className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
