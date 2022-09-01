import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { CenteredGrid, TextButton } from '../common/styled-components';
import TextField from '@mui/material/TextField';
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

const hardCodedTokenList = ['WETH', 'WBTC', 'WXRP', 'DERO', 'WBNB'];

const Swap: React.FC = () => {
    const [values, setValues] = useState({
        fromAsset: 'WETH',
        toAsset: 'DERO',
        fromAssetValue: 0.0,
        toAssetValue: 0.0,
    });

    const handleFromAssetChange = (
        event: SyntheticEvent<Element, Event>,
        value: string | null
    ) => {
        value &&
            setValues({
                ...values,
                fromAsset: value,
            });
    };

    const handleToAssetChange = (
        event: SyntheticEvent<Element, Event>,
        value: string | null
    ) => {
        value &&
            setValues({
                ...values,
                toAsset: value,
            });
    };

    const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    console.log('values:', values);

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
                    paddingY: 2,
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
                    <Grid sx={{ marginY: 'auto', marginRight: 3 }}>
                        <TokenSelector
                            handleChange={handleFromAssetChange}
                            tokenList={hardCodedTokenList}
                        />
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
                    <Grid sx={{ marginY: 'auto', marginRight: 3 }}>
                        <TokenSelector
                            handleChange={handleToAssetChange}
                            tokenList={hardCodedTokenList}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <TextButton>Connect Wallet</TextButton>
        </CenteredGrid>
    );
};

export default Swap;
