import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { TextButton } from '../common/styled-components';
import { Typography, Link } from '@mui/material';

declare let window: any;

const ConnectButton: React.FunctionComponent = () => {
    const [authState, setAuthState] = useState('disconnected');


    const connect = async () => {
        setAuthState('connecting');

        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        window.web3 = new Web3(window.ethereum);
        const account = window.web3.eth.accounts;
        const walletAddress = account.givenProvider.selectedAddress;

        setAuthState('connected');
    };


    return authState === 'connected' ? (
        <TextButton>Disconnect</TextButton>
    ) : authState === 'connecting' ? (
        <TextButton disabled>Connecting...</TextButton>
    ) : 'ethereum' in window && authState === 'disconnected' ? (
        <TextButton onClick={connect}>Connect</TextButton>
    ) : (
        <Typography>
            An injected Ethereum provider such as{' '}
            <Link href='https://metamask.io/'>MetaMask</Link> is needed to
            authenticate.
        </Typography>
    );
};

export default ConnectButton;