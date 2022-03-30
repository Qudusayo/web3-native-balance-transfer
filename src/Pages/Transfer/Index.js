import Moralis from "moralis";
import { useState } from "react";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import { Button, Input } from "web3uikit";
import styles from "./style.module.scss";

function Transfer() {
    const { isAuthenticated } = useMoralis();
    const web3Transfer = useWeb3Transfer();
    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState("");
    const [transferring, setTransferring] = useState(false);

    const setAmountHandler = (e) => {
        setAmount(e.target.value);
    };

    const setAddressHandler = (e) => {
        setAddress(e.target.value);
    };

    const transferNativeBalance = (e) => {
        e.preventDefault();
        setTransferring(true);

        web3Transfer.fetch({
            params: {
                amount: Moralis.Units.ETH(amount),
                receiver: address,
                type: "native",
            },
            onSuccess: (tx) =>
                tx.wait().then((newTx) => {
                    // This block will run once the transaction is completed
                    setTransferring(false);
                    console.log(newTx);
                }),
            onError: () => {
                setTransferring(false);
            },
        });
    };

    return (
        <form className={styles.Transfer} onSubmit={transferNativeBalance}>
            <h2>TRANSFER NATIVE BALANCE</h2>
            <Input
                label="AMOUNT"
                name="AMOUNT"
                onChange={setAmountHandler}
                type="number"
                width="100%"
                style={{ margin: "2em 0" }}
                disabled={transferring || !isAuthenticated}
                value={amount}
            />
            <Input
                label="RECIPIENT ADDRESS"
                name="RECIPIENT ADDRESS"
                onChange={setAddressHandler}
                type="text"
                width="100%"
                style={{ margin: "2em 0" }}
                disabled={transferring || !isAuthenticated}
                value={address}
            />
            <Button
                id="test-button-loading"
                isLoading={transferring}
                disabled={!isAuthenticated}
                text="TRANSFER ASSET"
                theme="primary"
                type="submit"
            />
        </form>
    );
}

export default Transfer;
