import { whichStats } from "./WhichStats";
import ApiData from "../../ApiData";
import { camelCase } from "lodash";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useParams } from "react-router-dom";

export default function OrganizeStats() {
  const teamCode = useParams();
  const team = teamCode.id;

  const url = "https://api.fifa.com/api/v3/teams/" + team + "?language=en";

  const { data: name } = ApiData(url);
  const short = name?.IdAssociation;

  const { data, loading } = ApiData(
    "https://cxm-api.fifa.com/fifaplusweb/api/teamPage/data/3uzDFvYAUxPUDsunCtmkY6?locale=en"
  );

  const { data: values, loading: load } = ApiData(
    "https://fdh-api.fifa.com/v1/stats/season/255711/team/43935.json"
  );

  const label = [];
  const steet = [];

  whichStats?.map((stat) => {
    if (!load) {
      values?.map((value) => {
        if (stat == value[0]) {
          steet.push(value[1]);
        }
      });
    }
  });

  whichStats?.map((stat) => {
    if (!loading) {
      label.push(data[camelCase(stat) + "Label"]);
    }
  });

  const dis = [];

  if (steet.length !== 0) {
    for (let i = 0; i < steet.length; i++) {
      dis.push({
        label: label[i],
        value: steet[i],
      });
    }
  }

  console.log(dis);

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
                "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" +
                short +
                "?tx=c_fill,g_auto,q_auto,w_50"
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
