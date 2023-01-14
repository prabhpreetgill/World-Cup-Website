import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "../Shortcuts/ApiData";
import DecorationValue from "./DecorationValue";


// Function that returns the teams heading art
export default function Header() {

  // const team is the team id obtained from the route parameter
  const teamCode = useParams();
  const team = teamCode.id;

  // const decoration is hash map containing all decoration urls
  const decoration = DecorationValue();

  // url created from team
  const url =
    "https://api.fifa.com/api/v3/teams/" +
    team +
    "/squad?idCompetition=17&idSeason=255711&language=en";

  let link = "";

  // An array that checks if the team id equals the key assigned in the hash map, the link for the heading art is the value of that key
  Array.from(decoration, ([key, value]) => {
    if (team == key) {
      link = value;
    }
  });


  // Using the link obtained above assign the logo, theme and background to const dec, theme, and bg using ApiData function
  const { data } = ApiData(link);
  const dec = data?.decorationLogo;
  const theme = data?.theme;
  const bg = theme?.backgroundColor;

  // Using the URL obtained from the team id create a link for the flag
  const { data: name } = ApiData(url);
  const flag = "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" + name?.IdCountry + "?tx=c_fill,g_auto,q_auto";

  return (
    <>
      <Grid2
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          backgroundColor: bg,
          p: {xs: 3, md:0}
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: { xs: 0, md: 5 },
          }}
        >
          <Box
            src={flag}
            component="img"
            alt="qatar-art"
            width={"100px"}
            height="67px"
            sx={{ mr: 3, border: "2px solid #395B64"}}
          />
          <Typography
            variant="h2"
            sx={{ color: "white", m: 0, p: 0, fontSize: { xs: "2.5rem" } }}
          >
            {data?.title}
          </Typography>
        </Box>
        <Box
          src={dec?.src}
          component="img"
          alt="qatar-art"
          sx={{ display: { xs: "none", md: "flex" } }}
        />
      </Grid2>
    </>
  );
}
