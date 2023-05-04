import { Grid, CardMedia, Typography, Box, Container } from "@mui/material";
import { maintext } from "@/pages/api/carremoval-content";
import { useRouter } from "next/router";

export default function CarRemoval() {
  const router = useRouter();
  return (
    <Box
      bgcolor={router.pathname == "/" ? "secondary.main" : "transparent"}
      sx={{
        width: "100%",
        height: "auto",
        py: "50px",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            width: "100%",
            height: "auto",
            p: "0",
            gap: "25px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid xs={12} sm={5.5} md={5.5} item>
            {maintext[0].description}
          </Grid>

          <Grid xs={12} sm={5.5} md={5.5} item>
            <CardMedia
              component="img"
              alt="Car removal Sydney"
              height={{ md: "530px", sm: "300px" }}
              image="/assets/servises.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
