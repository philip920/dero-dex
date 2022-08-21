import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { useWeb3React } from '@web3-react/core';

import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

import Button from '@mui/material/Button';
import { Typography, Link } from '@mui/material';
import { Grid } from '@mui/material';

declare let window: any;

// const injected = new InjectedConnector({
//     supportedChainIds: [56],
// });

// const walletconnect = new WalletConnectConnector({
//     rpc: {
//         1: 'https://mainnet.infura.io/v3/c8fec96713c54f698db3709db29eb64a',
//         56: 'https://bsc-dataseed.binance.org/',
//         4: 'https://rinkeby.infura.io/v3/c8fec96713c54f698db3709db29eb64a',
//     },
//     // network: 'binance',
//     qrcode: true,
//     // pollingInterval: 12000,
// });

const WalletConnector: React.FunctionComponent = () => {
    const [walletAddress, setWalletAdress] = useState('');
    const [account, setAccount] = useState('');
    const [connected, setConnected] = useState(false);

    // const { active, account, library, connector, activate, deactivate } =
    //     useWeb3React();

    // const connectInjected = async () => {
    //     try {
    //         await activate(injected);
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };

    // const connectWalletConnect = async () => {
    //     try {
    //         await activate(walletconnect);
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };

    // async function disconnect() {
    //     try {
    //         deactivate();
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // }

    // useEffect(() => {
    //     console.log('active:', active);
    //     console.log('account:', account);
    // }, [account, active]);

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
        console.log('accounts connect:', accounts);
        console.log('chainId connect:', chainId);
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
        console.log('accounts session_update:', accounts);
        console.log('chainId session_update:', chainId);
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

    useEffect(() => {
        console.log('connected adress:', walletAddress);
        console.log('connected account:', account);
    }, [walletAddress, account]);

    useEffect(() => {
        console.log('connected :', connected);
    }, [connected]);

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
