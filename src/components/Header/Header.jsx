import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigation } from "components/Navigation/Navigation";
import { selectIsLoggedIn } from "redux/selectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import { NavAuth } from "components/NavAuth/NavAuth";
import { HeaderEl } from "./Header.styled";

export const Header = () => {
    const isAuthorized = useSelector(selectIsLoggedIn)
    return (
        <HeaderEl>
            <Navigation />
            {isAuthorized ? <UserMenu /> : <NavAuth />}
        </HeaderEl>
    )
};
