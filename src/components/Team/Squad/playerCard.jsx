import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// A function that creates a card for a player after inputing their position
export default function playerCard(position) {
  return position?.map((player) => (
    <Box
      sx={{
        mx: "30px",
        maxWidth: "auto",
        my: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={player?.IdPlayer}
    >
      <Box
        component="img"
        src={player.PlayerPicture.PictureUrl}
        alt="player-pic"
        sx={{ width: "300px" }}
      />
      <Grid2>
      <Typography textAlign={"center"} sx={{ fontSize: "2rem" }}>
        {player?.PlayerName[0].Description}
      </Typography>
      <hr />
      <Typography variant="h6" textAlign={"center"}>
        {player?.PositionLocalized[0].Description}
      </Typography>
      </Grid2>
    </Box>
  ));
}
