import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TeamHeader from "../TeamHeader";
import TeamNav from "../TeamNav";
import OrganizeStats from "./OrganizeStats";

export default function Stats() {
  return (
    <>
      <TeamHeader />
      <TeamNav />
      <Grid2
        container
        sx={{
          height: "80%",
          mx: "5%",
          my: "3%",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "column"
        }}
      >
        <Typography fontSize="3rem" sx={{ pb: 3 }}>
          Stats
        </Typography>
      </Grid2>
      <OrganizeStats />
    </>
  );
}
