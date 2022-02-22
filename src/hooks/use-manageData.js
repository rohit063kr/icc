import { useState, useEffect } from "react";
import useFetchData from "./use-fetch";

const useManageData = function (url) {
  const [detailsData, setDetailsData] = useState();
  const { fetchData } = useFetchData();

  const detailsDataHandler = function (data) {
    const detailsDataArray = [];

    if (data)
      for (const item of Object.entries(data)) {
        detailsDataArray.push({ id: item[0], ...item[1] });
      }

    setDetailsData(detailsDataArray);
  };

  useEffect(() => {
    fetchData(url, detailsDataHandler);
  }, [fetchData, url]);

  return { detailsData };
};

export default useManageData;
