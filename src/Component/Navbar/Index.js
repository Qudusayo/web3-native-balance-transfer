import { useMoralis } from "react-moralis";
import styles from "./style.module.scss";
import { Blockie, Button, Logo } from "web3uikit";

function Navbar() {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();

    const authUser = () => {
        if (!isAuthenticated) {
            authenticate();
        } else {
            logout();
        }
    };

    return (
        <nav className={styles.Navbar}>
            <Logo color="black" theme="default" />
            <div>
                {isAuthenticated && <Blockie seed={user.get("ethAddress")} />}
                <Button
                    id="test-button-primary-large"
                    onClick={authUser}
                    size="large"
                    text={isAuthenticated ? "LOGOUT" : "LOGIN"}
                    theme="primary"
                    type="button"
                />
            </div>
        </nav>
    );
}

export default Navbar;
