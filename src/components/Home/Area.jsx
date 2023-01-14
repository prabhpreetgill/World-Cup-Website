import {Typography } from "@mui/material";
import { Box} from "@mui/system";
import Trophy from "../../Pictures/wc-trophy.png"
import Grid from '@mui/material/Unstable_Grid2'; 
import React from "react";

// The home page display that has the world cup logo and says WELCOME TO THE 2022 WORLD CUP WEBSITE
function Area () {
    return(
        <Grid container  sx={{position: "fixed", display: "flex", justifyContent: "center", width: "100%", height: {xs: "90%", sm: "90%", md:"93%", lg: "91%"}, alignItems:"center", flexDirection: "column", backgroundColor: "black"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                <Box component="img" src={Trophy} alt="WC Logo" sx={{maxWidth: {xs: "100%", md: "80%", lg: "70%"}}}/>
                <Typography textAlign="center" sx={{color: "rgba(255,250,250,0.3)", fontSize: {xs: "2.2rem",sm:"3.5rem", xl: "5rem"}}}>Welcome to the 2022 World Cup Website</Typography>
            </div>
        </Grid>
)};

export default Area;