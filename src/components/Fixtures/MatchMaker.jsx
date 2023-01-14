import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

// Creates a card for each match 

export default function MatchMaker(result) {
    if (
      // If the match is a draw and it is not a group stages match, the function will add penalty scores and display FINAL BY PENALTIES
        result?.Home?.Score === result?.Away?.Score &&
        result?.GroupName[0]?.Description == null
      ) {
        return (
          <>
          <Grid2>
            <Link
              to={"/fixtures/" + result?.IdMatch}
              style={{ color: "black", textDecoration: "none" }}
              key={result?.IdMatch}
            >
              <Grid2
                sx={{
                  minWidth: { xs: "280px", sm: "500px" },
                  m: {xs: 1, sm:4},
                  borderRadius: "30px",
                  backgroundColor: "rgba(255,250,250,0.6)",
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
                key={result?.IdMatch}
              >
                <Grid2 sx={{ p: 3 }}>
                  <Grid2
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>
                      {result?.StageName[0]?.Description}{" "}
                      {result?.GroupName[0]?.Description}
                    </Typography>
                    <Typography>{result?.Date.slice(0, 10)}</Typography>
                  </Grid2>
                  <Typography fontSize="0.8rem">
                    {result?.Stadium?.Name[0]?.Description},{" "}
                    {result?.Stadium?.CityName[0]?.Description}
                  </Typography>
                  <Grid2 sx={{ my: 1 }}>
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
                            result?.Home?.IdCountry +
                            "?tx=c_fill,g_auto,q_auto,w_50"
                          }
                          alt="country-flag"
                          sx={{
                            border: "2px solid #395B64",
                            height: "33.5px",
                            mr: "5px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                            mr: 1,
                          }}
                        >
                          {result?.Home?.TeamName[0]?.Description}
                        </Typography>
                      </Grid2>
                      <Grid2
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          mr: { sm: 5, xs: 1 },
                          alignItems: "center",
                        }}
                      >
                        <Typography fontSize="1.5rem" sx={{ mr: 1.5 }}>
                          ({result?.HomeTeamPenaltyScore})
                        </Typography>
                        <Typography fontSize="2rem">
                          {result?.HomeTeamScore}
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
                            result?.Away?.IdCountry +
                            "?tx=c_fill,g_auto,q_auto,w_50"
                          }
                          alt="country-flag"
                          sx={{
                            border: "2px solid #395B64",
                            height: "33.5px",
                            mr: "5px",
                          }}
                        />
                        <Typography
                          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                        >
                          {result?.Away?.TeamName[0]?.Description}
                        </Typography>
                      </Grid2>
                      <Grid2
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          mr: { sm: 5, xs: 1 },
                          alignItems: "center",
                        }}
                      >
                        <Typography fontSize="1.5rem" sx={{ mr: 1.5 }}>
                          ({result?.AwayTeamPenaltyScore})
                        </Typography>
                        <Typography fontSize="2rem">
                          {result?.HomeTeamScore}
                        </Typography>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Typography textAlign="center">
                    FINAL ON PENALITES
                  </Typography>
                </Grid2>
              </Grid2>
            </Link>
            </Grid2>
          </>
        );
      } else {
        // Else the function will display just the score
        let time = result.Date.slice(11, 16);
        return (
          <>
            <Link
              to={"/fixtures/" + result?.IdMatch}
              style={{ color: "black", textDecoration: "none" }}
              key={result?.IdMatch}
            >
              <Grid2
                sx={{
                  minWidth: { xs: "280px", sm: "500px" },
                  borderRadius: "30px",
                  m: {xs: 1, sm:4},
                  backgroundColor: "rgba(255,250,250,0.6)",
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  p: 3,
                }}
                key={result?.IdMatch}
              >
                  <Grid2
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>
                      {result?.StageName[0]?.Description}{" "}
                      {result?.GroupName[0]?.Description}
                    </Typography>
                    <Typography>{time}</Typography>
                  </Grid2>
                  <Typography fontSize="0.8rem">
                    {result?.Stadium?.Name[0]?.Description},{" "}
                    {result?.Stadium?.CityName[0]?.Description}
                  </Typography>
                  <Grid2 sx={{ my: 1 }}>
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
                            result?.Home?.IdCountry +
                            "?tx=c_fill,g_auto,q_auto,w_50"
                          }
                          alt="country-flag"
                          sx={{
                            border: "2px solid #395B64",
                            height: "33.5px",
                            mr: "5px",
                          }}
                        />
                        <Typography
                          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, mr: 2}}
                        >
                          {result?.Home?.TeamName[0]?.Description}
                        </Typography>
                      </Grid2>
                      <Typography
                        fontSize="2rem"
                        sx={{ mr: { sm: 5, xs: 1 } }}
                      >
                        {result?.HomeTeamScore}
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
                            result?.Away?.IdCountry +
                            "?tx=c_fill,g_auto,q_auto,w_50"
                          }
                          alt="country-flag"
                          sx={{
                            border: "2px solid #395B64",
                            height: "33.5px",
                            mr: "5px",
                          }}
                        />
                        <Typography
                          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, mr: 2}}
                        >
                          {result?.Away?.TeamName[0]?.Description}
                        </Typography>
                      </Grid2>
                      <Typography
                        fontSize="2rem"
                        sx={{ mr: { sm: 5, xs: 1 } }}
                      >
                        {result?.AwayTeamScore}
                      </Typography>
                    </Grid2>
                  </Grid2>
              </Grid2>
            </Link>
          </>
        );
      }
}

