import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ component }) => {
  let isUserLogin = localStorage.getItem("login-user");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLogin) {
      setLogin(true);
    }
  }, []);

  if (login) {
    return component;
  } else {
    navigate("/login");
  }
};

export default ProtectedRoutes;
