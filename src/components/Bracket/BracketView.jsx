import React from "react";
import Shell from "./BracketShell";
import PageHeader from "../Shortcuts/PageHeader";
import BracketAccordian from "./BracketAccordian";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import CreateTable from "./Groups";
import { groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH} from "./GroupData"

// The page that will be rendered onto the website

export default function BracketView() {
    return (
        <>
        {PageHeader("Brackets and Groups")}
        <BracketAccordian />
        <Shell />
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