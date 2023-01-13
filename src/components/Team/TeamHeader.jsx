import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "../ApiData";
import DecorationValue from "./DecorationValue";

export default function Header() {
  const teamCode = useParams();
  const team = teamCode.id;
  const decoration = DecorationValue();
  const url =
    "https://api.fifa.com/api/v3/teams/" +
    team +
    "/squad?idCompetition=17&idSeason=255711&language=en";

  let link = "";

  Array.from(decoration, ([key, value]) => {
    if (team == key) {
      link = value;
    }
  });

  const { data } = ApiData(link);
  const dec = data?.decorationLogo;
  const theme = data?.theme;
  const bg = theme?.backgroundColor;

  const { data: name } = ApiData(url);
  const short = name?.IdCountry;
  const fLink = "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/";
  const sLink = "?tx=c_fill,g_auto,q_auto";

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
            src={fLink + short + sLink}
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
