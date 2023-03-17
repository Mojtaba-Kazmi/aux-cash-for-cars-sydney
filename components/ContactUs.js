import { Grid, Box, Chip, Stack, Container,Typography } from "@mui/material";
import { styled } from '@mui/system';
import { mobile } from "./Responsive";
import ContactForm from "./ContactForm";
import ContactUsCard from "./ContactUsCard";


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
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{alignItems: "center"}}>
          <Grid item xs={11} sm={5} md={6}>
            <ContactUsCard/>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box sx={{width: "100%", height: "100%", backgroundColor: 'white.main',p:'10px',borderRadius: '10px'}}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
    </Container>
    </Root>
  );
};

export default ContactUs;
