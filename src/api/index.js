import axios from "axios";

const apiUrl =
	"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaceData = async (sw, ne) => {
	try {
		const options = {
			params: {
				bl_latitude: sw.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
				tr_latitude: ne.lat,
			},
			headers: {
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				"X-RapidAPI-Key": "5f1b73e93dmsh9fde8d949a94ebep13f58cjsn43da5cd00524",
			},
		};
		const {
			data: { data },
		} = await axios.get(apiUrl, options);
		return data;
	} catch (error) {
		console.log(error);
	}
};
