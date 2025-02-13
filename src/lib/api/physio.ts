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

export const allPhysioOnDashBoard = async (page=1,serviceType,planName,listaccountStatus,searchText) => {
	const res = instance.get("admin/physio", {
		params: {
            page,
            serviceType,
            planName,
            listaccountStatus,
            searchText
        },
	});
	return res;
};
