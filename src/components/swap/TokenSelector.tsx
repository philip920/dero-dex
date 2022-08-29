import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Wrapper = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid #1C1C1C',
    borderRadius: 20,
    padding: '7px 7px 7px 12px',
});

type Props = {
    selectedAsset: string;
};

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TokenSelector: React.FC<Props> = ({ selectedAsset }) => {
    const [isOpen, setIOpen] = useState(false);

    return (
        <Wrapper>
            <Typography>{selectedAsset}</Typography>
            <KeyboardArrowDownIcon />
        </Wrapper>
    );
};

export default TokenSelector;
