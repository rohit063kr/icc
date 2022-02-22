import { useCallback } from "react";

const useFetchData = function () {
  const fetchData = useCallback(async function (url, applyData) {
    const res = await fetch(url);
    const data = await res.json();
    applyData(data);
  }, []);

  return { fetchData };
};

export default useFetchData;
