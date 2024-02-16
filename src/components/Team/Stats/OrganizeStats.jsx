import { whichStats } from "./WhichStats";
import ApiData from "../../Shortcuts/ApiData";
import { camelCase } from "lodash";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useParams } from "react-router-dom";

export default function OrganizeStats() {

  // const team is the team id of the current team
  const teamCode = useParams();
  const team = teamCode.id;

  // Url created using the team id
  const url = "https://api.fifa.com/api/v3/teams/" + team + "?language=en";

  // Team data is saved on to const name using ApiData function with url
  const { data: name } = ApiData(url);

  // A const short contains the teams abbreviation [example: (Argentina => ARG)]
  const short = name?.IdAssociation;


  // Labels for each stat is called using the ApiData function and is saved to const data
  const { data, loading } = ApiData(
    "https://cxm-api.fifa.com/fifaplusweb/api/teamPage/data/3uzDFvYAUxPUDsunCtmkY6?locale=en"
  );

  // statistical values are saved to const values
  const { data: values, loading: load } = ApiData(
    "https://fdh-api.fifa.com/v1/stats/season/255711/team/"+team+".json"
  );

  // Initializing arrays label and steet
  const label = [];
  const steet = [];

  let i = 0;

  // Pushing all stats that have the same heading as whichStats into steet in the order of whichStats
    if (!load) {
        for (let j = 0; j < values.length; j++) {
        if (whichStats[i] === values[j][0]) {
          i++
          steet.push(values[j][1]);
          j = 0;
        }
      };
    }

  // Pushing each stat label from data (which contains the labels of all stats) into label array
  whichStats?.map((stat) => {
    if (!loading) {
      label.push(data[camelCase(stat) + "Label"]);
    }
  });

  // Initialize const dis
  const dis = [];

  // Create an object array that has keys label, and value
  if (steet.length !== 0) {
    for (let i = 0; i < steet.length; i++) {
      dis.push({
        label: label[i],
        value: steet[i],
      });
    }
  }

  // return the label and value onto a card
  return (
    <>
      <Grid2
        container
        sx={{
          height: "80%",
          mx: "2%",
          my: "2%",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        {dis.map((dee) => (
          <Grid2
            sx={{
              minWidth: { xs: "350px", sm: "400px" },
              borderRadius: "30px",
              m: 3,
              backgroundColor: "rgba(255,250,250,0.6)",
              cursor: "pointer",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              p: 4
            }}
          >
            <Grid2 sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", pb: 3}}>
            <Typography fontSize="1.5rem">{short}</Typography>
            <Box
              component="img"
              src={
                "https://api.fifa.com/api/v3/picture/flags-sq-4/" +
                short
              }
              alt="country-flag"
              sx={{
                border: "2px solid #395B64",
                height: "33.5px",
                mr: "5px",
              }}
            />
            </Grid2>
            <Typography fontSize="2.5rem" color="#ff6961">{dee.value}</Typography>
            <Typography fontSize="1.5rem">{dee.label}</Typography>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
