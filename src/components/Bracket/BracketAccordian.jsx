import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GetMatch from "../Shortcuts/GetMatch";

// Accordian view for the Bracket if the screen size is less than large (1200px) for each tournament round we call the GetMatch function using the match URL to display the match

export default function BracketAccordian() {
  return (
    <Grid2 sx={{ display: { xs: "block", lg: "none" } }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography textAlign="center" fontSize="2rem">
            Round of 16
          </Typography>
        </AccordionSummary>
        <Grid2 backgroundColor="rgba(0,0,0,0.1)" sx={{ py: "5px" }}>
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128136?language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128131?language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128132??language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128133??language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128134??language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128135??language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128137??language=en"
          )}
          {GetMatch(
            "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128130??language=en"
          )}
        </Grid2>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography textAlign="center" fontSize="2rem">
            Quarter Final
          </Typography>
        </AccordionSummary>
          <Grid2 backgroundColor="rgba(0,0,0,0.1)" sx={{ py: "5px" }}>
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128139??language=en"
            )}
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128141??language=en"
            )}
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128138??language=en"
            )}
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128140??language=en"
            )}
          </Grid2>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography textAlign="center" fontSize="2rem">
            Semi Final
          </Typography>
        </AccordionSummary>
          <Grid2 backgroundColor="rgba(0,0,0,0.1)" sx={{ py: "5px" }}>
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128143??language=en"
            )}
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128142??language=en"
            )}
          </Grid2>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography textAlign="center" fontSize="2rem">
            Third Place
          </Typography>
        </AccordionSummary>
          <Grid2 backgroundColor="rgba(0,0,0,0.1)" sx={{ py: "5px" }}>
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128144??language=en"
            )}
          </Grid2>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography textAlign="center" fontSize="2rem">
            Final
          </Typography>
        </AccordionSummary>
          <Grid2 backgroundColor="rgba(0,0,0,0.1)" sx={{ py: "5px" }}>
            {GetMatch(
              "https://api.fifa.com/api/v3/live/football/17/255711/285073/400128145??language=en"
            )}
          </Grid2>
      </Accordion>
    </Grid2>
  );
}
