import React, { useEffect, useState } from 'react';
import { CenteredGrid } from '../common/styled-components';
import TextField from '@mui/material/TextField';
import { flexbox, styled } from '@mui/system';
import NumberFormat, { InputAttributes } from 'react-number-format';
import { Grid, Typography } from '@mui/material';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const Inputfield = styled(TextField)({
    margin: 16,
});

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
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <TextField
                    sx={{ margin: 4 }}
                    label='From'
                    value={values.fromAssetValue}
                    onChange={handleValueChange}
                    name='fromAssetValue'
                    id='fromAssetValue'
                    InputProps={{
                        inputComponent: NumberFormatCustom as any,
                    }}
                />
                <Grid sx={{ margin: 'auto' }}>
                    <Typography>{fromAsset}</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <TextField
                    sx={{ margin: 4 }}
                    label='To'
                    value={values.toAssetValue}
                    onChange={handleValueChange}
                    name='toAssetValue'
                    id='toAssetValue'
                    InputProps={{
                        inputComponent: NumberFormatCustom as any,
                    }}
                />
                <Grid sx={{ margin: 'auto' }}>
                    <Typography>{toAsset}</Typography>
                </Grid>
            </Grid>
        </CenteredGrid>
    );
};

export default Swap;
