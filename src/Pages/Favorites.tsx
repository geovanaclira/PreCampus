import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";

const Favorites = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Favoritos");
  }, []);

  return <div>Favorites</div>;
};

export default Favorites;
