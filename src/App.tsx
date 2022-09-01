import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme } from './themes';
import WalletConnector from './components/wallet-connector/WalletConnector';
import Swap from './components/swap/Swap';

import { Grid } from '@mui/material/';

const App: React.FunctionComponent = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Grid sx={{ height: '100vh' }}>
                <WalletConnector />
                <Swap />
            </Grid>
        </ThemeProvider>
    );
};

export default App;
