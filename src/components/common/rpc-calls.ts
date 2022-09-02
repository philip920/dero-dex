import axios from 'axios';
import React, { useCallback } from 'react';
import to from 'await-to-js';

const DEX_URL = 'http://localhost:3009/';

const DEX_SCID =
    '9f9770c3f15b28bc8b62718fb219b96b9ff50843d33b84b65b355fe8daae24ec';

const DERO_SCID =
    'd5cb7dcb6dfa70310053bb0ddebca65494471771d12ff133711f29792d17acae';

export const addLiquidity = useCallback(
    async (
        deroBridgeApiRef: any,
        baseAsset: string,
        quoteAsset: string,
        amountToSend: number
    ) => {
        const deroBridgeApi = deroBridgeApiRef.current;
        const [err, res] = await to(
            deroBridgeApi.wallet('transfer', {
                scid: DEX_SCID,
                ringsize: 2,
                sc_rpc: [
                    {
                        name: 'entrypoint',
                        datatype: 'S',
                        value: 'AddLiquidity',
                    },
                    {
                        name: 'baseAsset',
                        datatype: 'H',
                        value: baseAsset,
                    },
                    {
                        name: 'qouteAsset',
                        datatype: 'H',
                        value: quoteAsset,
                    },
                ],
                transfers: [
                    {
                        scid: 'dero-wrapped-token-1-scid',
                        burn: amountToSend,
                    },
                    {
                        scid: 'dero-wrapped-token-2-scid',
                        burn: amountToSend,
                    },
                ],
            })
        );

        if (err) alert(err.message);
        else alert(JSON.stringify(res));
    },
    []
);

export const removeLiquidity = useCallback(
    async (
        deroBridgeApiRef: any,
        baseAsset: string,
        quoteAsset: string,
        amountToConvert: number
    ) => {
        const deroBridgeApi = deroBridgeApiRef.current;
        const [err, res] = await to(
            deroBridgeApi.wallet('transfer', {
                scid: DEX_SCID,
                ringsize: 2,
                sc_rpc: [
                    {
                        name: 'entrypoint',
                        datatype: 'S',
                        value: 'RemoveLiquidity',
                    },
                    {
                        name: 'baseAsset',
                        datatype: 'H',
                        value: baseAsset,
                    },
                    {
                        name: 'qouteAsset',
                        datatype: 'H',
                        value: quoteAsset,
                    },
                ],
                transfers: [
                    {
                        scid: DEX_SCID,
                        burn: amountToConvert,
                    },
                ],
            })
        );

        if (err) alert(err.message);
        else alert(JSON.stringify(res));
    },
    []
);

export const swap = useCallback(
    async (
        deroBridgeApiRef: any,
        fromAsset: string,
        toAsset: string,
        amountToSwap: number
    ) => {
        const deroBridgeApi = deroBridgeApiRef.current;
        const [err, res] = await to(
            deroBridgeApi.wallet('transfer', {
                scid: DEX_SCID,
                ringsize: 2,
                sc_rpc: [
                    {
                        name: 'entrypoint',
                        datatype: 'S',
                        value: 'Swap',
                    },
                    {
                        name: 'fromAsset',
                        datatype: 'H',
                        value: fromAsset,
                    },
                    {
                        name: 'toAsset',
                        datatype: 'H',
                        value: toAsset,
                    },
                ],
                transfers: [
                    {
                        scid: DERO_SCID,
                        burn: amountToSwap,
                    },
                ],
            })
        );

        if (err) alert(err.message);
        else alert(JSON.stringify(res));
    },
    []
);

export const widthdrawAssetFees = useCallback(
    async (deroBridgeApiRef: any, asset: string) => {
        const deroBridgeApi = deroBridgeApiRef.current;
        const [err, res] = await to(
            deroBridgeApi.wallet('transfer', {
                scid: DEX_SCID,
                ringsize: 2,
                sc_rpc: [
                    {
                        name: 'entrypoint',
                        datatype: 'S',
                        value: 'WithdrawAssetFees',
                    },
                    {
                        name: 'asset',
                        datatype: 'H',
                        value: asset,
                    },
                ],
            })
        );

        if (err) alert(err.message);
        else alert(JSON.stringify(res));
    },
    []
);

export const readDexVariables = useCallback(async (deroBridgeApiRef: any) => {
    const deroBridgeApi = deroBridgeApiRef.current;
    const [err, res] = await to(
        deroBridgeApi.wallet('DERO.GetSC', {
            scid: DEX_SCID,
            variables: true,
        })
    );

    if (err) alert(err.message);
    else alert(JSON.stringify(res));
}, []);
