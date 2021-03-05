import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const res = await axios(url);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, setData };
};

export default useFetch;
