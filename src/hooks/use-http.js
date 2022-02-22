import { useCallback } from "react";

const useHttp = function () {
  const sendHttp = useCallback(async function (requestConfig) {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    const data = await response.json();

    return data;
  }, []);

  return {
    sendHttp,
  };
};

export default useHttp;
