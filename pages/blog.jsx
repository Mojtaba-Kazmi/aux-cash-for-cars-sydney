import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { post } from './api/blog-content'
import { MiniCardStyle } from '@/components/GlobalComponents'
import { styled } from '@mui/system';
import { Grid,Typography, Container, Card, CardMedia, CardContent, Button, Box, Hidden } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ContactUsCard from '@/components/ContactUsCard';
function blog() {

    const Postanimation = styled("div")
    `
    animation: textmoving1 2s;
    animation-iteration-count: 1; 
    @keyframes textmoving1 {

        0%{
           margin-left: 20px;
        }
        100%{
            margin-left: 0px; 
         }
  `;
  const TitleContainer = styled("div")
  `
        height: 42px;  
        width: 100%;
        overflow: hidden;
        @media screen  and (max-width: 1024px) {
            height: auto; 
        }
        @media screen  and (max-width: 600px) {
            height: auto; 
        }
`;

    const Postdescription = styled('div')
        `
        height: 135px;  
        overflow: hidden;
        margin-top: 5px;
        @media screen  and (max-width: 1024px) {
            height: 80px; 
        }
        @media screen  and (max-width: 600px) {
            height: 100px; 
        }
        `;
    // post printer
    let pslength = post.length-1;
    const [nextdisable, setNextdisable] = useState(false);
    const [backdisable, setBakcdisable] = useState(true);
    let [pagenum, setPagenum] = useState(1);

    let [ps1, setPs1] = useState(pslength);
    let [ps2, setPs2] = useState(pslength-1);
    let [ps3, setPs3] = useState(pslength-2);
    let [ps4, setPs4] = useState(pslength-3);
    let [ps5, setPs5] = useState(pslength-4);
    let [ps6, setPs6] = useState(pslength-5);

    function heandelClickNext () {
        setPagenum(pagenum+1);
        // ------------------------
        setBakcdisable(false);
        if(ps1-12 <= 0){
            setNextdisable(true);
        }
        // -------------------------
        if (ps1 - 6> 0){
            setPs1(ps1-6)
        }else{
            setPs1(0);
        }

        // -------------------------
        if (ps2 - 6 > 0){
            setPs2(ps2-6)
        }else{
            setPs2(0);
        }

          // -------------------------
        if (ps3 -6 >0){
            setPs3(ps3-6)
        }else{
            setPs3(0);
        }

        // -------------------------
        if (ps4 -6 >0){
            setPs4(ps4-6)
        }else{
            setPs4(0);
        }

         // -------------------------
         if (ps5 -6 >0){
            setPs5(ps5-6)
        }else{
            setPs5(0);
        }

        // -------------------------
        if (ps6 -6 >0){
            setPs6(ps6-6)
        }else{
            setPs6(0);
        }
    }

    function heandelClickBack () {
        setPagenum(pagenum-1);
        setNextdisable(false);
        if(ps1+12 > pslength){
            setBakcdisable(true); 
        }
        // -------------------------
        if (ps1 + 6 <= pslength){
            setPs1(ps1+6);
        }

        // -------------------------
        if (ps1 + 5 <= pslength){
            setPs2(ps1+5);
        }

         // -------------------------
         if (ps1 + 4 <= pslength){
            setPs3(ps1+4);
        }

        if (ps1 + 3 <= pslength){
            setPs4(ps1+3);
        }

        if (ps1 + 2 <= pslength){
            setPs5(ps1+2);
        }

        if (ps1 + 1 <= pslength){
            setPs6(ps1+1);
        }
    }


    

  return (
    <Container>
        <Box width={'100%'} overflow ={'Hidden'}>
            <Typography variant='h4' component={"h1"} sx ={{mt: "10px", color: "primary.main"}} >Blogs</Typography>
            {/* blog right */}
                <Grid container sx={{gap: "40px", mt: "10px"}}>

                    {/* post1 in page */}
                    
                    <Grid md={3.7} sm={12} xs={12} item display={ps1 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card height ={"100%"}>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps1].image}
                                    title={post[ps1].alt}
                                    alt={post[ps1].alt}
                                />
                                
                                <CardContent >
                                <MiniCardStyle>
                                    <TitleContainer>
                                        {post[ps1].title}
                                    </TitleContainer>
                                    <Postdescription>
                                        {post[ps1].description}
                                    </Postdescription>
                                    <Typography variant='body1' component={"p"}>
                                        <Link href={"/blog/post"+ps1}>Read More</Link>
                                    </Typography>
                                    
                                </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>
                   

                    {/* post2 in page */}
                    <Grid md={3.7} sm={12} xs={12} item display={ps2 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps2].image}
                                    title={post[ps2].alt}
                                    alt={post[ps2].alt}
                                />
                                <CardContent>
                                    <MiniCardStyle>
                                        <TitleContainer>
                                            {post[ps2].title}
                                        </TitleContainer>
                                        
                                        <Postdescription >
                                            {post[ps2].description}
                                        </Postdescription>
                                        <Typography variant='body1' component={"p"}>
                                            <Link href={"/blog/post"+ps2}>Read More</Link>
                                        </Typography>
                                        
                                    </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>

                    {/* post3 in page */}
                    <Grid md={3.7} sm={12} xs={12} item display={ps3 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps3].image}
                                    title={post[ps3].alt}
                                    alt={post[ps3].alt}
                                />
                                <CardContent>
                                    <MiniCardStyle>
                                        <TitleContainer>
                                            {post[ps3].title}
                                        </TitleContainer>
                                        <Postdescription>
                                            {post[ps3].description}
                                        </Postdescription>
                                        <Typography variant='body1' component={"p"}>
                                            <Link href={"/blog/post"+ps3}>Read More</Link>
                                        </Typography>
                                        
                                    </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>

                    {/* post4 in page */}
                    <Grid md={3.7} sm={12} xs={12} item display={ps4 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps4].image}
                                    title={post[ps4].alt}
                                    alt={post[ps4].alt}
                                />
                                <CardContent>
                                    <MiniCardStyle>
                                        <TitleContainer>
                                            {post[ps4].title}
                                        </TitleContainer>
                                        <Postdescription>
                                            {post[ps4].description}
                                        </Postdescription>
                                        <Typography variant='body1' component={"p"}>
                                            <Link href={"/blog/post"+ps4}>Read More</Link>
                                        </Typography>
                                        
                                    </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>

                    {/* post5 in page */}
                    <Grid md={3.7} sm={12} xs={12} item display={ps5 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps5].image}
                                    title={post[ps5].alt}
                                    alt={post[ps5].alt}
                                />
                                <CardContent>
                                    <MiniCardStyle>
                                        <TitleContainer>
                                            {post[ps5].title}
                                        </TitleContainer>
                                        <Postdescription>
                                            {post[ps5].description}
                                        </Postdescription>
                                        <Typography variant='body1' component={"p"}>
                                            <Link href={"/blog/post"+ps5}>Read More</Link>
                                        </Typography>
                                        
                                    </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>

                    {/* post6 in page */}
                    <Grid md={3.7} sm={12} xs={12} item display={ps6 === 0 ? "none": 'flex'}>
                        <Postanimation>
                            <Card>
                                <CardMedia
                                    sx={{ height: '200px' }}
                                    image= {post[ps6].image}
                                    title={post[ps6].alt}
                                    alt={post[ps6].alt}
                                />
                                <CardContent>
                                    <MiniCardStyle>
                                        <TitleContainer>
                                            {post[ps6].title}
                                        </TitleContainer>
                                        <Postdescription>
                                            {post[ps6].description}
                                        </Postdescription>
                                        <Typography variant='body1' component={"p"}>
                                            <Link href={"/blog/post"+ps6}>Read More</Link>
                                        </Typography>
                                        
                                    </MiniCardStyle>
                                </CardContent>
                            </Card>
                        </Postanimation>
                    </Grid>
                </Grid>

                <Box sx={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", position: "fixed", bottom: "10px", right: "20px", zIndex: "10" }}>
                    <Typography variant='p' component='p'  
                    sx= {{backgroundColor:"primary.main",
                     px:"5px",py:"2px",
                     mb: "4px",
                     color: "white.main",
                     borderRadius: "4px"
                    }}>
                        Page:{pagenum}
                    </Typography>
                    <Box>
                        <Button variant='contained' sx={{ color: "white.main", mr:"5px"}}
                        onClick = {heandelClickBack}
                        disabled ={backdisable}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                        <Button variant='contained' sx={{ color: "white.main", ml:"5px"}} 
                        onClick= {heandelClickNext}
                        disabled ={nextdisable}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                    </Box>
                </Box>


            {/* blog left */}
            <Grid sx={{my: "50px", justifyContent: "space-between", alignItems: "center"}} rowGap={'50px'} container>
                <Grid item md={5.8} sm={12} xs={12}>
                    <ContactUsCard/>
                </Grid>
                <Grid item md={5.8} sm={12} xs={12}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}

export default blog
