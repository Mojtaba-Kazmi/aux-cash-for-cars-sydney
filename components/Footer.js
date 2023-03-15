import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Chip,
  CardMedia,
  Box,
  Card,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from '@mui/system';
import { FooterSection1 } from "@/pages/api/home-content";
import { mobile } from "./Responsive";
import SocialShareBtn from "./GlobalComponents";

const Icon = styled('svg')`
  color: #01b636;
  width: 40px;
  display: block;
  height: 60px;
`;

const Center = styled('div')`
${mobile({
  paddingLeft: "60px",
})}
`;

const navItems = [
  {
    label: "About Us",
    url: "/about",
    index: 1,
  },
  {
    label: "Our Services",
    url: "/services",
    index: 2,
  },
  {
    label: "Our Blog",
    url: "/blog",
    index: 3,
  },
  {
    label: "FAQs",
    url: "/faq",
    index: 4,
  },
];

const bussiness = [
  {
    label: "Cash For Cars Sydney",
    url: "/services",
    index: 0,
  },
  {
    label: "Cash for Scrap Metal",
    url: "/servicess",
    index: 1,
  },
  {
    label: "Cash For Bins Sydney",
    url: "/services",
    index: 2,
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
            Last updated on January 30th, 2023 at 09:56 pm
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
            rowSpacing={{ xs: 1, sm: 2, md: 2 }}
            columnSpacing={{ xs: 1, sm: 1, md: 9 }}
          >
          {/* div what we buy starts */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="primary.main" gutterBottom>
                <b>What we buy?</b>
              </Typography>
              <Center>
                <Typography width="200px" variant="body2">
                  {FooterSection1}
                </Typography>
              </Center>
            </Grid>
          {/* div what we buy ends */}

          {/* div share us on starts */}
              <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" color="primary">
                <b>Share on</b>
              </Typography>
            <SocialShareBtn />
              </Grid>
          {/* div share us on ends */}

          {/* div bussiness starts */}
            <Grid item xs={12} sm={6} md={3}>
              <Center>
                <Stack direction="column" spacing={1} width="250px">
                  <Typography variant="h5" color="primary" textAlign="center">
                    <b>Explore now</b>
                  </Typography>
                  {navItems.map((item) => (
                    <Button
                      variant="outlined"
                      color="body"
                      key={item.index}
                      to={item.url}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Center>
            </Grid>

          {/* div services starts */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction="column" spacing={1}>
                <Typography variant="h5" color="primary" textAlign="center">
                  <b>Other Bussiness</b>
                </Typography>
                {bussiness.map((item) => (
                  <Button color="body" key={item.index} to={item.url}>
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Grid>
          {/* div services ends */}
          </Grid>
        </Container>
      </Box>
    {/* section 2 footer ends */}

    {/* section 3 footer starts */}
      <Container>
        <Box textAlign="center" height={{xs:'56vh', sm:'17vh', md:'27vh'}}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 35 }}>

          {/* div follow us on starts */}
            <Grid mt={6} item xs={12} sm={4} md={4}>
              <Typography variant="h5" color="primary">
                <b>Follow us on</b>
              </Typography>
              <Center>
                <Stack direction="row" spacing={3} sm={{ pl: "7" }}>
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
                </Stack>
              </Center>
            </Grid>
          {/* div follow us on ends */}

          {/* div location starts */}
            <Grid mt={6} item xs={12} sm={4} md={4}>
              <Typography variant="h5" color="primary">
                <b>Our Location</b>
              </Typography>
              <Chip
                icon={<LocationOnIcon />}
                label="Sydney Australia"
                variant="outlined"
                color="primary"
              />
            </Grid>
          {/* div location ends */}

          {/* logo starts */}
            <Grid item xs={12} sm={4} md={4} sx={{display:'flex', alignItems: "center", justifyContent: "center"}}>
              <Box>
                  <CardMedia
                    component="img"
                    image="/assets/aux-cash-for-cars-sydney.svg"
                    width={'100px'}
                    height={'175px'}
                  />
                </Box>
            </Grid>
          {/* logo ends */}
          </Grid>
        </Box>
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
