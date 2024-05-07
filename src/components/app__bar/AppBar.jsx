import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../user_menu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../auth_nav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
