import { AxiosError, AxiosResponse } from "axios";

interface LoginResponseData {
	message: string;
	status: number;
	success: boolean;
	token: string;
}

type LoginResponse = AxiosResponse<LoginResponseData>;

export type { LoginResponse };

export interface LoginErrorData {
	message: string;
	name: string;
	stack: string;
	code: string;
	status: number;
	config: {
		transitional: {
			silentJSONParsing: boolean;
			forcedJSONParsing: boolean;
			clarifyTimeoutError: boolean;
		};
		adapter: string[];
		transformRequest: null[];
		transformResponse: null[];
		timeout: number;
		xsrfCookieName: string;
		xsrfHeaderName: string;
		maxContentLength: number;
		maxBodyLength: number;
		env: Record<string, unknown>;
		headers: {
			Accept: string;
			"Content-Type": string;
			[key: string]: string;
		};
		baseURL: string;
		method: string;
		url: string;
		data: string;
	};
}

export function isAxiosError(error: unknown): error is AxiosError<LoginErrorData> {
	return error !== null && typeof error === "object" && "isAxiosError" in error;
}
