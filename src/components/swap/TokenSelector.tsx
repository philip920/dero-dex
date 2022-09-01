import React, { FC, SyntheticEvent, useRef, useState } from 'react';
import { FormControl, Autocomplete, TextField } from '@mui/material';

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
            padding: '5px',
            width: 200,
        }}
        options={tokenList}
        onChange={handleChange}
        autoHighlight
        renderInput={(params) => (
            <TextField
                {...params}
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
