import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "../ApiData"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { upperCase } from "lodash";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export default function Match() {

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

    const homeStarters = [];
    const awayStarters = [];

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

        for(let j = 0; j<11; j++) {
            homeStarters.push(homePlayers[j])
        }

        for(let j = 0; j<11; j++) {
            awayStarters.push(awayPlayers[j])
        }

    }

    let match = () => {
        if(data?.HomeTeam?.Score === data?.AwayTeam?.Score && data?.GroupName[0]?.Description == null){
            return(
                <Grid2>
                    <Grid2 sx={{display: "flex", mt: "5%", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "20%"}}>
                            <Typography sx={{fontSize: {xs:"1rem" ,md:"2rem"}, pr: "5%"}}>{upperCase(data?.HomeTeam?.ShortClubName)}</Typography>
                            <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs: "0.8rem", md: "1.5rem"}}}>({data?.HomeTeamPenaltyScore})</Typography>                    
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs:"1rem" ,md:"2rem"}}}>{data?.HomeTeam?.Score} - {data?.AwayTeam?.Score}</Typography>
                    </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs: "0.8rem", md: "1.5rem"}}}>({data?.AwayTeamPenaltyScore})</Typography>                    
                    </Grid2>
                    <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "20%"}}>
                    <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        <Typography sx={{fontSize: {xs:"1rem" ,md:"2rem"}, pl: "5%"}}>{upperCase(data?.AwayTeam?.ShortClubName)}</Typography>
                    </Grid2>                    
                </Grid2>
                <Grid2 sx={{mt:"3%"}}>
                    <Typography textAlign="center" sx={{fontSize: {xs: "1rem", md: "2rem"}}}>FINAL FROM PENALITES</Typography>
                </Grid2>
                <Grid2 sx={{mt: "3%", display: "flex", justifyContent: "center"}}>
                    <Typography textAlign={"center"} sx={{p: 1, backgroundColor: "#395B64", width: {xs:"15%" ,md:"10%"}, color: "white", borderRadius: "20px", fontSize: {xs:"0.5rem", md: "1.5rem" }}}>FULL TIME</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", justifyContent: "space-evenly", mt: "2%"}}>
                <Grid2 sx={{width: "40%"}}>
                    {homeGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "right", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <Typography sx={{pr: 1, fontSize: {xs: "0.5rem", md: "1rem"}}}>{name.min}</Typography>
                            <Typography sx={{pr: 2, fontSize: {xs: "0.5rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <SportsSoccerIcon />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 sx={{width: "40%"}}>
                    {awayGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "left", alignItems:"center", pb: "2%", opacity: "0.7"}}>
                            <SportsSoccerIcon />
                            <Typography sx={{pl: 2, fontSize: {xs: "0.5rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <Typography sx={{pl: 1, fontSize: {xs: "0.5rem", md: "1rem"}}}>{name.min}</Typography>
                        </Grid2>
                    ))}
                </Grid2>
                </Grid2>
                <Typography textAlign="center" sx={{fontSize: {xs: "1rem", md: "2rem"}, mt: "2%"}}>Line Ups</Typography>
                <Grid2 container sx={{display: "flex", justifyContent: "center"}}>
                    <Grid2 sx={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", mx: 4}}>
                        <Grid2 sx={{display: "flex", justifyContent: "center"}}>
                            <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        </Grid2>
                        <Grid2 sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Typography sx={{fontSize: "1.5rem", pb: 2}}>{data?.HomeTeam?.Tactics}</Typography>
                        {homeStarters?.map(player => (
                            <Grid2 sx={{display: "flex", backgroundColor: "rgba(255,250,250,0.7)", width: "350px", alignItems: "center", my: "1%", p: 1, borderRadius: "10px"}}>
                                <Box component="img" src={player?.PlayerPicture?.PictureUrl} sx={{mr: 1 ,height: {lg:"45px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "30px"}}}></Box>
                                <Typography sx={{mr: 2}}>{player?.ShirtNumber}</Typography>
                                <Typography>{player?.PlayerName[0].Description}</Typography>
                            </Grid2>
                        ))}
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{width: "350px", display: "flex", flexDirection: "column", justifyContent: "center", mx: 4}}>
                        <Grid2 sx={{display: "flex", justifyContent: "center"}}>
                            <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        </Grid2>
                        <Grid2 sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Typography sx={{fontSize: "1.5rem", pb: 2}}>{data?.AwayTeam?.Tactics}</Typography>
                        {awayStarters?.map(player => (
                            <Grid2 sx={{display: "flex", backgroundColor: "rgba(255,250,250,0.7)", width: "350px", alignItems: "center", my: "1%", p: 1, borderRadius: "10px"}}>
                                <Box component="img" src={player?.PlayerPicture?.PictureUrl} sx={{mr: 1 ,height: {lg:"45px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "30px"}}}></Box>
                                <Typography sx={{mr: 2}}>{player?.ShirtNumber}</Typography>
                                <Typography>{player?.PlayerName[0].Description}</Typography>
                            </Grid2>
                        ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
            )
        } else {
            return (
            <Grid2>
                    <Grid2 sx={{display: "flex", mt: "5%", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "20%"}}>
                            <Typography sx={{fontSize: {xs:"0.7rem" ,md:"2rem"}, pr: "5%"}}>{upperCase(data?.HomeTeam?.ShortClubName)}</Typography>
                            <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.HomeTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        </Grid2>
                    <Grid2>
                        <Typography sx={{fontSize: {xs:"1rem" ,md:"2rem"}}}>{data?.HomeTeam?.Score} - {data?.AwayTeam?.Score}</Typography>
                    </Grid2>
                    <Grid2 sx={{display: "flex", alignItems: "center", flexDirectiom: "row", width: "20%"}}>
                    <Box component="img" src={"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/"+data?.AwayTeam.IdCountry+"?tx=c_fill,g_auto,q_auto,w_100"} sx={{ height: {lg:"67px", sm:"33.5px", xs: "13px"}, width: {xs: "20px", sm: "50px", lg: "100px"}  ,border: "2px solid black"}}></Box>
                        <Typography sx={{fontSize: {xs:"1rem" ,md:"2rem"}, pl: "5%"}}>{upperCase(data?.AwayTeam?.ShortClubName)}</Typography>
                    </Grid2>                    
                </Grid2>
                <Grid2 sx={{mt: "3%", display: "flex", justifyContent: "center"}}>
                    <Typography textAlign={"center"} sx={{p: 1, backgroundColor: "#395B64", width: {xs: "50px", md: "150px"}, color: "white", borderRadius: "20px", fontSize: {xs:"0.8rem", md: "1.5rem" }}}>FULL TIME</Typography>
                </Grid2>
                <Grid2 sx={{display: "flex", justifyContent: "space-evenly", mt: "2%"}}>
                <Grid2 sx={{width: "40%"}}>
                    {homeGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "right", alignItems:"center", pb: "2%"}}>
                            <Typography sx={{pr: 1, fontSize: {xs: "0.5rem", md: "1rem"}}}>{name.min}</Typography>
                            <Typography sx={{pr: 2, fontSize: {xs: "0.5rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <SportsSoccerIcon />
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 sx={{width: "40%"}}>
                    {awayGoalScorers?.map(name => (
                        <Grid2 sx={{display: "flex", justifyContent: "left", alignItems:"center", pb: "2%"}}>
                            <SportsSoccerIcon />
                            <Typography sx={{pl: 2, fontSize: {xs: "0.5rem", md: "1.5rem"}}}>{name.id}</Typography>
                            <Typography sx={{pl: 1, fontSize: {xs: "0.5rem", md: "1rem"}}}>{name.min}</Typography>
                        </Grid2>
                    ))}
                </Grid2>
                </Grid2>
            </Grid2>
            )

        }
    }
    return (
        <>
            <Grid2>
                <Grid2 sx={{mt: 5}}>
                    <Grid2 sx={{display: "flex", justifyContent: "space-between", mx: "8%"}}>
                        <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.StageName[0]?.Description}  {data?.GroupName[0]?.Description}</Typography>
                        <Typography sx={{fontSize: {xs: "1rem", sm: "1.5rem"}, opacity: "0.7"}}>{data?.Date.slice(0,10)}</Typography>
                    </Grid2>
                    <Grid2>
                        {match()}
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}