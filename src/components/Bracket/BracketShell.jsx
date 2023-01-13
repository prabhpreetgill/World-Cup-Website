import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import PageHeader from "../Shortcuts/PageHeader";
import GetMatch from "../Shortcuts/GetMatch"
import { Typography } from "@mui/material";
import BracketAccordian from "./Accordian";
import { groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH} from "./CreateGroups"
import CreateTable from "./Groups"

export default function Shell() {
    return (
        <>
            {PageHeader("Brackets and Groups")}
            <Grid2 sx={{mt: 5, display: {xs:"none", lg:"flex"}}}>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Round of 16</Typography>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128136?language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128131?language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128132??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128133??language=en")}
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Quarter Final</Typography>
                <Grid2 sx={{height: "100%", display: "flex", flexDirection :"column", justifyContent: "space-evenly"}}>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128139??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128141??language=en")}
                    </Grid2>
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Semi Final</Typography>
                <Grid2 sx={{height: "100%", display: "flex", flexDirection :"column", justifyContent: "space-evenly"}}>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128143??language=en")}
                    </Grid2>
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column"}}>
                <Grid2 sx={{height: "50%", display: "flex", flexDirection :"column", justifyContent: "center"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Final</Typography>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128145??language=en")}
                    </Grid2>
                <Grid2 sx={{height: "50%", display: "flex", flexDirection :"column", justifyContent: "center"}}>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128144??language=en")}
                    <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Third Place</Typography>
                </Grid2>
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Semi Final</Typography>
                <Grid2 sx={{height: "100%", display: "flex", flexDirection :"column", justifyContent: "space-evenly"}}>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128142??language=en")}
                    </Grid2>
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Quarter Final</Typography>
                <Grid2 sx={{height: "100%", display: "flex", flexDirection :"column", justifyContent: "space-evenly"}}>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128138??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128140??language=en")}
                    </Grid2>
                </Grid2>
                <Grid2 sx={{width:"14%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Typography textAlign="center" fontSize="2rem" sx={{mb: 1, fontSize: {xs:"1.5rem", xl: "2rem"}}}>Round of 16</Typography>
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128134??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128135??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128137??language=en")}
                    {GetMatch("https://api.fifa.com/api/v3/live/football/17/255711/285073/400128130??language=en")}
                </Grid2>
            </Grid2>
            <BracketAccordian />
            <Grid2 sx={{mt: 20}}>
            <Typography fontSize={"4rem"} textAlign="center">Groups</Typography>
            <Grid2 container display="flex" sx={{mx: 0, flexDirection: "row", justifyContent: "space-evenly", mt: 0}}>
            {CreateTable(groupA)}
            {CreateTable(groupB)}
            {CreateTable(groupC)}
            {CreateTable(groupD)}
            {CreateTable(groupE)}
            {CreateTable(groupF)}
            {CreateTable(groupG)}
            {CreateTable(groupH)}
            </Grid2>
            </Grid2>
        </>
    )
}