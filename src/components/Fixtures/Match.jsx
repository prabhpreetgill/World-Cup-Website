import React from "react";
import { Box, Typography } from "@mui/material";
import ApiData from "../ApiData";
import MatchMaker from "./MatchMaker";

export default function FixtureResult() {
  const { data } = ApiData(
    "https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=255711"
  );
  const results = data?.Results;

  const day = results?.map((match) => match.Date.slice(0, 10));

  var uniqueDays = day?.filter(function (item, pos) {
    return day?.indexOf(item) === pos;
  });

  console.log(uniqueDays);
  let i = 0;

  const rees = () =>
    results?.map((result) => {
      if (result.Date.slice(0, 10) !== uniqueDays[i]) {
        i++        
        if (
          result?.Home?.Score === result?.Away?.Score &&
          result?.GroupName[0]?.Description == null
        ) {
          return (
            <>
            <Box sx={{width: "100%", mt: 4, borderBottom: "2px solid black", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 0px"}}>
            <Typography textAlign="center" sx={{fontSize: {xs: "2rem", sm: "2.7rem"}}}>{result.Date.slice(0, 10)}</Typography>
            </Box>
              {MatchMaker(result)}
            </>
          );
        } else {
          return (
            <>
            <Box sx={{width: "100%", mt: 4, borderBottom: "2px solid black", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 0px"}}>
            <Typography textAlign="center" sx={{fontSize: {xs: "2rem", sm: "2.7rem"}}}>{result.Date.slice(0, 10)}</Typography>
            </Box>
              {MatchMaker(result)}
            </>
          );
        }
      } else {
        if (
            result?.Home?.Score === result?.Away?.Score &&
            result?.GroupName[0]?.Description == null
          ) {
            return (
              <>
                {MatchMaker(result)}
              </>
            );
          } else {
            return (
              <>
              {MatchMaker(result)}
              </> 
            );
          }
      }
    });

  return rees();
}
