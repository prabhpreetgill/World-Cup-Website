import { useEffect, useState } from "react";
import axios from "axios";

// Function that returns API data, takes the API Url as an input
export default function useFetch(url) {

  // Three consts, data, loading, error
  const [data, setData] = useState(null);
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(null);

  // useState function which gets the url, then sets const data to contain the data from the API 
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLaoding(false);
      });
  }, [url]);

  return { data, loading, error };
}
