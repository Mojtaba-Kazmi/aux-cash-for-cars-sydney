import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Chip,
  CardMedia,
  Box
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from '@mui/system';
import { FooterSection1 } from "@/pages/api/home-content";
import SocialShareBtn from "./GlobalComponents";
import Link from "next/link";

const Icon = styled('svg')`
  color: #01b636;
  width: 40px;
  display: block;
  height: 60px;
`;

const Gridb = styled('div')`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 10px;
`;

const navItems = [
  {
    label: "HOME",
    url: "/",
    index: 1
  },
  {
    label: "About Us",
    url: "/about",
    index: 2
  },
  {
    label: "Services",
    url: "/services",
    index: 3
  },
  {
    label: "Our Blog",
    url: "/blog",
    index: 4
  },
  {
    label: "FAQs",
    url: "/faqs",
    index: 5
  },
  {
    label: "CONTACT",
    url: "/contact",
    index: 6
  },
];

const Footer = () => {
  return (
    <>
    {/* section 1 footer(updates) starts */}
    <Stack boxShadow={12}>
    <Container>
        <Stack pt={3} pb={3}>
          <Typography variant="body2" color="text.secondary">
            Last updated on Mar 17th, 2023 at 09:56 AM
          </Typography>
        </Stack>
      </Container>
      </Stack>
    {/* section 1 footer(updates) ends */}

    {/* section 2 footer starts */}  
    <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "body.main",
          width: "100%",
          height: "auto",
          textAlign: { xs: "center", sm: "justify", md: "justify" },
          paddingBottom: "20px",
        }}
      >
        <Container>
          <Grid
            container
            sx={{justifyContent:'space-between', py: "10px"}}
          >
          {/* div what we buy starts */}
            <Grid item xs={12} sm={5.8} md={3.8} 
            mb={{md:'0', sm:'50px', xs:'50px'}}
            >
            <Typography variant="h5" color="primary" textAlign={{md:"left", sm: "left",xs:"center"}}>
                <b>What we buy?</b>
              </Typography>
                <Typography width="100%" variant="body2" textAlign={'justify'}>
                  {FooterSection1}
                </Typography>
            </Grid>
          {/* div what we buy ends */}

          {/* div share us on starts */}
              <Grid item xs={12} sm={5.8} md={3.8}
                borderTop={{md:0,sm:0,xs:1}}
                borderBottom={{md:0,sm:0,xs:1}}
                borderColor={'body.main'}
                py={{md:'0', sm:'0', xs:'10px'}}
                mb={{md:'0', sm:'50px', xs:'50px'}}
              >
              <Typography 
              variant="h5" 
              color="primary" 
              textAlign={{md:"left", sm: "left",xs:"center"}} 
              sx={{mx:'auto'}}
              width={{md:'232px',sm:'232px',xs:'300px'}}
              >
                <b>Share on</b>
              </Typography>
              <Box 
              sx={{mx:'auto'}}
              width={{md:'232px',sm:'232px',xs:'300px'}}
              >
                <SocialShareBtn />
              </Box>
              </Grid>
          {/* div share us on ends */}

          {/* div Explore now starts */}
            <Grid item xs={12} sm={12} md={3.8}>
              <Grid container
              borderTop={{md:0,sm:1,xs:0}}
              borderColor={'body.main'}
              py={{md:'0', sm:'10', xs:'0'}}
              >

                  <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="h5" color="primary" textAlign={{md:"left", sm: "left",xs:"center"}}>
                        <b>Explore now</b>
                    </Typography>
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                        <Gridb>
                          {navItems.map((item) => (
                            <Link
                              href={item.url}
                              key={item.index}
                              >
                            <Button
                              variant="outlined"
                              color="body"
                              sx={{width: '100%'}} 
                            >
                                {item.label}
                            </Button>
                            </Link>
                          ))}
                      </Gridb>

                  </Grid>
                    
                </Grid>
                
            </Grid>

          </Grid>
        </Container>
      </Box>
    {/* section 2 footer ends */}

    {/* section 3 footer starts */}
      <Container>
      <Grid
            container
            sx={{justifyContent:'space-between', py: "10px"}}
          >

          {/* div follow us on starts */}
            <Grid item xs={12} sm={3.8} md={3.8}
             mb={{md:'0', sm:'50px', xs:'50px'}}
            >
            <Typography variant="h5" color="primary" textAlign={{md:"left", sm: "left",xs:"center"}}>
                <b>Follow us on</b>
              </Typography>
              <Box 
              mx={{md:'0', sm:"0",xs:'auto'}}
              width={{md:'232px',sm:'232px',xs:'300px'}}
              sx={{display: 'flex', justifyContent: "space-between"}}
              px={{md:'0',sm:'0',xs:'30px'}}
              >
                  <Icon>
                    <FacebookRoundedIcon />
                  </Icon>
                  <Icon>
                    <InstagramIcon />
                  </Icon>
                  <Icon>
                    <PinterestIcon />
                  </Icon>
                  <Icon>
                    <YouTubeIcon />
                  </Icon>
                </Box>
              
            </Grid>
          {/* div follow us on ends */}

          {/* div location starts */}
            <Grid item xs={12} sm={3.8} md={3.8}
            borderTop={{md:0,sm:0,xs:1}}
            borderBottom={{md:0,sm:0,xs:1}}
            borderColor={'body.main'}
            py={{md:'0', sm:'0', xs:'10px'}}
            mb={{md:'0', sm:'50px', xs:'50px'}}
            >
              <Typography 
              variant="h5" 
              color="primary" 
              textAlign={{md:"left", sm: "left",xs:"center"}} 
              sx={{mx:'auto'}}
              width={{md:'232px',sm:'150px',xs:'300px'}}
              >
                <b>Our Location</b>
              </Typography>
              <Typography 
              variant="h5" 
              color="primary" 
              textAlign={{md:"left", sm: "left",xs:"center"}} 
              sx={{mx:'auto'}}
              width={{md:'232px',sm:'150px',xs:'300px'}}
              >
              <Chip
                icon={<LocationOnIcon />}
                label="Sydney Australia"
                variant="outlined"
                color="primary"
              />
              </Typography>
            </Grid>
          {/* div location ends */}

          {/* logo starts */}
            <Grid item xs={12} sm={3.8} md={3.8} >
              <Grid container 
              sx={{alignItems: "center", 
              justifyContent: "space-between"
            }}
           
              >
                <Grid item md={4} sm={4}sx={4}>
                    <Box height={'100px'} width={'100px'}>
                      <CardMedia
                        component="img"
                        image="/assets/aux-cash-for-cars-sydney.svg"
                        height={'100'}
                        
                      />
                  </Box>
                </Grid>
                <Grid item md={7.9} sm={6.5}sx={7.8}>
                    <Typography 
                    variant="p" 
                    color={"primary.main"}
                   width={'100%'}
                   display={'block'}
                   sx={{borderRight: 2,borderLeft: 2,borderColor: "primary.main", px:"2px", textAlign:"center" }}
                    >
                    AUX Cash For Car Sydney
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          {/* logo ends */}
          </Grid>
      </Container>
    {/* section 3 footer ends */}

    {/* Section 4 footer starts */}
      <Typography
        variant="body2"
        textAlign="center"
        bgcolor="secondary.main"
        color="text.secondary"
      >
        Copyright 2023 © AUX Cash for Car
      </Typography>
    {/* section 4 footer ends */}
    </>
  );
};

export default Footer;
