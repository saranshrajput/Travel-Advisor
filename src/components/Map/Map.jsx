import {React, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import{Paper, StepButton, Typography, useMediaQuery} from '@material-ui/core';
import LocationOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import useStyles from './styles';
import Rating from '@material-ui/lab/Rating';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootStrapKeys={{key:'AIzaSyA15A3ClKRiDxcsGAvbhXVJWIim_AO9K40'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat, lng:e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw});
                }}
                onChildClick={(_hoverKey, child)=>setChildClicked(child)}
            >
                {places?.map((place, i)=>(
                    <div
                        classname={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {!matches?(
                            <LocationOutlineIcon color="primary" fontsize="large"/>
                        ):(
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="subtitle" className={classes.typography} gutterBottom>
                                    {place.name}
                                </Typography>
                                <img className={classes.pointer} src={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                alt={place.name}/>
                                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};
export default Map;