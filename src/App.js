import { React, useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlaceData } from "./api";

const App = () => {
	const [place, setPlace] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});
	const [childClicked, setChildCliked] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);
	useEffect(() => {
		getPlaceData(bounds.sw, bounds.ne).then((data) => {
			setPlace(data);
		});
	}, [coordinates, bounds]);
	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List places={place} childClicked={childClicked} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
						places={place}
						setChildClicked={setChildCliked}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
