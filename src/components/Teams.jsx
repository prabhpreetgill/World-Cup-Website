import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ApiData from "./ApiData";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Shortcuts/PageHeader"

export default function Home() {

  const { data } = ApiData(
    "https://api.fifa.com/api/v3/competitions/teams/255711?language=en"
  );
  const name = data?.Results;

  const fLink = "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/";
  const sLink = "?tx=c_fill,g_auto,q_auto,w_227,h_150";

  return(
    <>
      {Header("Teams")}
      <Grid2
        container
        sx={{
          height: "80%",
          mx: "5%",
          my: "2%",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        {name?.map((team) => (
          <Box key={team.IdTeam} sx={{ mx: 5, my: 3 }}>
            <Link to={"/teams/"+ team.IdTeam}>
              <Box
                key={team.IdTeam}
                component="img"
                src={fLink + team.IdCountry + sLink}
                alt="country-flag"
                sx={{ border: "5px solid #395B64", cursor: "pointer" }}
                id={team.IdTeam}
              />
            </Link>
            <Typography
              sx={{
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "500",
                cursor: "default",
              }}
            >
              {team.ShortClubName}
            </Typography>
          </Box>
        ))}
      </Grid2>
    </>
  );

}
