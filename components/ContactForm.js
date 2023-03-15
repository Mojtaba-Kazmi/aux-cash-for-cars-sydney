import { TextField, Stack, Button, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Stack
      component="form"
      autoComplete="off"
      direction="column"
      spacing={{ xs: 1, sm: 1, md: 2 }}
      action='https://formspree.io/f/mjvdoala' 
      method="POST"
    >
      <Typography
        variant="h4"
        component={"h2"}
        color="primary.main"
        fontWeight={"500"}
      >
        Send Us A Massage
      </Typography>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={1}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Company Name"
          name="Company Name"
          type="text"
          variant="filled"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Contact Name"
          name="Contact Name"
          type='text'
          required
          variant="filled"
        />
      </Stack>

      <TextField 
        id="outlined-basic" 
        label="Phone Number" 
        name="Phone Number" 
        type='tel'
        variant="filled" 
      />
      <TextField 
        id="outlined-basic" 
        label="Email" 
        type='email'
        required 
        variant="filled"
     />
      <TextField
        id="outlined-multiline-static"
        label="Message"
        name="Message"
        type='text'
        multiline
        rows={4}
        variant="filled"
        required
      />
      <Button 
        variant="contained" 
        type="submit"
        sx={{ color: "white.main" }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default ContactForm;
