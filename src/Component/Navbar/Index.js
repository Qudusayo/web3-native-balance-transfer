import { useMoralis } from "react-moralis";
import styles from "./style.module.scss";
import { Blockie, Button, ConnectButton, Logo } from "web3uikit";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Logo theme="icon" />
      <ConnectButton />
    </nav>
  );
}

export default Navbar;
