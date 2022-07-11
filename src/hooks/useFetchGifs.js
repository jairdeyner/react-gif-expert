import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const iamges = await getGifs(category);
      setGifs(iamges);
      setIsLoading(false);
    };

    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
