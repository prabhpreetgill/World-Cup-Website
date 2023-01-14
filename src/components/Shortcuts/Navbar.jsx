import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import WCLogo from "../../Pictures/wc-logo.png";
import FifaLogo from "../../Pictures/FIFA-Logo.png";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "@mui/material/Link";

// Pages that will be displayed on the nav bar
const pages = [
  {
    title: "FIXTURES",
    url: "/fixtures",
    id: "fix",
  },
  {
    title: "KNOCKOUT",
    url: "/brackets",
    id: "bracks",
  },
  {
    title: "TEAMS",
    url: "/teams",
    id: "team",
  },
];

// Navigation Bar
export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "white" }}
    >
      <Typography variant="h6" sx={{ my: 5 }}>
        FIFA WORLD CUP
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <Link href={page.url} sx={{ color: "white" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
              onClick={handleDrawerToggle}
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
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#395B64",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );

  return Nav;
}
