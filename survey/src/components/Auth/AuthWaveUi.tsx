import React from 'react';
import {Box, CardMedia} from '@mui/material';
import {LogoUiImage, WaveBox} from './AuthStyle';
import {Diffrent} from '../../assets/exporter';

const AuthWaveUi = () => {
    return (
        <>
            <Box sx={WaveBox}>
                <CardMedia
                    component="img"
                    src={Diffrent}
                    sx={LogoUiImage}
                    alt="hands"
                />
            </Box>
        </>
    );
};

export default AuthWaveUi;
