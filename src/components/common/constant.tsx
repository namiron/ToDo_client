import { LiaLayerGroupSolid } from "react-icons/lia";
import { RiUserLine } from "react-icons/ri";
import { FiUploadCloud } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import { MdOutlineMessage } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";


type ConstantType = string | number;

interface IIcons {
  icon: JSX.Element;
  alt: string;
}

export const ERRORS_NAME: ConstantType = `This field must be filled`;

export const ERRORS_SURNAME: ConstantType = `This field must be filled`;

export const ERRORS_EMAIL: ConstantType = `The email field must be filled in correctly`;

export const PASSWORD: ConstantType = `This field must be filled`;

export const PASSWORD_MINIMUM: ConstantType = `This field must be filled`;

export const REGISTRATION: ConstantType = `Registration`;

export const LOGIN: ConstantType = `login`;

export const NAVIGATION_ITEMS: IIcons[] = [
  { icon: <LiaLayerGroupSolid />, alt: "menu" },
  { icon: <RiUserLine />, alt: "user" },
  { icon: <IoCalendarClearOutline />, alt: "Calendar" },
  { icon: <FiUploadCloud />, alt: "upload" },
  { icon: <GiSettingsKnobs />, alt: "settings" },
];

export const IMAGES: IIcons[] = [
  { icon: <IoIosArrowForward />, alt: "arrow" },
  { icon: <CiSearch />, alt: "search" },
  { icon: <ImAttachment />, alt: "attach" },
  { icon: <MdOutlineMessage />, alt: "message" },
  { icon: <IoCalendarClearOutline />, alt: "Calendar" },
  { icon: <CiCircleMore />, alt: "Calendar" },
  { icon: <CiCirclePlus />, alt: "plus" },
  { icon: <IoIosNotificationsOutline />, alt: "plus" },
  { icon: <CiCircleList />, alt: "plus" },
];
