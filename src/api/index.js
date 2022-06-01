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
				"X-RapidAPI-Key": "d066935f9cmsh1e38bf9abc61fcbp11c97ajsn09af4d85ef6f",
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
