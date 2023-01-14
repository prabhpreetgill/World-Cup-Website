import { AppBar, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useParams } from "react-router-dom";


// Navigation Bar for Team Pages
export default function TeamNav() {

  // conts team is the team id from the route paramters
  const teamCode = useParams()
      const team = teamCode.id

  // Object array of pages names, urls, and id
  const pages = [
    {
      title: "FIXTURES",
      url: "/teams/"+team,
      id: "fix",
    },
    {
      title: "STATS",
      url: "/teams/"+team+"/stats",
      id: "stat",
    },
    {
      title: "SQUAD",
      url: "/teams/"+team+"/squad",
      id: "squad",
    },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#2C3333",
        p: "5px"
      }}
    >
      <Grid2 sx={{display: "flex", flexDirection: "row"}}>
        {pages.map((page) => (
          <Typography className="menu-item" key={page.id} sx={{m: 2, my: 2}}>
            <Link href={page.url} sx={{ color: "white" }}>
              {page.title}
            </Link>
          </Typography>
        ))}
      </Grid2>
    </AppBar>
  );
}
