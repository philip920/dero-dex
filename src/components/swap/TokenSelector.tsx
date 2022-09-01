import React, { SyntheticEvent } from 'react';
import { Autocomplete, TextField } from '@mui/material';

type Props = {
    handleChange: (
        event: SyntheticEvent<Element, Event>,
        value: string | null
    ) => void;
    tokenList: string[];
};

const TokenSelector: React.FC<Props> = ({ handleChange, tokenList }) => (
    <Autocomplete
        sx={{
            border: '2px solid #1C1C1C',
            borderRadius: 3,
            padding: '2px',
            marginRight: 1,
            width: 200,
        }}
        options={tokenList}
        onChange={handleChange}
        autoHighlight
        renderInput={(params) => (
            <TextField
                {...params}
                sx={{ paddingLeft: 1 }}
                variant='standard'
                placeholder='Select Token'
                InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                }}
            />
        )}
    />
);

export default TokenSelector;
