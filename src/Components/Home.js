import React from 'react'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/system';
import { Typography } from '@mui/material';

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
        <Typography fontWeight='light' variant='h3' align='left' color='common.white' paddingTop={9} paddingLeft={2}>Backed by data analytics</Typography>
        </Box>
        <Box
        sx={{
            width: '100%',
            height: '32vh',
            backgroundColor: '#1e70ae',
        }}
        >
        <Typography fontWeight='bold' variant='h3' align='center' color='common.white' paddingTop={9}>Let us make your website</Typography>
        </Box>
        <Box
        sx={{
            width: '100%',
            height: '30vh',
            backgroundColor: '#10446b',
        }}
        >
        <Typography fontWeight='medium' variant='h3' align='right' color='common.white' paddingTop={10} paddingRight={2}>Guided &amp; Precise.</Typography>
        </Box>
    </div>
  )
}

export default Home;