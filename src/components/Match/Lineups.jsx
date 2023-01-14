import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import ApiData from "../Shortcuts/ApiData"

export default function Lineups() {

    const {id} = useParams()

    const fLink = "https://api.fifa.com/api/v3/live/football/17/255711/285073/" 
    const sLink = "??language=en"
    const url = fLink + id + sLink

    const { data, loading } = ApiData(url)

    const homePlayers = data?.HomeTeam?.Players;
    const awayPlayers = data?.AwayTeam?.Players;

    const homeStarters = [];
    const awayStarters = [];

    let homeCoach = {};
    let awayCoach = {};

    if(!loading) {

        for(let j = 0; j<11; j++) {
            homeStarters.push(homePlayers[j])
        }

        for(let j = 0; j<11; j++) {
            awayStarters.push(awayPlayers[j])
        }

        data?.HomeTeam?.Coaches?.map(coach => {
            if (coach?.Role == 0){
                homeCoach ={
                    name: coach?.Name[0]?.Description,
                    pic:  coach?.PictureUrl
                }
            }
        })

        data?.AwayTeam?.Coaches?.map(coach => {
            if (coach?.Role == 0){
                awayCoach = {
                    name: coach?.Name[0]?.Description,
                    pic:  coach?.PictureUrl
                }
            }
        })

    }

    return (
        <Grid2 sx={{backgroundColor: "rgba(0,0,0,0.2)", py: 5}}>
            <Typography textAlign="center" sx={{fontSize: {xs: "1.5rem", sm: "2rem", md: "3rem"}, pb: 5}}>Line Ups</Typography>
            <Grid2 container sx={{display: "flex", justifyContent: "center"}}>
                <Grid2 sx={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", mx: 4}}>
                <Grid2 sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                        <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {sm:"67px", xs:"33.5px"}, width: {xs: "50px", sm: "100px"}  ,border: "2px solid black"}}></Box>
                        <Typography sx={{fontSize: "1.5rem", pb: 2}}>{data?.HomeTeam?.Tactics}</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(255,250,250,0.7)", borderRadius: "10px"}}>
                    {homeStarters?.map(player => (
                    <Grid2 sx={{display: "flex", width: "350px", alignItems: "center", my: "1%", p: 1, justifyContent: "center"}}>
                        <Box component="img" src={player?.PlayerPicture?.PictureUrl} sx={{mr: 1 ,height: {sm:"45px", xs: "30px"}, width: {xs: "20px",sm: "30px"}}}></Box>
                        <Typography sx={{mr: 2}}>{player?.ShirtNumber}</Typography>
                        <Typography>{player?.PlayerName[0].Description}</Typography>
                    </Grid2>
                    ))}
                    <Typography fontSize="1.5rem" sx={{mt: 2}}>Head Coach</Typography>
                    <Grid2 sx={{display: "flex", flexDirection: "row", alignItems: "center", mb: 2}}>
                        <Box component="img" src={homeCoach.pic} sx={{mr: 1 ,height: {sm:"45px", xs: "30px"}, width: {xs: "20px",sm: "30px"}}}></Box>
                        <Typography>{homeCoach.name}</Typography>
                    </Grid2>
                </Grid2>
                </Grid2>
                <Grid2 sx={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", mx: 4, my: 4}}>
                    <Grid2 sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {sm:"67px", xs:"33.5px"}, width: {xs: "50px", sm: "100px"}  ,border: "2px solid black"}}></Box>
                        <Typography sx={{fontSize: "1.5rem", pb: 2}}>{data?.AwayTeam?.Tactics}</Typography>
                    </Grid2>
                    <Grid2 sx={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(255,250,250,0.7)", borderRadius: "10px"}}>
                    {awayStarters?.map(player => (
                        <Grid2 sx={{display: "flex", width: "350px", alignItems: "center", my: "1%", p: 1, justifyContent: "center"}}>
                            <Box component="img" src={player?.PlayerPicture?.PictureUrl} sx={{mr: 1 ,height: {sm:"45px", xs: "30px"}, width: {xs: "20px",sm: "30px"}}}></Box>
                            <Typography sx={{mr: 2}}>{player?.ShirtNumber}</Typography>
                            <Typography>{player?.PlayerName[0].Description}</Typography>
                        </Grid2>
                    ))}
                    <Typography fontSize="1.5rem" sx={{mt: 2}}>Head Coach</Typography>
                    <Grid2 sx={{display: "flex", flexDirection: "row", alignItems: "center", mb: 2}}>
                        <Box component="img" src={awayCoach.pic} sx={{mr: 1 ,height: {sm:"45px", xs: "30px"}, width: {xs: "20px",sm: "30px"}}}></Box>
                        <Typography>{awayCoach.name}</Typography>
                    </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}