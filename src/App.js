import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "./Component/Navbar/Index";
import Transfer from "./Pages/Transfer/Index";

function App() {
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    useEffect(() => {
        if (!isWeb3Enabled) {
            enableWeb3();
        }
    }, [isWeb3Enabled]);

    return (
        <>
            <Navbar />
            <Transfer />
        </>
    );
}

export default App;
