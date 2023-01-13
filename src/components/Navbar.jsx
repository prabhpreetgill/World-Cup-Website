import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import WCLogo from "../Pictures/wc-logo.png";
import FifaLogo from "../Pictures/FIFA-Logo.png";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from '@mui/material/Link';

const pages = [
  {
    title: "FIXTURES",
    url: "/fixtures",
    id: "fix",
  },
  {
    title: "BRACKETS AND GROUPS",
    url: "/brackets",
    id: "bracks",
  },
  {
    title: "TEAMS",
    url: "/teams",
    id: "team",
  },
];

export default function navBar() {
  const Nav = (
    <>
      <AppBar
        position="static"
        sx={{ background: "#2C3333", boxShadow: 0, zIndex: 1 }}
      >
        <Box
          component="img"
          src={FifaLogo}
          alt="fifa-logo"
          height="30px"
          width="53px"
          sx={{ ml: 2 }}
        />

        <Grid2>
          <Toolbar sx={{ background: "#395B64" }}>
            <MenuIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "large",
              }}
            />
            <Grid
              container
              sx={{ justifyContent: { xs: "center", sm: "left" } }}
            >
              <Link href="/">
                <Box
                  component="img"
                  sx={{ height: "50px", width: "83px", my: 1, ml: 2 }}
                  src={WCLogo}
                  alt="WC Logo"
                />
              </Link>
            </Grid>
            <Container
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Typography key={page.id} sx={{ mr: 5 }}>
                  <Link href={page.url} sx={{ color: "white" }}>
                    {page.title}
                  </Link>
                </Typography>
              ))}
            </Container>
          </Toolbar>
        </Grid2>
      </AppBar>
    </>
  );

  return Nav;
}
