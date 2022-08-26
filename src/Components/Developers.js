import React from 'react';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';

const Developers = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        }));

    return (
    <div>
        <Box
        sx={{
            width: '100%',
            height: 100,
            backgroundColor: '#10446b',
        }}
        >
            <Typography align='center' variant="h6" paddingTop={3} fontWeight='' color={'#b6b6b6'}>the designers, master of the crafts, know more about your...</Typography>
            <Typography align='center' variant="h3" paddingTop={2} paddingBottom={3} fontWeight='bold' color={'#c3def7'}>DEVELOPERS</Typography>
        </Box>
        


        <Box
        sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1e70ae',
            paddingTop: 5
        }}
        >
            <Container
            sx={{
                width: '90%',
                height: 250,
                backgroundColor: '#2986cc',   
                flexGrow: 1             
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                    <Item>

                        <Typography align="center" variant="h3">Jason Emmanuel Guardame</Typography>
                        <Typography variant="h6" fontWeight="bold">
                        Game Developer &amp; Full-stack Web Developer    
                        </Typography>
                        <Typography component="p" fontWeight='light' sx={{fontStyle: 'italic',
                        letterSpacing: -1}}>
                            'Coding is my passion, and has always been a fun past time'
                        </Typography>

                        <Typography component="p" fontWeight='light'>
                            <a style={{color:'red'}}>Loves:</a> Spending time reading books, playing dota 2, and being under the sunset beach
                        </Typography>
                        <Button href="https://reliquizh01.github.io/" target="_blank">
                            Porfolio
                        </Button>
                    </Item>
                    </Grid>
                </Grid>
            </Container>
            <Container
            sx={{
                width: '90%',
                height: 250,
                backgroundColor: '#2986cc',   
                flexGrow: 1             
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                    <Item>

                        <Typography align="center" variant="h3">Wenn Mark Recopelacion</Typography>
                        <Typography variant="h6" fontWeight="bold">
                        Full-stack Web Developer    
                        </Typography>
                        <Typography component="p" fontWeight='light' sx={{fontStyle: 'italic',
                        letterSpacing: -1}}>
                            "Programming is like sex one mistake and you will support it the rest of your life"
                        </Typography>

                        <Typography component="p" fontWeight='light'>
                            <a style={{color:'red'}}>Loves:</a> playing dota, coding, eating, sleeping.
                        </Typography>
                        <Button href="https://markustech.github.io/portfolio/" target="_blank">
                            Porfolio
                        </Button>
                    </Item>
                    </Grid>
                </Grid>
            </Container>
            <Container
            sx={{
                width: '90%',
                height: 250,
                backgroundColor: '#2986cc',   
                flexGrow: 1             
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                    <Item>

                        <Typography align="center" variant="h3">Jass Sarmiento</Typography>
                        <Typography variant="h6" fontWeight="bold">
                        Full-stack Web Developer    
                        </Typography>
                        <Typography component="p" fontWeight='light' sx={{fontStyle: 'italic',
                        letterSpacing: -1}}>
                            'Fall seven times, get up eight.'
                        </Typography>

                        <Typography component="p" fontWeight='light'>
                            <a style={{color:'red'}}>Loves:</a> watching anime, playing online games, listening to Jpop
                        </Typography>
                        <Button href="https://portfolio-naimononedari.vercel.app/"
                        target="_blank">
                            Porfolio
                        </Button>
                    </Item>
                    </Grid>
                </Grid>
            </Container>
            <Container
            sx={{
                width: '90%',
                height: 250,
                backgroundColor: '#2986cc',   
                flexGrow: 1             
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} spacing={2}>
                    <Item>

                        <Typography align="center" variant="h3">Marvie Alquizar</Typography>
                        <Typography variant="h6" fontWeight="bold">
                        Full-stack Web Developer    
                        </Typography>
                        <Typography component="p" fontWeight='light' sx={{fontStyle: 'italic',
                        letterSpacing: -1}}>
                            'Fly'
                        </Typography>

                        <Typography component="p" fontWeight='light'>
                            <a style={{color:'red'}}>Loves:</a> Anime, manga, webnovel, novel, online games, foods, cats
                        </Typography>
                        <Button href="https://marvsalquizar.github.io/2nd/Index1.html" target="_blank">
                            Porfolio
                        </Button>
                    </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Developers