import React, { useEffect, useState } from 'react';
import { CenteredGrid, TextButton } from '../common/styled-components';
import TextField from '@mui/material/TextField';
import { flexbox, styled } from '@mui/system';
import NumberFormat, { InputAttributes } from 'react-number-format';
import { Grid, Typography } from '@mui/material';
import swapInput from '../../assets/swap_input.svg';
import TokenSelector from './TokenSelector';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumberFormatCustom = React.forwardRef<
    NumberFormat<InputAttributes>,
    CustomProps
>(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
});

const Swap: React.FunctionComponent = () => {
    const [fromAsset, setFromAsset] = useState('ETH');
    const [toAsset, setToAsset] = useState('DERO');

    const [values, setValues] = useState({
        fromAssetValue: '0.00',
        toAssetValue: '0.00',
    });

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <CenteredGrid sx={{ flexDirection: 'column' }}>
            <Typography sx={{ marginBottom: 2 }}>Swap</Typography>
            <Grid
                sx={{
                    backgroundImage: `url(${swapInput})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    paddingX: 10,
                    marginBottom: 1.5,
                }}
            >
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <TextField
                        variant='standard'
                        sx={{ margin: 4 }}
                        value={values.fromAssetValue}
                        onChange={handleValueChange}
                        name='fromAssetValue'
                        id='fromAssetValue'
                        InputProps={{
                            inputComponent: NumberFormatCustom as any,
                            disableUnderline: true,
                        }}
                    />
                    <Grid sx={{ margin: 'auto' }}>
                        <TokenSelector selectedAsset={fromAsset} />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <TextField
                        variant='standard'
                        sx={{ margin: 4 }}
                        value={values.toAssetValue}
                        onChange={handleValueChange}
                        name='toAssetValue'
                        id='toAssetValue'
                        InputProps={{
                            inputComponent: NumberFormatCustom as any,
                            disableUnderline: true,
                        }}
                    />
                    <Grid sx={{ margin: 'auto' }}>
                        <TokenSelector selectedAsset={toAsset} />
                    </Grid>
                </Grid>
            </Grid>
            <TextButton>Connect Wallet</TextButton>
        </CenteredGrid>
    );
};

export default Swap;
