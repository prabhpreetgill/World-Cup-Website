import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ApiData from ".././ApiData";
import { useParams } from "react-router-dom";
import FixtureResult from "./FixtureResult";

export default function FixtureCard() {

  return (
    <>
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
        <FixtureResult />
      </Grid2>
    </>
  );
}
