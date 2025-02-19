import instance from "./axiosConfig";

export const physioDashboardCardData = async (date: { from: string; to: string } | null) => {
	if (date) {
		const res = await instance.get("physio/getPhysiocount", {
			params: {
				startOfDay: date.from,
				endOfDay: date.to,
			},
		});
		return res;
	} else {
		const res = await instance.get("physio/getPhysiocount");
		return res;
	}
};

export const allPhysioOnDashBoard = async (data: FormData) => {
	const res = instance.get("physio", {
		params: {
			page: data.get("page") || 1,
			serviceType: data.get("serviceType"),
			planName: data.get("planName"),
			accountStatus: data.get("accountStatus"),
			searchText: data.get("searchText"),
		},
	});
	return res;
};

export const getApprovedPhysios = async (
	page = 1,
	searchText = "",
	planName = "",
	startDate = "",
	endDate = "",
	serviceType = ""
) => {
	try {
		const res = await instance.get("physio/getApprovedPhysios", {
			params: {
				searchText,
				planName,
				startDate,
				endDate,
				serviceType,
				page,
			},
		});
		return res;
	} catch (error) {
		console.error("Error fetching approved physios:", error);
		throw error;
	}
};

export const getUnapprovedPhysios = async (
	page = 1,
	searchText = "",
	planName = "",
	startDate = "",
	endDate = "",
	serviceType = ""
) => {
	try {
		const res = await instance.get("physio/getUnapprovedPhysios", {
			params: {
				searchText,
				planName,
				startDate,
				endDate,
				serviceType,
				page,
			},
		});
		return res;
	} catch (error) {
		console.error("Error fetching unapproved physios:", error);
		throw error;
	}
};

export const getSinglePhysioById = async (physioId: string) => {
	try {
		const res = await instance.get("physio/getPhysio", {
			params: {
				physioId,
			},
		});
		return res;
	} catch (error) {
		console.error("Error fetching approved physios:", error);
		throw error;
	}
};

export const getSubscriptionByPhysioId = async (physioId: string) => {
	try {
		const res = await instance.get("subscription/physio", {
			params: {
				physioId,
			},
		});
		return res;
	} catch (error) {
		console.error("Error fetching approved physios:", error);
		throw error;
	}
};
