import React from "react";
import navStyles from "./styles/nav.module.scss";
import { NavLink } from "react-router-dom";

import {
  NAVIGATION_ITEMS,
  NAME_ITEMS,
  LOG_OUT,
  NEW_TRIP,
} from "../common/constant";
import { useAppDispatch } from "../../hooks/hooks";
import { exitUser } from "../../redux/reducers/userSlice";

//----------------------------img
import { FaPlus } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import LOGO from "../../icons/Logo.svg";
//----------------------------/img

const Navigation: React.FC = () => {
  
  //-----------------------------------------
  const dispatch = useAppDispatch();
  const [focus, setFocus] = React.useState<null | number>(null);

  const focusItemOrders: (index: number) => void = (index: number) => {
    setFocus((prevIndex) => (prevIndex === index ? null : index));
  };
  //-----------------------------------------

  return (
    <div className={navStyles.container}>
      <div className={navStyles.logo}>
        <img src={LOGO} alt="image" />
      </div>
      <button className={navStyles.newTrip}>
        <FaPlus />
        <span>{NEW_TRIP}</span>
      </button>
      <ul className={navStyles.list}>
        {NAVIGATION_ITEMS.map((item, i) => (
          <NavLink
            to={item.routes}
            key={i}
            onClick={() => focusItemOrders(i)}
            className={
              focus === i
                ? `${navStyles.item} ${navStyles.active}`
                : `${navStyles.item}`
            }
          >
            <div className={navStyles.itemBox}>
              <span>{item.icon}</span>
              <span className={navStyles.name}>{NAME_ITEMS[i]}</span>
            </div>
          </NavLink>
        ))}
      </ul>
      <div className={navStyles.itemBox} onClick={() => dispatch(exitUser())}>
        <button className={navStyles.exitFromOffice}>
          <RxExit
            style={{
              color: "rgba(0, 71, 209, 0.50)",
              fontSize: "20px",
            }}
          />
        </button>
        <span className={navStyles.log}>{LOG_OUT}</span>
      </div>
    </div>
  );
};

export default Navigation;
