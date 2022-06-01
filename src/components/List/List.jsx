import {React, useState} from 'react';
import { FormControl, Typography, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places, childClicked}) => {
    const [type, SetType] = useState("restaurants");
    const [rating, SetRating] = useState("");
    const classes = useStyles();
    console.log({childClicked})
    return (
        <div>
            <Typography variant="h4">Restaurants, Hotesls and Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel> Type </InputLabel>
                <Select value = {type} onChange={(e)=>SetType(e.target.value)}>
                    <MenuItem value ="restaurants">Restaurants</MenuItem>
                    <MenuItem value ="hotels">Hotels</MenuItem>
                    <MenuItem value ="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel> Rating </InputLabel>
                <Select value = {rating} onChange={(e)=>SetRating(e.target.value)}>
                    <MenuItem value ="0">All</MenuItem>
                    <MenuItem value ="3">Above 3.0</MenuItem>
                    <MenuItem value ="4">Above 4.0</MenuItem>
                    <MenuItem value ="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={'3'} className={classes.list}>
                {places?.map((place,i)=>(<Grid item key={i} xs={12}>
                    <PlaceDetails place={place}/>
                </Grid>))}
            </Grid>
        </div>
    )
}
export default List;