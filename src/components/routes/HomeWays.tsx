import { Routes, Route } from "react-router-dom";
import { HOME_ROUTES } from "./Routes";
import React from "react";
import Dashboard from "../pages/Dashboard";
import Trips from "../pages/Trips";
import Classes from "../pages/Classes";
import Settings from "../pages/Settings";

const HomeWays: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path={HOME_ROUTES.dashboard} element={<Dashboard />} />
      <Route path={HOME_ROUTES.trips} element={<Trips />} />
      <Route path={HOME_ROUTES.classes} element={<Classes />} />
      <Route path={HOME_ROUTES.settings} element={<Settings />} />
    </Routes>
  );
};

export default HomeWays;
