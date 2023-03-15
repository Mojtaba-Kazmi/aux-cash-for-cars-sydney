import React from 'react'
import { Grid,Card, CardMedia, CardContent, Container, Box, Typography, Stack, Button } from '@mui/material'
import Link from 'next/link';
import { post } from '../api/blog-content'
import ContactForm from '@/components/ContactForm'
import ContactUsCard from '@/components/ContactUsCard';
import SocialShareBtn from '@/components/GlobalComponents'
import { BigCardStyle } from '@/components/GlobalComponents'
import { NextLinkBtn } from '@/components/GlobalComponents'

function post0() {
 
  return (
    <Container>
       <Box width={'100%'} overflow ={'Hidden'}>
        
            <Grid container my={'50px'} rowGap={'50px'} justifyContent={'space-between'}>


              {/* post */}
              <Grid item md= {7.9} sm={12} xs={12}>
                <BigCardStyle>
                  <Card>
                  <CardMedia
                      sx={{ height: '300px' }}
                        image= {post[12].image}
                        title={post[12].alt}
                        alt={post[12].alt}
                        />
                    <CardContent>
                      {post[12].title}
                      {post[12].description}
                    </CardContent>

                    <Grid container sx={{justifyContent:'space-between', alignItems:'center', px: '15px', pb: '5px'}}>
                      <Grid item md={6} sm={6} xs={2}>
                          <Link href='/blog' style={{width: "10px",}}>
                            <NextLinkBtn>
                              Back
                            </NextLinkBtn>
                          </Link>
                      </Grid>
                      <Grid item md={3.8} sm={3.8} xs={9}>
                        <SocialShareBtn />
                      </Grid>
                    </Grid>
                    
                  </Card>
                </BigCardStyle>
              </Grid>

              {/* Form */}
              <Grid item md= {3.9} sm={12} xs={12}>

                <Grid container rowGap={'40px'}>
                  <Grid item md= {12} sm={12} xs={12}><ContactUsCard/></Grid>
                  <Grid item md= {12} sm={12} xs={12} ><ContactForm/></Grid>
                </Grid>
              </Grid>

            </Grid>
       </Box>
    </Container>
  )
}

export default post0
