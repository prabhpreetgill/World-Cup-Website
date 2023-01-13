import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLaoding(true);
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
