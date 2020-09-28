import React, { useState, useEffect } from "react";
import axios from "axios";

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await axios(url);
        setData(result.data);
        console.log(result)
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    if (data !== undefined) setIsLoading(false);
  }, [data]);

  return [{ data, isLoading, isError }, setUrl];
}
export default useDataApi;
