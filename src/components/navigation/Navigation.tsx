import React from "react";
import navStyles from "./styles/nav.module.scss";
import { NAVIGATION_ITEMS } from "../common/constant";
import { useAppDispatch } from "../../hooks/hooks";
import { exitUser } from "../../redux/reducers/userSlice";

//----------------------------img

import EXIT from "../../icons/exit.svg";
import LOGO from "../../icons/Logo.svg";
//----------------------------/img

const Navigation: React.FC = () => {
  //-----------------------------------------
  const dispatch = useAppDispatch();
  const [focus, setFocus] = React.useState<null | number>(null);

  const clickItemOrders: (index: number) => void = (index: number) => {
    setFocus((isActive) => (isActive === index ? null : index));
  };
  //-----------------------------------------

  return (
    <div className={navStyles.container}>
      <div className={navStyles.logo}>
        <img src={LOGO} alt="image" />
      </div>
      <ul className={navStyles.list}>
        {NAVIGATION_ITEMS.map((image, i) => (
          <li
            onClick={() => clickItemOrders(i)}
            key={i}
            className={
              focus === i
                ? `${navStyles.item} ${navStyles.active}`
                : navStyles.item
            }
          >
            {image.icon}
          </li>
        ))}
      </ul>
      <button
        className={navStyles.exitFromOffice}
        onClick={() => dispatch(exitUser())}
      >
        <img src={EXIT} alt="image" />
      </button>
    </div>
  );
};

export default Navigation;
