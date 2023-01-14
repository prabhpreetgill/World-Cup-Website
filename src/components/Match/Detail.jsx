import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useParams } from "react-router-dom";
import ApiData from "../Shortcuts/ApiData"


export default function Details() {
    const {id} = useParams()

    const fLink = "https://api.fifa.com/api/v3/live/football/17/255711/285073/" 
    const sLink = "??language=en"
    const url = fLink + id + sLink

    const { data } = ApiData(url)
    return (
        <Grid2 sx={{backgroundColor: "rgba(255,250,250,0.5)", py: 5}}>
            <Typography textAlign="center" sx={{fontSize: {xs: "1.5rem", sm: "2rem", md: "3rem"}, pb: 5}}>Details</Typography>
            <Grid2 container sx={{display: "flex", justifyContent: "space-evenly", alignItems:"center", opacity: "0.7"}}>
                <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"1.8rem"}, px: 4, py: 2}}>Temperature: {data?.Weather?.Temperature + " Degree Celcius"}</Typography>
                <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"1.8rem"}, px: 4, py: 2}}>Weather: {data?.Weather?.TypeLocalized[0]?.Description}</Typography>
                <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"1.8rem"}, px: 4, py: 2}}>Location: {data?.Stadium?.Name[0]?.Description}, {data?.Stadium?.CityName[0]?.Description}</Typography>
                <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"1.8rem"}, px: 4, py: 2}}>Attendance: {data?.Attendance}</Typography>
            </Grid2>
        </Grid2>
    )
}