import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ApiData from "../ApiData";
import { Link } from "react-router-dom";

export default function Match(url) {
  const { data } = ApiData(url);
  const result = data;

  const rees = () => {
    if (
      result?.HomeTeam?.Score === result?.AwayTeam?.Score &&
      result?.GroupName[0]?.Description == null
    ) {
      return (
        <>
          <Link
            to={"/fixtures/" + result?.IdMatch}
            style={{ color: "black", textDecoration: "none" }}
            key={result?.IdMatch}
          >
            <Grid2
              sx={{
                minWidth: { xs: "90%", sm: "90%" },
                m: 2,
                borderRadius: "30px",
                backgroundColor: "rgba(255,250,250,0.6)",
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              key={result?.IdMatch}
            >
              <Grid2 sx={{ px: 3 }}>
                <Grid2>
                  <Grid2
                    sx={{
                      py: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" +
                          result?.HomeTeam?.Abbreviation +
                          "?tx=c_fill,g_auto,q_auto,w_30"
                        }
                        alt="country-flag"
                        sx={{
                          border: "2px solid #395B64",
                          height: "20px",
                          mr: "5px",
                        }}
                      />
                      <Typography
                        sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}
                      >
                        {result?.HomeTeam?.Abbreviation}
                      </Typography>
                    </Grid2>
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mr: { sm: "2%", xs: "3%" },
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}>
                        ({result?.HomeTeamPenaltyScore})
                      </Typography>
                      <Typography 
                      sx={{fontSize: {xs:"1.5rem", xl:"2rem"}}}
                      >
                        {result?.HomeTeam.Score}
                      </Typography>
                    </Grid2>
                  </Grid2>
                  <Grid2
                    sx={{
                      py: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" +
                          result?.AwayTeam?.Abbreviation +
                          "?tx=c_fill,g_auto,q_auto,w_30"
                        }
                        alt="country-flag"
                        sx={{
                          border: "2px solid #395B64",
                          height: "20px",
                          mr: "5px",
                        }}
                      />
                      <Typography
                        sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}>
                        {result?.AwayTeam?.Abbreviation}
                      </Typography>
                    </Grid2>
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mr: { sm: "2%", xs: "3%"},
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}>
                        ({result?.AwayTeamPenaltyScore})
                      </Typography>
                      <Typography 
                      sx={{fontSize: {xs:"1.5rem", xl:"2rem"}}}
                      >                        
                      {result?.HomeTeam.Score}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
                <Typography textAlign="center"
                        sx={{ fontSize: { xs: "0.8rem", xl: "1rem" }, mr: 1 }}                      
                >
                FINAL ON PENALITES</Typography>
              </Grid2>
            </Grid2>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            to={"/fixtures/" + result?.IdMatch}
            style={{ color: "black", textDecoration: "none" }}
            key={result?.IdMatch}
          >
            <Grid2
              sx={{
                minWidth: { xs: "90%", sm: "90%" },
                borderRadius: "30px",
                m: 2,
                backgroundColor: "rgba(255,250,250,0.6)",
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              key={result?.IdMatch}
            >
              <Grid2 sx={{ px: 3 }}>
                <Grid2>
                  <Grid2
                    sx={{
                      py: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" +
                          result?.HomeTeam?.Abbreviation +
                          "?tx=c_fill,g_auto,q_auto,w_30"
                        }
                        alt="country-flag"
                        sx={{
                          border: "2px solid #395B64",
                          height: "20px",
                          mr: "5px",
                        }}
                      />
                      <Typography
                        sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}                      
                      >
                        {result?.HomeTeam?.Abbreviation}
                      </Typography>
                    </Grid2>
                    <Typography 
                      sx={{fontSize: {xs:"1.5rem", xl:"2rem"}}}
                      >                      
                      {result?.HomeTeam.Score}
                    </Typography>
                  </Grid2>
                  <Grid2
                    sx={{
                      py: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid2
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/" +
                          result?.AwayTeam?.Abbreviation +
                          "?tx=c_fill,g_auto,q_auto,w_30"
                        }
                        alt="country-flag"
                        sx={{
                          border: "2px solid #395B64",
                          height: "20px",
                          mr: "5px",
                        }}
                      />
                      <Typography
                        sx={{ fontSize: { xs: "1rem", xl: "1.5rem" }, mr: 1 }}                      
                      >
                        {result?.AwayTeam?.Abbreviation}
                      </Typography>
                    </Grid2>
                    <Typography 
                      sx={{fontSize: {xs:"1.5rem", xl:"2rem"}}}
                      >                      
                      {result?.AwayTeam.Score}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Link>
        </>
      );
    }
  };

  return rees();
}
