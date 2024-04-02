import { useState } from "react";

export const useLoaderStates = () => {
  const [loader, setLoader] = useState(false);
  const [loaderSuccessful, setLoaderSuccessful] = useState(false);
  const [loaderWarning, setLoaderWarning] = useState(false);
  const [loaderFailed, setLoaderFailed] = useState(false);

  return {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderWarning, 
    setLoaderWarning,
    loaderFailed,
    setLoaderFailed,
  };
};