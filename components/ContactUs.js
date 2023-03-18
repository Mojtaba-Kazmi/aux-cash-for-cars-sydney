import { Grid, Box, Chip, Stack, Container,Typography } from "@mui/material";
import { styled } from '@mui/system';
import { mobile } from "./Responsive";
import ContactForm from "./ContactForm";
import ContactUsCard from "./ContactUsCard";

const ContactUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        py: "50px",
      }}
    >
    <Container>
    <Grid container sx={{ justifyContent: "space-between", alignItems: "center", rowGap: '25px'}}>
          <Grid item xs={12} sm={5.8} md={5.8}>
            <ContactUsCard/>
          </Grid>
          <Grid item xs={12} sm={5.8} md={5.8}>
            
              <ContactForm />
            
          </Grid>
        </Grid>
    </Container>
    </Box>
  );
};

export default ContactUs;
