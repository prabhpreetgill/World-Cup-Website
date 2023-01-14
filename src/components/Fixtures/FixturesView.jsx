import React from "react";
import AllMatch from "./AllMatch";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography } from "@mui/material";
import PageHeader from "../Shortcuts/PageHeader";

export default function FixturesView() {
  return (
    <>
      {PageHeader("Fixtures")}
      <Grid2
        container
        sx={{
          height: "80%",
          mx: "5%",
          my: "3%",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            mt: 4,
            borderBottom: "2px solid black",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 0px",
          }}
        >
          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: "2rem", sm: "2.7rem" } }}
          >
            2022-11-20
          </Typography>
        </Box>
        <AllMatch />
      </Grid2>
    </>
  );
}
