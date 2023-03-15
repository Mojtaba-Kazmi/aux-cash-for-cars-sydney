import React from 'react'
import { Box, Stack,Typography, Grid} from '@mui/material'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhonNumber from './PhonNumber';


function ContactUsCard() {
  return (
    <Grid
    sx={{rowGap: "10px", textAlign:'center'}}
    container
    bgcolor='white.main'
    p={3}
    alignItems='center'
    borderRadius={2}
    boxShadow={3}
    
  >
    <Grid item md={12} xs={12} sm={12}>
        <Typography variant="h4" component={"h2"} color="primary.main" fontWeight={"500"}>
            Contact Us
        </Typography>
    </Grid>
    <Grid item md={12} xs={12} sm={12}>
        <Box
        width={'250px'}
        height={'50px'}
        m={'auto'}
        color="white.main"
        bgcolor="primary.main"
        p={1}
        borderRadius={6}
        sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}
        >
            <LocationOnIcon /> Sydney Australia
        </Box>
    </Grid>
    <Grid item 
    md={12} xs={12} sm={12}
    >
        <PhonNumber />
    </Grid>

  </Grid>
  )
}

export default ContactUsCard
