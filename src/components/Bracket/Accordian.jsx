import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import GetMatch from "../Shortcuts/GetMatch"


export default function BracketAccordian() {
  return (
    <Grid2 sx={{display: {xs:"block", lg: "none"}}}>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography textAlign="center" fontSize="2rem">Round of 16</Typography>
        </AccordionSummary>
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128136?language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128131?language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128132??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128133??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128134??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128135??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128137??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128130??language=en")}
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography textAlign="center" fontSize="2rem">Quarter Final</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128139??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128141??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128138??language=en")}
            {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128140??language=en")}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography textAlign="center" fontSize="2rem">Semi Final</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128143??language=en")}
        {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128142??language=en")}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography textAlign="center" fontSize="2rem">Third Place</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128144??language=en")}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography textAlign="center" fontSize="2rem">Final</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128145??language=en")}
        </AccordionDetails>
      </Accordion>

    </Grid2>
  );
}
