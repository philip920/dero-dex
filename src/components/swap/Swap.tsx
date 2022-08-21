import React, { useEffect, useState } from 'react';
import { CenteredGrid } from '../common/styled-components';
import TextField from '@mui/material/TextField';
import { flexbox, styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

const Inputfield = styled(TextField)({
    margin: 16,
});

const Swap: React.FunctionComponent = () => {
    const [fromAsset, setFromAsset] = useState('ETH');
    const [toAsset, setToAsset] = useState('DERO');

    const [fromAssetValue, setFromAssetValue] = useState(0);
    const [toAssetValue, setToAssetValue] = useState(0);

    const handleFromAssetValueChange = (value: number) => {
        setFromAssetValue(value);
    };

    const handleToAssetValueChange = (value: number) => {
        setToAssetValue(value);
    };

    return (
        <CenteredGrid sx={{ flexDirection: 'column' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Inputfield
                    id='outlined-required'
                    label='From'
                    type='number'
                    inputProps={{
                        step: 'any',
                    }}
                    defaultValue='0.00'
                    value={fromAssetValue}
                    onChange={(e) =>
                        handleFromAssetValueChange(parseFloat(e.target.value))
                    }
                />
                <Grid sx={{ margin: 'auto' }}>
                    <Typography>{fromAsset}</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                <Inputfield
                    id='outlined-required'
                    type='number'
                    inputProps={{
                        step: 'any',
                    }}
                    label='To'
                    defaultValue='0.00'
                    value={toAssetValue}
                    onChange={(e) =>
                        handleToAssetValueChange(parseFloat(e.target.value))
                    }
                />
                <Grid sx={{ margin: 'auto' }}>
                    <Typography>{toAsset}</Typography>
                </Grid>
            </Grid>
        </CenteredGrid>
    );
};

export default Swap;
