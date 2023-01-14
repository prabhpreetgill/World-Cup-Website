import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Shortcuts/Navbar";
import Home from "./components/Home/HomeView";
import FixturesView from "./components/Fixtures/FixturesView";
import BracketView from "./components/Bracket/BracketView";
import Team from "./components/Teams";
import TeamFixtureView from "./components/Team/Fixtures/TeamFixtureView";
import SquadView from "./components/Team/Squad/SquadView";
import Stats from "./components/Team/Stats/Stats";
import MatchView from "./components/Match/MatchView";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <style>{"body { background-color: #E7F6F2;} * {font-family: 'Poppins', sans-serif; }"}</style>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixtures" element={<FixturesView />} />
          <Route path="/brackets" element={<BracketView />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/teams/:id" element={<TeamFixtureView />} />
          <Route path="/teams/:id/stats" element={<Stats />} />
          <Route path="/teams/:id/squad" element={<SquadView />} />
          <Route path = "fixtures/:id" element={<MatchView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
