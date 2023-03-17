import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import {
  SatisfactionAndComplianceContent,
  OurCompatriot,
  Perfection,
  Innovation,
  Sustainability,
  content,
  OurVision,
  OurMission,
} from "@/pages/api/home-content";

function value() {
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
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          {/* left */}
          <Grid md={6} sm={6} xs={12} item>
            <Card elevation={0} sx={{px: "5px", backgroundColor:'transparent'}}>
              <CardMedia
                component="img"
                height="auto"
                image="/assets/our-value.jpg"
                sx={{ mb: "25px", borderRadius: "20px", boxShadow: 3, width: "100%" }}
              />
              <CardContent sx={{ p: "4px" }}>
                <Grid
                  container
                  sx={{
                    justifyContent: "space-between",
                    height: "auto",
                    gap: "20px",
                  }}
                >
                  {/*Our Mission  */}
                  <Grid md={5.5} sm={12} item>
                    <Card sx={{ height: "100%" }} elevation={3} style={{backgroundColor:'transparent'}}>
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="h2"
                          color={"primary.main"}
                          fontWeight = {"600"}
                        >
                          Our Mission
                        </Typography>
                        <Typography
                          variant="p"
                          component={'p'}
                          sx={{color:"body.main", textAlign:"justify"}}
                        >
                          {OurMission}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/*OUR VISION */}
                  <Grid md={5.5} sm={12} item>
                    <Card elevation={3} style={{backgroundColor:'transparent'}}>
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="h2"
                          color={"primary.main"}
                          fontWeight = {"600"}
                        >
                          OUR VISION
                        </Typography>
                        <Typography
                          variant="p"
                          component={'p'}
                          color="body.main"
                          textAlign={"justify"}
                        >
                          {OurVision}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right */}
          <Grid md={5.5} sm={5.5} xs={12} color="primery" px='10px' item>
            <Typography variant="h5" component="h2" color={"primary"} fontWeight = {"600"}>
              OUR VALUES
            </Typography>

            {/*content start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              {content}
            </Typography>
            {/*content end  */}

            {/*Satisfaction and Compliance start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              <Typography
                variant="bod1"
                component={"span"}
                fontWeight={"600"}
                letterSpacing = {"1px"}
                color={"primary.main"}
                display={"inline-block"}
              >
                Satisfaction and Compliance:
              </Typography>
              {SatisfactionAndComplianceContent}
            </Typography>
            {/*Satisfaction and Compliance end  */}

            {/*Our compatriot start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              <Typography
                variant="bod1"
                component={"span"}
                letterSpacing = {"1px"}
                fontWeight={"600"}
                color={"primary.main"}
                display={"inline-block"}
              >
                Our compatriot:
              </Typography>
              {OurCompatriot}
            </Typography>
            {/*Our compatriot end  */}

            {/*Perfection start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              <Typography
                variant="bod1"
                component={"span"}
                letterSpacing = {"1px"}
                fontWeight={"600"}
                color={"primary.main"}
                display={"inline-block"}
              >
                Perfection:
              </Typography>
              {Perfection}
            </Typography>
            {/*Perfection end  */}

            {/*Innovation start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              <Typography
                variant="bod1"
                component={"span"}
                letterSpacing = {"1px"}
                fontWeight={"600"}
                color={"primary.main"}
                display={"inline-block"}
              >
                Innovation:
              </Typography>
              {Innovation}
            </Typography>
            {/*Innovation end  */}

            {/*Sustainability start  */}
            <Typography
              variant="body1"
              sx={{
                borderBottom: 2,
                borderColor: "primary.main",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              <Typography
                variant="bod1"
                component={"span"}
                letterSpacing = {"1px"}
                fontWeight={"600"}
                color={"primary.main"}
                display={"inline-block"}
              >
                Sustainability:
              </Typography>
              {Sustainability}
            </Typography>
            {/*Sustainability end  */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default value;
