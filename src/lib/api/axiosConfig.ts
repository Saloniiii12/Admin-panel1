import axios from "axios";

const BaseUrl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
	baseURL: BaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default instance;
