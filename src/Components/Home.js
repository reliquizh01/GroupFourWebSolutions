import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/system';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import Fade from '@mui/material/Fade';
import 'animate.css';

const Home = () => {

    return (
    <div>
        <Box
        sx={{
            width: '100%',
            height: '30vh',
            backgroundColor: '#2986cc', 
        }}
        >
        <Fade in={true} style={{ transitionDelay: '300ms'}}>
        <Typography fontWeight='light' variant='h3' align='left' color='common.white' paddingTop={9} paddingLeft={2}>Backed by data analytics</Typography>
        </Fade>
        </Box>
        <Box
        sx={{
            width: '100%',
            height: '32vh',
            backgroundColor: '#1e70ae',
        }}
        >
        <Fade in={true} style={{ transitionDelay: '600ms'}}>
        <Typography fontWeight='bold' variant='h3' align='center' color='common.white' paddingTop={9}>Let us make your website</Typography>
        </Fade>
        </Box>
        <Box
        sx={{
            width: '100%',
            height: '30vh',
            backgroundColor: '#10446b',
        }}
        >
        <Fade in={true} style={{ transitionDelay: '900ms'}}>        
        <Typography className="animate__bounceInLeft" fontWeight='medium' variant='h3' align='right' color='common.white' paddingTop={10} paddingRight={2}>Guided &amp; Precise.</Typography>
        </Fade>
        </Box>
    </div>
  )
}

export default Home;