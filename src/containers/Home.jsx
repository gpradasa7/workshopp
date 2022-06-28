import { Avatar, Typography, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { ButtonCategoria, DivFotoPerfil, H1Nombre, HomeButton } from '../Styles/style';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import { actionLogoutAsyn } from '../Redux/actions/actionLogin';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div style={{ margin: '15px' }}>
            <button style={{border:'none', background:'transparent', color:'black', fontFamily:'Raleway', marginLeft:'220px'}} onClick={() => dispatch(actionLogoutAsyn())} >Cerrar Sesión</button>

            <DivFotoPerfil >

                <div style={{ marginRight: '10px' }}>
                    <Avatar alt="Remy Sharp" src="" />
                </div>
                <div>
                    <H1Nombre>Hi!</H1Nombre>
                    <H1Nombre>kelly</H1Nombre>
                </div>
            </DivFotoPerfil>


            <Box
                sx={{
                    color: '#2E3562',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    py: 3,
                    border: 'none',
                    overflow: 'auto',
                    width: 343,
                    scrollSnapType: 'y mandatory',
                    '& > *': {
                        scrollSnapAlign: 'center',
                    },
                    '::-webkit-scrollbar': { display: 'none' },
                }}
            >

                <Card
                    row

                    variant="outlined"
                    sx={{
                        backgroundColor: '#B4FFD8',
                        gap: 2,
                        '--Card-padding': (theme) => theme.spacing(2),
                    }}
                >

                    <Box sx={{ whiteSpace: 'nowrap', color: 'white' }}>
                        <Typography fontWeight="md">holi</Typography>
                        <Typography style={{ color: 'white' }} level="body2">jeje</Typography>
                    </Box>
                    <AspectRatio
                        ratio="1"
                        sx={{ minWidth: 110, borderRadius: 'sm', overflow: 'auto' }}
                    >
                        <img
                            src=""
                        />
                    </AspectRatio>
                </Card>

            </Box>
            <div>
                <div style={{ display: 'flex' }}>
                    <h1>Recently viewed</h1>
                </div>

                <div>



                    <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(180, 255, 216, 0.16);', height: '194px', padding: '0', margin: '20px 0' }}>

                        <CardMedia
                            style={{ borderRadius: '11px 11px 0px 0px' }}
                            component="img"
                            height="120"
                            image=""
                            alt="green iguana"
                        />

                        <CardContent sx={{ padding: '5px 20px', display: 'flex' }}>
                            <div>
                                <Typography style={{ color: 'white', fontSize: '18px', fontFamily: 'Raleway' }} gutterBottom variant="h5" component="div">
                                    jejejeje
                                </Typography>
                                <Typography style={{ fontSize: '9px', color: 'white', width: '200px', fontWeight: '300' }} variant="body2" color="text.secondary">
                                    descripcion
                                </Typography>
                            </div>
                            <div>
                                <h2 style={{ color: 'white', fontFamily: 'Raleway', fontSize: '14px', marginLeft: '60px' }}> duracion</h2>

                            </div>

                        </CardContent>

                    </Card>



                </div>
            </div>
        </div>
    );
};

export default Home;