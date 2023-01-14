import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TeamNav from "../TeamNav";
import TeamHeader from "../TeamHeader"
import FixtureCard from "./FixtureCard";

export default function TeamFixtureView() {

      return (
        <Grid2 sx={{}}>
          <TeamHeader />
          <TeamNav />
          <FixtureCard />
        </Grid2>
      );
  }


