import { useEffect, useState } from "react";

const usePostFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { loading, error, data };
};

export default usePostFetch;
