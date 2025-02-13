import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/image 2.png";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { sendOtp, verifyOtp } from "@/lib/api/auth";
import toast from "react-hot-toast";
import { isAxiosError } from "@/lib/types/auth";
import { forgetPasswordSchema, verifyOtpSchema } from "@/lib/schema/auth";

const ForgetPassword = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [mobile, setMobile] = useState<number>(0);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const formValues = {
			mobile: formData.get("mobile"),
		};
		const parsed = forgetPasswordSchema.safeParse(formValues);
		if (!parsed.success) {
			toast.error(parsed.error.errors[0].message);
		} else {
			setMobile(Number(formValues.mobile));
			try {
				const res = await sendOtp(Number(formValues.mobile));
				if (res && res.status >= 200 && res.status < 300) {
					setOpen(true);
				} else {
					toast.error("Something went wrong");
				}
			} catch (error) {
				if (isAxiosError(error)) {
					const errorMessage = error.response?.data?.message || "Something went wrong";
					toast.error(errorMessage);
				} else {
					toast.error("Something went wrong");
				}
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
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Recover your password</h2>
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
									type="string"
									maxLength={10}
									required
									autoComplete="mobile"
									className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
								/>
							</div>
						</div>
						<div className="text-right">
							<Link
								to={"/auth/login"}
								className="text-sm font-semibold text-green-600 hover:text-green-500 -mt-2"
							>
								Back to Login
							</Link>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
							>
								Send OTP
							</button>
						</div>
					</form>
					<OtpDialog
						mobile={mobile}
						open={open}
						setOpen={setOpen}
					/>
				</div>
			</div>
		</div>
	);
};
export default ForgetPassword;

export function OtpDialog({
	mobile,
	open,
	setOpen,
}: {
	mobile: number;
	open: boolean;
	setOpen: (open: boolean) => void;
}) {
	const navigate = useNavigate();

	const [otp, setOtp] = useState<string>("");
	const [disabled, setDisabled] = useState<boolean>(true);
	const [timeLeft, setTimeLeft] = useState<number>(60);

	useEffect(() => {
		if (open) {
			setDisabled(true);
			setTimeLeft(60);

			const intervalId = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						setDisabled(false);
						clearInterval(intervalId);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [open]);

	const handleResendOtp = async () => {
		try {
			const res = await sendOtp(Number(mobile));
			if (res && res.status >= 200 && res.status < 300) {
				setDisabled(true);
				setTimeLeft(60);
				toast.success("OTP sent successfully");
			} else {
				toast.error("Something went wrong");
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

	const handleVerifyOtp = async () => {
		const data = { mobile: String(mobile), otp: String(otp) };
		const parsed = verifyOtpSchema.safeParse(data);
		if (!parsed.success) {
			console.log(parsed.error);
		} else {
			try {
				const res = await verifyOtp(data);
				navigate("/auth/reset-password", { state: { token: res?.data.token } });
			} catch (error) {
				if (isAxiosError(error)) {
					const errorMessage = error.response?.data?.message || "Something went wrong";
					toast.error(errorMessage);
				} else {
					toast.error("Something went wrong");
				}
			}
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogContent className="sm:max-w-[425px] min-h-96 p-10 flex flex-col justify-between gap-2 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
				<DialogTitle className="text-center text-3xl font-semibold tracking-tight text-gray-900">
					Enter the OTP
				</DialogTitle>
				<div className="flex flex-col items-center gap-8">
					<DialogDescription className="text-base">
						Sent to +91 <span className="font-semibold text-green-600">{mobile}</span>
					</DialogDescription>
					<InputOTP
						maxLength={4}
						onChange={(e) => setOtp(e)}
					>
						<InputOTPGroup>
							<InputOTPSlot
								index={0}
								className="w-12 h-12 border-black"
							/>
						</InputOTPGroup>
						<InputOTPGroup>
							<InputOTPSlot
								index={1}
								className="w-12 h-12 border-black"
							/>
						</InputOTPGroup>
						<InputOTPGroup>
							<InputOTPSlot
								index={2}
								className="w-12 h-12 border-black"
							/>
						</InputOTPGroup>
						<InputOTPGroup>
							<InputOTPSlot
								index={3}
								className="w-12 h-12 border-black"
							/>
						</InputOTPGroup>
					</InputOTP>

					<div className="text-sm ">
						Didn't receive OTP?{" "}
						{disabled ? (
							<span className="text-gray-400 cursor-not-allowed">
								Resend in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
							</span>
						) : (
							<button
								className="underline text-green-600"
								onClick={handleResendOtp}
							>
								Resend
							</button>
						)}
					</div>
				</div>
				<button
					className="bg-green-600 text-white py-1.5 px-4 rounded-md"
					onClick={handleVerifyOtp}
				>
					Verify OTP
				</button>
			</DialogContent>
		</Dialog>
	);
}
