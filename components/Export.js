import {
  CardMedia,
  CardActions,
  Typography,
  Stack,
  Grid,
  Button,
  Box,
  Container,
  Link,
} from "@mui/material";
import {
  ContentExport0,
  ContentExport1,
  ContentExport2,
} from "@/pages/api/home-content";

function Export() {
  return (
    <Box
      sx={{
        color: "body.main",
        width: "100%",
        height: "auto",
        mt: "50px",
        py: "50px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {/* left */}
          <Grid
            md={5.5}
            sm={5.5}
            xs={12}
            color="primery"
            px="10px"
            order={{ xs: "2", sm: "1", md: "1" }}
            item
          >
            <CardMedia
              component="img"
              alt="cash for scrap cars sydney"
              width="100"
              image="/assets/E-pic.png"
            />
          </Grid>
          {/* right */}
          <Grid
            md={6}
            sm={6}
            xs={12}
            px="10px"
            order={{ xs: "1", sm: "2", md: "2" }}
            item
          >
            <Typography
              variant="h4"
              component="h2"
              color="primary.main"
              px="10px"
            >
              Industrial Scrap Metal Exports
            </Typography>

            <Stack
              spacing={4}
              style={{
                width: { xs: "200px", sm: "300px", md: "400px" },
                color: "text.secondary",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <Typography
                variant="body1"
                component="p"
                sx={{
                  borderLeft: 4,
                  borderColor: "primary.main",
                  pl: "20px",
                  ml: "-14px",
                  mt: "30px",
                }}
              >
                {ContentExport0}
              </Typography>
              <Typography variant="body1" component="p" pl="10px" mt="10px">
                {ContentExport1}
              </Typography>
              <Typography variant="body1" component="p" pl="10px" mt="10px">
                {ContentExport2}
              </Typography>
            </Stack>
            <CardActions>
              <Button
                size="large"
                variant="contained"
                sx={{ mx: "10px", mt: "10px", color: "white.main" }}
              >
                <Link
                  href="tel:0470346413"
                  sx={{
                    color: "white.main",
                    textDecoration: "none",
                  }}
                >
                  Contact Now
                </Link>
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Export;
