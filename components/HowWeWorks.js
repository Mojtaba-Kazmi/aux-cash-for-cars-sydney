import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import Link from "next/link";
import { steps } from "@/pages/api/home-content";

const AllContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: #888;
`;

export default function HowItWorks() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <AllContainer fixed>
        <h2>HOW WE WORK?</h2>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 1,
                          mr: 1,
                          backgroundColor: "#01b636",
                          color: "white.main",
                        }}
                      >
                        {index === steps.length - 1 ? (
                          <Link
                            href="#"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <p>Call Now</p>
                          </Link>
                        ) : (
                          "Continue"
                        )}
                      </Button>

                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1, color: "primary.main" }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3, bgcolor: "transparent" }}>
              <Typography>
                All reading steps completed - now you know how we work!
              </Typography>
              <Button
                onClick={handleReset}
                sx={{ mt: 1, mr: 1, color: "#01b636" }}
              >
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </AllContainer>
    </Container>
  );
}
