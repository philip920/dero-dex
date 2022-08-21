import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

declare let window: any;

const WalletConnector: React.FunctionComponent = () => {
    const [walletAddress, setWalletAdress] = useState('');
    const [account, setAccount] = useState('');
    const [connected, setConnected] = useState(false);

    // Create a connector
    const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org', // Required
        qrcodeModal: QRCodeModal,
    });

    // Subscribe to connection events
    connector.on('connect', (error, payload) => {
        if (error) {
            throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        setAccount(accounts);
        setWalletAdress(accounts[0]);
        setConnected(true);
    });

    connector.on('session_update', (error, payload) => {
        if (error) {
            throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
    });

    connector.on('disconnect', (error, payload) => {
        if (error) {
            throw error;
        }

        // Delete connector
    });

    const connectInjected = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        window.web3 = new Web3(window.ethereum);
        const account = window.web3.eth.accounts;
        const walletAddress = account.givenProvider.selectedAddress;

        setWalletAdress(walletAddress);
    };

    const connect = () => {
        connector.createSession();
    };

    const disconnect = async () => {
        await connector.killSession();
        setConnected(false);
    };

    return (
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Button variant='text' onClick={connectInjected}>
                Connect MetaMask
            </Button> */}
            {connected ? (
                <Button variant='text' onClick={disconnect}>
                    Disconnec t{walletAddress}
                </Button>
            ) : (
                <>
                    <Button variant='text' onClick={connect}>
                        Wallet Connect
                    </Button>
                    <Button variant='text' onClick={disconnect}>
                        Disconnect {walletAddress}
                    </Button>
                </>
            )}
        </Grid>
    );
};

export default WalletConnector;
