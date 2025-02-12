// import { LoginResponse } from "../types/auth";
import instance from "./axiosConfig";

export const login = async (mobile: string, password: string) => {
	try {
		const res = await instance.post("auth/login", {
			phone: mobile,
			password,
		});
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const sendOtp = async (mobile: number) => {
	try {
		const res = await instance.post("send-otp", {
			phone: mobile,
		});
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const verifyOtp = async (data: { mobile: string; otp: string }) => {
	try {
		const res = await instance.post("verify-otp", {
			phone: data.mobile,
			otp: data.otp,
		});
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const resetPassword = async (password: string, token: string) => {
	try {
		const res = await instance.post(
			"reset-password",
			{
				password,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return res;
	} catch (err) {
		console.log(err);
	}
};
