import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GenericEndpoints from "../services/generic";
import { AuthContext } from "../context/AuthContext";

const useFetch = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const res = await axios.get(url);
        const res = await GenericEndpoints.get(
          path,
          user?.token
        );
        setData(res.data);
      } catch (err) {
        setError(err);
        setData([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [path]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await GenericEndpoints.get(path);
      setData(res.data);
    } catch (err) {
      setError(err);
      setData([]);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
