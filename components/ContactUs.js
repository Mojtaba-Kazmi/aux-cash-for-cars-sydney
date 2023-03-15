import { Grid, Box, Chip, Stack, Container,Typography } from "@mui/material";
import { styled } from '@mui/system';
import { mobile } from "./Responsive";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactForm from "./ContactForm";

import PhonNumber from "./PhonNumber";

const Root = styled('div')`
  background-image: url("./assets/context-background.jpg");
  height: max-content;
  padding-bottom: 60px;
  background-repeate: no-repeate;
  ${mobile({
    paddingBottom: "50px",
  })}
`;

const ContactUs = () => {
  return (
    <Root>
    <Container>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={11} sm={5} md={6}>
          <Typography variant="h4" component={"h2"} color="primary.main" fontWeight={"500"}>
            Contact Us
          </Typography>
            <Stack
              spacing={2}
              width={{ xs: "350px", sm:'300px', md: "350px" }}
              bgcolor='white.main'
              p={3}
              alignItems='center'
              borderRadius={2}
              boxShadow={3}
              mt={{xs: '10px', sm: '90px'}}
            >
              <Box
                color="white.main"
                textAlign={'center'}
                bgcolor="primary.main"
                p={1}
                borderRadius={6}
                width={'250px'}
              ><LocationOnIcon /> Sydney Australia</Box>
              <PhonNumber />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
    </Container>
    </Root>
  );
};

export default ContactUs;
