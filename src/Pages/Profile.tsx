import React, { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";

const Profile = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Meu Perfil");
  }, []);

  return <div>Profile</div>;
};

export default Profile;
