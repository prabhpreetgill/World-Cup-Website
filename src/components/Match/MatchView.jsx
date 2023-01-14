import React from "react";
import Score from "./Score";
import Lineups from "./Lineups";
import Details from "./Detail";

export default function MatchView() {

  return (
    <>
      <Score />
      <Lineups />
      <Details />
    </>
  );
}
