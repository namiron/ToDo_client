import { FaPlus } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { MdOutlineMessage } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { HOME_ROUTES } from "../routes/Routes";

type ConstantType = string | number;

interface IIcons {
  icon: JSX.Element;
  alt: string;
  routes: string;
}

export const ERRORS_NAME: ConstantType = `This field must be filled`;

export const ERRORS_SURNAME: ConstantType = `This field must be filled`;

export const ERRORS_EMAIL: ConstantType = `The email field must be filled in correctly`;

export const PASSWORD: ConstantType = `This field must be filled`;

export const PASSWORD_MINIMUM: ConstantType = `This field must be filled`;

export const REGISTRATION: ConstantType = `Registration`;

export const LOGIN: ConstantType = `login`;

export const LOG_OUT: ConstantType = `Log out`;

export const NEW_TRIP: ConstantType = `New trip`;

export const NAME_ITEMS: ConstantType[] = [
  "Dashboard",
  "Trips",
  "Classes",
  "Settings",
];

export const NAVIGATION_ITEMS: IIcons[] = [
  {
    routes: HOME_ROUTES.dashboard,
    icon: (
      <RxDashboard
        style={{
          fontSize: "20px",
        }}
      />
    ),
    alt: "menu",
  },
  {
    routes: HOME_ROUTES.trips,
    icon: (
      <IoCalendarClearOutline
        style={{
          fontSize: "20px",
        }}
      />
    ),
    alt: "Trips",
  },
  {
    routes: HOME_ROUTES.classes,
    icon: (
      <LuUsers
        style={{
          fontSize: "20px",
        }}
      />
    ),
    alt: "user",
  },
  {
    routes: HOME_ROUTES.settings,
    icon: (
      <IoSettingsOutline
        style={{
          fontSize: "20px",
        }}
      />
    ),
    alt: "settings",
  },
];
