import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// A function which generates a header for each page, takes a string input of what you want displayed on the header
export default function PageHeader(page) {
  
  return (
    <Grid2
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        backgroundColor: "#395B64",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: {xs: 0, sm:5},
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography variant="h2" sx={{ color: "white", m: 0, p: 0 }}>
          {page}
        </Typography>
      </Box>
      <Box
        component="img"
        src="https://digitalhub.fifa.com/transform/c8ec2346-a65d-4488-92b0-903ce0e1f361/Header-mosaic-Web?io=transform:fill,height:144,width:361&quality=75"
        alt="qatar-art"
        sx={{ display: { xs: "none", sm: "flex" } }}
      />
    </Grid2>
  );
}
