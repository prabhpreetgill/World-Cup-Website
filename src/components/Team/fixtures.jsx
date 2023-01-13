import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "../ApiData";
import TeamNav from "./TeamNav";
import TeamHeader from "./TeamHeader"
import FixtureCard from "./fixtureCard";

export default function Fixtures() {

      return (
        <Grid2 sx={{}}>
          <TeamHeader />
          <TeamNav />
          <FixtureCard />
        </Grid2>
      );
  }


