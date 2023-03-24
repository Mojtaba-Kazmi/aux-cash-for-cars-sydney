
import { useState, useEffect } from "react";
import { Container, Box, Grid, CardMedia } from "@mui/material"
import PhonNumber from "./PhonNumber"
import { styled } from "@mui/system";
import {slidepage} from '../pages/api/slider-content'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SlideContentStyle = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  h1, h2{
    font-size: 48px;
    color: #ffffff;
    
  }
  P{
    color: #ffffff;
    font-size: 25px;
  }
  @media screen and (max-width: 600px) {
    
    gap: 40px;
  h1, h2{
    font-size: 28px;
    color: #ffffff;
    
  }
  P{
    color: #ffffff;
    font-size: 20px;
  }
  }
`
const Arowbtn = styled('div')`
  div{
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    font-size: 30px;
    top: 50vh;
    z-index: 100;
    background: linear-gradient(0deg, #00c03a 0%, #4fe885 49%, #01b636 100%);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: all 4s ease-in infinite;
  }
  @media screen and (max-width: 600px) {
    div{
      top: 40vh;
    }
  }
`

const Animation1 = styled ('div')
`
animation: movetoleft 4s ;
animation-iteration-count: 1;
animation-fill-mode: ease;

@keyframes movetoleft {

  0%{
    position: relative;
    right: -50%;
  }
  100%{
    position: relative;
    right: 0%;
   }   
  }
`
const Animation2 = styled ('div')
`
animation: movetoleft 4s ;
animation-iteration-count: 1;
animation-fill-mode: ease;

@keyframes movetoleft {

  0%{
    position: relative;
    right: -50%;
  }
  100%{
    position: relative;
    right: 0%;
   }   
  }
`




function ImageSlider2() {

  let [slideNum,setSlideNum] = useState(0);
  let [animation, setAnimation] = useState(true);


  function hendelRightbtn (){
    if(slideNum<slidepage.length-1){
      setSlideNum(slideNum+1);
      setAnimation(!animation);
    }else{
      setSlideNum(0);
      setAnimation(!animation);
    }
  }

  function hendelLeftbtn (){
    if(slideNum == 0){
      setSlideNum(slidepage.length-1);
      setAnimation(!animation);
    }else{
      setSlideNum(slideNum-1);
      setAnimation(!animation);
    }
  }



//   function autoSlider (){
//     if(slideNum<slidepage.length-1){
//       setSlideNum(slideNum+1);
//       setAnimation(!animation);
//     }else{
//       setSlideNum(0);
//       setAnimation(!animation);
//     }
//   }
  
  
//   setTimeout(() => {
//     autoSlider();
// }, 12000);


  return (
    <Box
    sx={{
            backgroundColor: "#03b437",
            color: "body.main",
            width: "100%",    
    }}>
      <Container sx={{position: "relative"}}>
        {/* Arow buttons start */}
          <Arowbtn>
                  <Box left={{md: '0', sm: '30px', xs: '20px'}} onClick={hendelLeftbtn} >
                      <ArrowBackIosNewIcon/>
                  </Box>
            </Arowbtn>
            <Arowbtn>
                  <Box right={{md: '0', sm: '30px', xs: '20px'}} onClick={hendelRightbtn}>
                      <ArrowForwardIosIcon/>
                  </Box>
          </Arowbtn>
        {/* Arow buttons end */}

        {/* slide  start */}
        {animation ? 
        <Animation1>
            <Box
        height={{md: '80vh', sm:'90vh', xs:'90vh'}}
        sx={{width: '100%'}}
        >
         
           <Grid container height={"100%"} justifyContent={'space-between'}>

              
             {/* slide image start */}
             
                <Grid item md={5.8} sm={12} xs={12}
                height={{md:'100%', sm:'70%', xs:'45%'}}
              
                >
                    <CardMedia
                      sx={{ height: "100%" }}
                      image={slidepage[slideNum].image}
                      title={slidepage[slideNum].alt}
                      alt={slidepage[slideNum].alt}
                    />
                </Grid>
                
              {/* slide image end */}

              {/* slide text start */}
                <Grid item md={5.8} sm={12} xs={12}
                height={{md:'100%', sm:'30%', xs:'55%'}}
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems:'center'
              
                }}>
                  <SlideContentStyle>
                    {slidepage[slideNum].title}
                    {slidepage[slideNum].description}
                    
                  </SlideContentStyle>
                  <Box mt={{md:'50px', sm: "5px", xs: "40px"}}>
                    <PhonNumber/>
                  </Box>
                </Grid>
              {/* slide text end */}

           </Grid>
        </Box>
        {/* slide  start */}
        </Animation1> : <Animation2>
        <Box
        height={{md: '80vh', sm:'90vh', xs:'90vh'}}
        sx={{width: '100%'}}
        >
         
           <Grid container height={"100%"} justifyContent={'space-between'}>

              
             {/* slide image start */}
             
                <Grid item md={5.8} sm={12} xs={12}
                height={{md:'100%', sm:'70%', xs:'45%'}}
              
                >
                    <CardMedia
                      sx={{ height: "100%" }}
                      image={slidepage[slideNum].image}
                      title={slidepage[slideNum].alt}
                      alt={slidepage[slideNum].alt}
                    />
                </Grid>
                
              {/* slide image end */}

              {/* slide text start */}
                <Grid item md={5.8} sm={12} xs={12}
                height={{md:'100%', sm:'30%', xs:'55%'}}
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems:'center'
              
                }}>
                  <SlideContentStyle>
                    {slidepage[slideNum].title}
                    {slidepage[slideNum].description}
                    
                  </SlideContentStyle>
                  <Box mt={{md:'50px', sm: "5px", xs: "40px"}}>
                    <PhonNumber/>
                  </Box>
                </Grid>
              {/* slide text end */}

           </Grid>
        </Box>
        {/* slide  start */}
        </Animation2>  }
        
      </Container>
    </Box>
  )
}

export default ImageSlider2
