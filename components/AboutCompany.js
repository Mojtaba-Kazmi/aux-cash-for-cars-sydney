import * as React from "react";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import {
  AboutUsContent0,
  AboutUsContent1,
  AboutUsContent2,
  AboutUsContent3,
  AboutUsContent4,
} from "@/pages/api/home-content";
import { Grid, Stack } from "@mui/material";

export default function AboutCompany() {
  const router = useRouter();
  return (
    <Box
      bgcolor={router.pathname == "/" ? "secondary.main" : "transparent"}
      sx={{
        color: "body.main",
        width: "100%",
        height: "auto",
        py: "50px",
      }}
    >
      
      <Container>
      <Typography component={router.pathname == "/" ? "h4" : "h1"} variant="h4">
          ABOUT US
        </Typography>
        <Grid container>
          {/* right start */}
          <Grid textAlign="justify" item xs={12} sm={12} md={6}>
            <CardContent>
              <Typography
                sx={{
                  borderLeft: 4,
                  borderColor: "primary.main",
                  pl: "20px",
                  ml: "-20px",
                  mt: "30px",
                }}
                gutterBottom
                variant="body1"
                component="p"
                color="text.secondary"
              >
                {AboutUsContent0}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="text.secondary"
              >
                {AboutUsContent1}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="text.secondary"
              >
                {AboutUsContent2}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="text.secondary"
              >
                {AboutUsContent3}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                color="text.secondary"
              >
                {AboutUsContent4}
              </Typography>
            </CardContent>
          </Grid>
          {/* right end */}

          {/* left start */}
          <Grid item xs={12} sm={12} md={6}>
            <Stack sx={{ mt: { sm: "2", md: "120px" } }}>
              <CardMedia
                component="img"
                alt="cash for cars sydney"
                height={{ xs: "200px", sm: "" }}
                image="/assets/about-us.png"
              />
            </Stack>
          </Grid>
          {/* left end */}
        </Grid>
      </Container>
    </Box>
  );
}
