import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme } from './themes';
import WalletConnector from './components/wallet-connector/WalletConnector';
import Swap from './components/swap/Swap';
import DeroBridgeApi from './dero-bridge-api/DeroBridgeApi';
import to from 'await-to-js';

const App: React.FunctionComponent = () => {
    const deroBridgeApiRef = useRef();
    const [bridgeInitText, setBridgeInitText] = useState('');

    useEffect(() => {
        const load = async () => {
            // @ts-ignore
            deroBridgeApiRef.current = new DeroBridgeApi();
            const deroBridgeApi = deroBridgeApiRef.current;
            // @ts-ignore
            const [err] = await to(deroBridgeApi.init());
            if (err) {
                setBridgeInitText('failed to connect to extension');
            } else {
                setBridgeInitText('connected to extension');
            }
        };

        console.log(bridgeInitText)

        window.addEventListener('load', load);
        return () => window.removeEventListener('load', load);
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <WalletConnector />
            <Swap />
        </ThemeProvider>
    );
};

export default App;
