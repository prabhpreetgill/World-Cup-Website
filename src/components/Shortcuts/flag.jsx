import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "../ApiData";

export default function Flag(country) {


  const fLink = "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/";
  const sLink = "?tx=c_fill,g_auto,q_auto,w_20"


  return(
    <Box
    src={fLink + country + sLink}
    component="img"
    alt="flag"
    border="1px solid black"
  />
  )
}
