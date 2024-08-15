import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";
import Home from "../home/Home";
import Login from "../auth/Login";
import Registration from "../auth/Registration";

const Ways: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.homeWays} element={<Home />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.registration} element={<Registration />} />
    </Routes>
  );
};

export default Ways;
