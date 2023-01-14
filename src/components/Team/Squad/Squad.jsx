import {Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "./playerCard";
import ApiPlayerSort from "./ApiPlayerSort";


// Pages is shown on website for each teams squad
export default function Squad() {

  // Assigns const team the current team id using function useParams()
  const teamCode = useParams()
  const team = teamCode.id

  // Creates a const url using the team id 
  const url = "https://api.fifa.com/api/v3/teams/"+team+"/squad?idCompetition=17&idSeason=255711&language=en"

  // Players in each position are sorted and assigned in const goalies, defenders, midfielders, forwards using the ApiPlayerSort function with the url created above
  const { goalies, defenders, midfielders, forwards } = ApiPlayerSort(url);

  // Cards for each player in each position are created using the PlayerCard function and inputing the posision of Players
  const goalieCards = PlayerCard(goalies);
  const defenderCards = PlayerCard(defenders);
  const midfielderCards = PlayerCard(midfielders);
  const forwardCards = PlayerCard(forwards)

  // Retun position header then the all players for that position
  return (
    <>
      <Grid2>
      <div>
        <Typography variant="h2" textAlign={"center"} sx={{ my: "2%" }}>
          Goalies
        </Typography>
        <Grid2 container sx={{ display: "flex", justifyContent: "center", mx: "5%"}}>
          {goalieCards.map((goalie) => goalie)}
        </Grid2>
        </div>
        <div>
        <Typography variant="h2" textAlign={"center"} sx={{ my: "2%" }}>
          Defenders
        </Typography>
        <Grid2 container sx={{ display: "flex", justifyContent: "center", mx: "5%"}}>
          {defenderCards.map((defender) => defender)}
        </Grid2>
        </div>
        <div>
        <Typography variant="h2" textAlign={"center"} sx={{ my: "2%" }}>
          Midfelders
        </Typography>
        <Grid2 container sx={{ display: "flex", justifyContent: "center", mx: "5%"}}>
          {midfielderCards.map((goalie) => goalie)}
        </Grid2>
        </div>
        <div>
        <Typography variant="h2" textAlign={"center"} sx={{ my: "2%" }}>
          Forwards
        </Typography>
        <Grid2 container sx={{ display: "flex", justifyContent: "center", mx: "5%"}}>
          {forwardCards.map((goalie) => goalie)}
        </Grid2>
        </div>
      </Grid2>
    </>

  );
}
