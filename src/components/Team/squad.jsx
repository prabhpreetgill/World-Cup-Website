import {Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import PlayerSort from "./ApiPlayerSort";
import PlayerCard from "./playerCard";



export default function Stats() {

  const teamCode = useParams()
  const team = teamCode.id
  const url = "https://api.fifa.com/api/v3/teams/"+team+"/squad?idCompetition=17&idSeason=255711&language=en"

  const { goalies, defenders, midfielders, forwards } = PlayerSort(url);

  const goalieCards = PlayerCard(goalies);
  const defenderCards = PlayerCard(defenders);
  const midfielderCards = PlayerCard(midfielders);
  const forwardCards = PlayerCard(forwards)


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
