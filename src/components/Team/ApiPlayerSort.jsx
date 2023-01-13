import React from "react";
import ApiData from "../ApiData"

export default function sorted(url) {
    const {data} = ApiData(url);
      const players = data?.Players;
      const goalies = [];
      const defenders = [];
      const midfielders = [];
      const forwards = [];
      
      players?.map(player => {
        if(player?.Position===0) {
            goalies.push(player);
        }
      })
    
      players?.map(player => {
        if(player?.Position===1) {
            defenders.push(player);
        }
      })
    
      players?.map(player => {
        if(player?.Position===2) {
            midfielders.push(player);
        }
      })
    
      players?.map(player => {
        if(player?.Position===3) {
            forwards.push(player);
        }
      }, [url])

      return {goalies, defenders, midfielders, forwards}
}


  