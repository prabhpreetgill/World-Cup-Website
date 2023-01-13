import React, { useState } from "react";
import { useEffect } from "react";
import ApiData from "../ApiData"

export default function IdToTeam(id) {

    const [name, setName] = useState("Yo");

   useEffect (() => {
        const url =
        "https://api.fifa.com/api/v3/teams/" +
        id +
        "/squad?idCompetition=17&idSeason=255711&language=en";
    
      const { data } = ApiData(url);
      const short = data?.IdCountry;
      const fLink = "https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/";
      const sLink = "?tx=c_fill,g_auto,q_auto";

        setName(data?.TeamName[0].Description)
   }, [name])

   console.log(name)
   return name
}