import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Invalid email"),
	password: z.string().min(4, "Password must be at least 4 characters long"),
});

export const forgetPasswordSchema = z.object({
	mobile: z.string().length(10, "Invalid mobile number"),
});

export const verifyOtpSchema = z.object({
	mobile: z.string().length(10, "Invalid mobile number"),
	otp: z.string().length(4, "Invalid OTP"),
});

export const resetPasswordSchema = z
	.object({
		password: z.string().min(4, "Password must be at least 4 characters long"),
		confirmPassword: z.string().min(4, "Password must be at least 4 characters long"),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
				path: ["confirmPassword"],
			});
		}
	});
