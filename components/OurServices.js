import {
  Grid,
  Paper,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  CashForCarsSydney,
} from "@/pages/api/home-content";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  minHeight: "560px",
}));

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
        <h2>OUR SERVICES</h2>
        <Grid
          container
          sx={{
            width: "100%",
            height: "auto",
            p: "0",
            gap: "25px",
            justifyContent: "space-between",
            alignItems: "center"
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
                  height={{md:'530px', sm:'300px'}}
                  image="/assets/servises.png"
                />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
