import React from 'react'
import { CardMedia, Typography, Stack, Grid, Container, Box } from "@mui/material";
import { ResyclerContnet1, ResyclerContnet2 } from '@/pages/api/home-content';


const Resycler = () => {
  return (
    <Box
      bgcolor={"secondary.main"}
      sx={{
        width: "100%",
        height: "auto",
        py: "50px",
      }}
    >
    <Container>
    <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>

        <Grid item xs={12} sm={6.5} md={6.5}>

        <Stack spacing={2} style={{ width:{ xs: '200px', sm:'250px', md: '300px' } }}>
        <h2 style={{textAlign: 'justify'}}>
          (Aux Cash for Car Sydney) is your Professional and Friendly Scrap Metal Recyclers
        </h2>
          <Typography ml={5} gutterBottom variant="body1" color="primary.main"><b>SYDNEY PREMIER AUTO WRECKER</b></Typography>
          <Typography  variant="body1" textAlign={'justify'}>{ResyclerContnet1}</Typography>
          <Typography  variant="body1" textAlign={'justify'}>{ResyclerContnet2}</Typography>
        </Stack>
        
        </Grid>

        <Grid item xs={12} sm={5} md={5} >
          <CardMedia
            component="img"
            alt="cash for cars nsw"
            width="100"
            image="/assets/professional.png"
          />
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}

export default Resycler