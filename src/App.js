import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Team from "./components/Teams";
import Nav from "./components/Navbar";
import Test from "./components/Team/test";
import TeamFixtures from "./components/Team/fixtures";
import Stats from "./components/Team/Stats/Stats";
import Fixtures from "./components/Fixtures/Fixtures"
import Match from "./components/Match/Match"
import Shell from "./components/Bracket/BracketShell"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <style>{"body { background-color: #E7F6F2;} * {font-family: 'Poppins', sans-serif; }"}</style>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/teams/:id" element={<TeamFixtures />} />
          <Route path="/teams/:id/squad" element={<Test />} />
          <Route path="/teams/:id/stats" element={<Stats />} />
          <Route path="/teams/:id/fixtures" element={<TeamFixtures />} />
          <Route path = "fixtures/:id" element={<Match />} />
          <Route path="/brackets" element={<Shell />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
