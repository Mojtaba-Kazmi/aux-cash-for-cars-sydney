import {
  Grid,
  CardMedia,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { CashForCarsSydney } from "@/pages/api/home-content";
import { useRouter } from "next/router";

export default function OurServices() {
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
        <Typography component={router.pathname == "/" ? "h4" : "h1"} variant="h4">
          OUR SERVICES
        </Typography>
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
            <Typography variant="body1" component="p" textAlign={"justify"}>
              {CashForCarsSydney}
            </Typography>
          </Grid>

          <Grid xs={12} sm={5.5} md={5.5} item>
            <CardMedia
              component="img"
              alt="green iguana"
              height={{ md: "530px", sm: "300px" }}
              image="/assets/servises.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
