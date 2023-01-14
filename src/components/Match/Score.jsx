import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { upperCase } from "lodash";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useParams } from "react-router-dom";
import ApiData from "../Shortcuts/ApiData"


export default function Score() {

    const {id} = useParams()

    const fLink = "https://api.fifa.com/api/v3/live/football/17/255711/285073/" 
    const sLink = "??language=en"
    const url = fLink + id + sLink

    const { data, loading } = ApiData(url)
    const homeGoals = (data?.HomeTeam?.Goals);
    const awayGoals = (data?.AwayTeam?.Goals);

    const homePlayers = data?.HomeTeam?.Players;
    const awayPlayers = data?.AwayTeam?.Players;

    let i = 0;
    
    const homeGoalScorers = [];
    const homePlay = [];

    const awayGoalScorers = [];
    const awayPlay = [];

    if(!loading) {
        homeGoals?.map(goal => 
            homeGoalScorers.push({
                id: goal.IdPlayer,
                min: goal.Minute
            }));
        
        homePlayers.map(player => {
            homePlay.push({
                id: player.IdPlayer,
                name: player.PlayerName[0].Description   
            })
        })

        for (let j = 0; j<homePlay.length; j++){
            if (i<homeGoalScorers.length && homePlay[j].id == homeGoalScorers[i].id){
                homeGoalScorers[i].id = homePlay[j].name
                j = 0;
                i++
            }
        }

        i = 0;

        awayGoals?.map(goal => 
            awayGoalScorers.push({
                id: goal.IdPlayer,
                min: goal.Minute
            }));
        
        awayPlayers.map(player => {
            awayPlay.push({
                id: player.IdPlayer,
                name: player.PlayerName[0].Description   
            })
        })

        for (let j = 0; j<awayPlay.length; j++){
            if (i<awayGoalScorers.length && awayPlay[j].id == awayGoalScorers[i].id){
                awayGoalScorers[i].id = awayPlay[j].name
                j = 0;
                i++
            }
        }

    }

    if(data?.HomeTeam?.Score === data?.AwayTeam?.Score && data?.GroupName[0]?.Description == null){
        return (
            <Grid2 sx={{backgroundColor: "rgba(255,250,250,0.5)", py: 5}}>
                <Typography textAlign="center" sx={{fontSize: {xs: "1.5rem", sm: "2rem", md: "3rem"}, pb: 5}}>Match</Typography>
                <Grid2 sx={{display: "flex", justifyContent: "space-between", mx: "5%"}}>
                    <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.StageName[0]?.Description}  {data?.GroupName[0]?.Description}</Typography>
                    <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.Date.slice(0,10)}</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", mt: "5%", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "30%", justifyContent: "center"}}>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2.5rem"}, pr: "5%"}}>{upperCase(data?.HomeTeam?.ShortClubName)}</Typography>
                        <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {md:"67px", sm:"50px", xs: "27px"}, width: {xs: "40px", sm: "75px", md: "100px"}  ,border: {xs:"1px solid black", sm: "2px solid black"}}}></Box>
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs: "0.8rem", sm:"1rem", md: "1.5rem"}}}>({data?.HomeTeamPenaltyScore})</Typography>                    
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2rem"}}}>{data?.HomeTeam?.Score} - {data?.AwayTeam?.Score}</Typography>
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs: "0.8rem", sm:"1rem", md: "1.5rem"}}}>({data?.AwayTeamPenaltyScore})</Typography>                    
                    </Grid2>
                    <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "30%", justifyContent: "center"}}>
                        <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {md:"67px", sm:"50px", xs: "27px"}, width: {xs: "40px", sm: "75px", md: "100px"}  ,border: {xs:"1px solid black", sm: "2px solid black"}}}></Box>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2.5rem"}, pl: "5%"}}>{upperCase(data?.AwayTeam?.ShortClubName)}</Typography>
                    </Grid2>                    
                </Grid2>
                 <Grid2 sx={{mt:"3%"}}>
                    <Typography textAlign="center" sx={{fontSize: {xs: "0.7rem", sm:"1.3rem", md: "2rem"}}}>FINAL ON PENALITES</Typography>
                </Grid2>
                <Grid2 sx={{mt: "3%", display: "flex", justifyContent: "center"}}>
                    <Typography textAlign={"center"} sx={{p: 1, backgroundColor: "#395B64", width: {xs:"20%" ,md:"10%"}, color: "white", borderRadius: "20px", fontSize: {xs:"0.5rem", sm:"1rem", md: "1.5rem" }}}>FULL TIME</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", justifyContent: "space-evenly", mt: "2%"}}>
                    <Grid2 sx={{width: "40%"}}>
                        {homeGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "right", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <Typography sx={{pr: 1, fontSize: {xs: "0.7rem", md: "1rem"}}}>{name.min}</Typography>
                            <Typography sx={{pr: 2, fontSize: {xs: "0.8rem", sm: "1.2rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <SportsSoccerIcon sx={{fontSize: {xs: "1.2rem"}}}/>
                        </Grid2>
                        ))}
                    </Grid2>
                    <Grid2  Grid2 sx={{width: "40%"}}>
                        {awayGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "left", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <SportsSoccerIcon sx={{fontSize: {xs: "1.2rem"}}}/>
                            <Typography sx={{pl: 2, fontSize: {xs: "0.8rem", sm: "1.2rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <Typography sx={{pl: 1, fontSize: {xs: "0.7rem", md: "1rem"}}}>{name.min}</Typography>
                        </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
    )} else {
        return (
            <Grid2 sx={{backgroundColor: "rgba(255,250,250,0.5)", py: 5}}>
                    <Typography textAlign="center" sx={{fontSize: {xs: "1.5rem", sm: "2rem", md: "3rem"}, pb: 3}}>Match</Typography>
                <Grid2 sx={{display: "flex", justifyContent: "space-between", mx: "5%"}}>
                    <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.StageName[0]?.Description}  {data?.GroupName[0]?.Description}</Typography>
                    <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.Date.slice(0,10)}</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", mt: "5%", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "30%", justifyContent: "center"}}>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2.5rem"}, pr: "5%"}}>{upperCase(data?.HomeTeam?.ShortClubName)}</Typography>
                        <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {md:"67px", sm:"50px", xs: "27px"}, width: {xs: "40px", sm: "75px", md: "100px"}  ,border: {xs:"1px solid black", sm: "2px solid black"}}}></Box>
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2rem"}}}>{data?.HomeTeam?.Score} - {data?.AwayTeam?.Score}</Typography>
                    </Grid2>
                    <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "30%", justifyContent: "center"}}>
                        <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {md:"67px", sm:"50px", xs: "27px"}, width: {xs: "40px", sm: "75px", md: "100px"}  ,border: {xs:"1px solid black", sm: "2px solid black"}}}></Box>
                        <Typography sx={{fontSize: {xs:"1rem", sm:"1.5rem", md:"2.5rem"}, pl: "5%"}}>{upperCase(data?.AwayTeam?.ShortClubName)}</Typography>
                    </Grid2>                    
                </Grid2>
                <Grid2 sx={{mt: "3%", display: "flex", justifyContent: "center"}}>
                    <Typography textAlign={"center"} sx={{p: 1, backgroundColor: "#395B64", width: {xs:"20%" ,md:"10%"}, color: "white", borderRadius: "20px", fontSize: {xs:"0.5rem", sm:"1rem", md: "1.5rem" }}}>FULL TIME</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", justifyContent: "space-evenly", mt: "2%"}}>
                    <Grid2 sx={{width: "40%"}}>
                        {homeGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "right", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <Typography sx={{pr: 1, fontSize: {xs: "0.7rem", md: "1rem"}}}>{name.min}</Typography>
                            <Typography sx={{pr: 2, fontSize: {xs: "0.8rem", sm: "1.2rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <SportsSoccerIcon sx={{fontSize: {xs: "1.2rem"}}}/>
                        </Grid2>
                        ))}
                    </Grid2>
                    <Grid2  Grid2 sx={{width: "40%"}}>
                        {awayGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "left", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <SportsSoccerIcon sx={{fontSize: {xs: "1.2rem"}}}/>
                            <Typography sx={{pl: 2, fontSize: {xs: "0.8rem", sm: "1.2rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <Typography sx={{pl: 1, fontSize: {xs: "0.7rem", md: "1rem"}}}>{name.min}</Typography>
                        </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
    )}
}