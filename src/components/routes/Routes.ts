import { IHomeRoutes, IRoutesTypes } from "./types/IRoutesTypes";

export const ROUTES: IRoutesTypes = {
  home: "/",
  homeWays: "/*",
  login: "/login",
  registration: "/registration",
};

export const HOME_ROUTES: IHomeRoutes = {
  dashboard: "/dashboard",
  trips: "/trips",
  classes: "/classes",
  settings: "/settings",
};
