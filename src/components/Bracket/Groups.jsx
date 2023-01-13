import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getFlag from "../Shortcuts/flag"


export default function BasicTable(rows) {
  return (
    <TableContainer component={Paper} sx={{maxWidth: "500px", m: 2, p: 2, borderRadius: "20px", backgroundColor: "rgba(255, 250, 250, 0.6)"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} width="30%" sx={{fontSize: {xs: "1rem", sm:"1.5rem"}, p:1}}>{rows[0].group}</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>GP</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>W</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>D</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>L</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>GD</TableCell>
            <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1, fontWeight: 800}}>Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left' width="10%">{row.rank}</TableCell>
              <TableCell component="th" scope="row" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}} width="20%">
                {getFlag(row.name)}  {row.name}
              </TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>{row.gp}</TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>{row.wins}</TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>{row.draws}</TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>{row.loses}</TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1}}>{row.gd}</TableCell>
              <TableCell align="right" width="10%" sx={{fontSize: {xs: "0.7rem", sm:"1rem"}, p:1, fontWeight: 800}}>{row.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

