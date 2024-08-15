import React from "react";
import homeStyles from "./styles/home.module.scss";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ROUTES } from "../routes/Routes";
import { getGoogleUser } from "../../redux/API/user/useGoogle";
import { useAuthorization } from "../../redux/API/user/useAuthorization";
import Navigation from "../navigation/Navigation";
import Search from "../header/Search";
import User from "../header/User";
import HomeWays from "../routes/HomeWays";

const Home: React.FC = () => {
  //=--------------------------------------

  const isAuth = useAppSelector((state) => state.user.isAuth);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getGoogleUser());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(useAuthorization());
  }, [dispatch]);
  //=--------------------------------------
  return (
    <>
      {isAuth ? (
        <div className={homeStyles.wrapper}>
          <nav className={homeStyles.navigation}>
            <Navigation />
          </nav>

          <section className={homeStyles.content}>
            <header className={homeStyles.header}>
              <Search />
              <User />
            </header>
            <main className={homeStyles.main}>
      
                <HomeWays />
           
            </main>
          </section>
        </div>
      ) : (
        <Navigate to={ROUTES.registration} />
      )}
    </>
  );
};

export default Home;
