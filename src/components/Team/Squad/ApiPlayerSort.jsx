import ApiData from "../../Shortcuts/ApiData";

// Function which takes a url of a team and sorts the players based on position
export default function ApiPlayerSort(url) {
  // Using the inputed url, the data is saved onto const data, and an array of all players is saved on const players
  const { data } = ApiData(url);
  const players = data?.Players;

  // Initializing arrays of goalies, defenders, midfielders, and forwards
  const goalies = [];
  const defenders = [];
  const midfielders = [];
  const forwards = [];

  // Maps all players on the team and pushes them into an array based on their position number
  players?.map((player) => {
    switch (player?.Position) {
      case 0:
        goalies.push(player);
        break;
      case 1:
        defenders.push(player);
        break;
      case 2:
        midfielders.push(player);
        break;
      case 3:
        forwards.push(player);
        break;
      default:
        console.log("Something wrong happened in ApiPlayerSort");
    }
  });
  return { goalies, defenders, midfielders, forwards };
}
