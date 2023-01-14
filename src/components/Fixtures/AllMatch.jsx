import React from "react";
import { Box, Typography } from "@mui/material";
import ApiData from "../Shortcuts/ApiData";
import MatchMaker from "./MatchMaker";

// Returns all the matches that were played in the 2022 FIFA World Cup

export default function AllMatch() {
  // Fetch API Data of all matches using ApiData function
  const { data } = ApiData(
    "https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=255711"
  );

  // Assign the Results to a const results
  const results = data?.Results;

  // Create a const day which is an array of all the days matches were played
  const day = results?.map((match) => match.Date.slice(0, 10));

  // Create a const uniqueDays which removes all reoccuring days and creates an array of unique dates
  var uniqueDays = day?.filter(function (item, pos) {
    return day?.indexOf(item) === pos;
  });

  let i = 0;

  // A function that maps all the matches played
  const rees = () =>
    results?.map((result) => {
      // If the date of the match is not the same as the date of match i, a header with the following date is added, and i is incremented
      if (result.Date.slice(0, 10) !== uniqueDays[i]) {
        i++;
        return (
          <>
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
                {result.Date.slice(0, 10)}
              </Typography>
            </Box>
            {MatchMaker(result)}
          </>
        );
        // Else display the match without adding a date header
      } else {
        return <>{MatchMaker(result)}</>;
      }
    });

  return rees();
}
