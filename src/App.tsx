import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from './themes';
import WalletConnector from './components/wallet-connector/WalletConnector';
import Swap from './components/swap/Swap';


import { Paper, Grid } from '@mui/material/';

const App: React.FunctionComponent = () => {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Paper>
                <Grid sx={{ height: '100vh' }}>
                    <WalletConnector />
                    <Swap/>
                </Grid>
            </Paper>
        </ThemeProvider>
    );
};

export default App;
