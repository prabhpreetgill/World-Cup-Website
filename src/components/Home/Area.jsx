import {Typography } from "@mui/material";
import { Box} from "@mui/system";
import Trophy from "../../Pictures/wc-trophy.png"
import Grid from '@mui/material/Unstable_Grid2'; 
import React from "react";

// The home page display that has the world cup logo and says WELCOME TO THE 2022 WORLD CUP WEBSITE
function Area () {
    return(
        <Grid container  sx={{position: "fixed", display: "flex", justifyContent: "center", width: "100%", height: {xs: "90%", sm: "90%", md:"93%", lg: "91%"}, alignItems:"center", flexDirection: "column", backgroundColor: "#FFFBF1"}}>
            <Box sx ={{display: "flex", flexDirection: {xs:'column', md: 'row'}, alignItems:"center", justifyContent:"center"}}>
                <div >
                    <Box component="img" src={Trophy} alt="WC Logo" sx={{maxHeight: {xs: "40vh", md: "60vh", lg: "80vh"}}}/>
                </div>
                <div>
                    <Typography textAlign="center" sx={{color: "black", fontSize: {xs: "2.2rem",sm:"3.5rem", xl: "5rem"},  fontWeight: 'bold', }}>2022 <br/> FIFA WORLD CUP <br/>TRACKER </Typography>
                </div>
            </Box>
        </Grid>
)};

export default Area;