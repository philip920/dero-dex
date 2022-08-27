import axios from 'axios';

const DEX_URL = 'http://localhost:3009/';

const DEX_SCID =
    '9f9770c3f15b28bc8b62718fb219b96b9ff50843d33b84b65b355fe8daae24ec';

const DERO_SCID =
    'd5cb7dcb6dfa70310053bb0ddebca65494471771d12ff133711f29792d17acae';

export const addLiquidity = async (baseAsset: string, quoteAsset: string) => {
    const { data } = await axios.post(DEX_URL, {
        jsonrpc: '2.0',
        id: '1',
        method: 'transfer',
        params: {
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
                    burn: 10000000,
                },
                {
                    scid: 'dero-wrapped-token-2-scid',
                    burn: 10000000,
                },
            ],
        },
    });

    return data;
};

export const removeLiquidity = async (
    baseAsset: string,
    quoteAsset: string
) => {
    const { data } = await axios.post(DEX_URL, {
        jsonrpc: '2.0',
        id: '1',
        method: 'transfer',
        params: {
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
                    burn: 1000,
                },
            ],
        },
    });

    return data;
};

export const swap = async (
    fromAsset: string,
    toAsset: string,
    amount: number
) => {
    const { data } = await axios.post(DEX_URL, {
        jsonrpc: '2.0',
        id: '1',
        method: 'transfer',
        params: {
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
                    burn: amount,
                },
            ],
        },
    });

    return data;
};

export const widthdrawAssetFees = async (asset: string) => {
    const { data } = await axios.post(DEX_URL, {
        jsonrpc: '2.0',
        id: '1',
        method: 'transfer',
        params: {
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
        },
    });

    return data;
};

export const readDexVariables = async () => {
    const { data } = await axios.post(DEX_URL, {
        jsonrpc: '2.0',
        id: '1',
        method: 'DERO.GetSC',
        params: {
            scid: DEX_SCID,
            variables: true,
        },
    });

    return data;
};
