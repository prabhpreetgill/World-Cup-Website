import { useParams } from "react-router-dom";
import ApiData from "../ApiData";

export default function IdtoName(name, home) {
    
const { id } = useParams();

  const fLink = "https://api.fifa.com/api/v3/live/football/17/255711/285073/";
  const sLink = "??language=en";
  const url = fLink + id + sLink;

  const { data } = ApiData(url);

  const homePlayers = data?.HomeTeam?.Players;
  const awayPlayers = data?.AwayTeam?.Players;
  let i = 0;

  let playerName = "";

  if (home == "home") {
    homePlayers?.map((player) => {
      if (player?.IdPlayer == name) {
        playerName = player?.PlayerName[0]?.Description;
      }
    });
  }

  if (home == "away") {
    awayPlayers?.map((player) => {
      if (player?.IdPlayer == name) {
        playerName = player?.PlayerName[0]?.Description;
      }
    });
  }

  return playerName;
}
