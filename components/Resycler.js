import React from 'react'
import { CardMedia, Typography, Stack, Grid, Container, Box } from "@mui/material";
import { ResyclerContnet1, ResyclerContnet2 } from '@/pages/api/home-content';
import styled from "styled-components";
import { mobile } from "./Responsive";


const Resycler = () => {
  return (
    <Box
    sx={{
            backgroundColor: "secondary.main",
            color: "body.main",
            width: "100%",
            height: "auto",
            mt: "50px",
            py: "10px",
            pb: '60px',    
    }}
    >
    <Container>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={5.5} md={5.5} mt={15}>
          <CardMedia
            component="img"
            alt="green iguana"
            width="100"
            image="/assets/professional.png"
          />
        </Grid>

        <Grid item xs={12} sm={6.5} md={6.5}>

        <Stack spacing={2} style={{ width:{ xs: '200px', sm:'250px', md: '300px' } }}>
        <Typography variant="h4" component={"h2"} color="primary.main" fontWeight={"500"}>
          (AUX Cash for Car Sydney) is your Professional and Friendly Scrap Metal Recyclers
        </Typography>
          <Typography ml={5} gutterBottom variant="body1" color="primary.main"><b>SYDNEY PREMIER AUTO WRECKER</b></Typography>
          <Typography  variant="body1" textAlign={'justify'}>{ResyclerContnet1}</Typography>
          <Typography  variant="body1" textAlign={'justify'}>{ResyclerContnet2}</Typography>
        </Stack>
        
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}

export default Resycler