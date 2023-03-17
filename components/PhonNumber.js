import React from "react";
import { Box, Link, Typography, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";

function PhonNumber() {
  const AnimationNum = styled("div")`
    width: 100%;
    height: 50px;
    border-radius: 30px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    background-size: 200px 100px;
    animation: numanimation 3s ease infinite;
    background-repeat: no-repeat;

    @keyframes numanimation {
      0% {
        background-position: -150px 50%;
      }
      100% {
        background-position: 150px 50%;
      }
    }
  `;

  const AnimationNum2 = styled("div")`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 75%, 20% 50%, 0 25%);
    color: primary.main;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    font-weight: 700;
    background: linear-gradient(90deg,rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    background-size: 200px 100px;
    animation: numanimation 3s 1s ease infinite;
    background-repeat: no-repeat;
    text-decoration: none;

    @keyframes numanimation {

        0% {
            background-position: -150px 50%;
        }
        100% {
            background-position: 150px 50%;
        }
    }
  }
`;
  return (
    <Stack
    margin={'auto'}
      sx={{
        width: "250px",
        height: "50px",
        background:
          "linear-gradient(0deg, #01b636 0%, #4fe885 49%, #01b636 100%)",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <Link
        href="tel:0470346413"
        title="Aux cash for car number"
        sx={{
          width: "100%",
          height: "50px",
          borderRadius: "30px,",
          textDecoration: "none",
        }}
      >
        <AnimationNum>
          <Grid
            container
            spacing={0}
            sx={{
              width: "100%",
              height: "50px",
              justifyContent: "space-between",
            }}
          >
            <Grid xs={6.8} sm={6.8} md={6.8} item>
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "White",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                0470346413
              </Typography>
            </Grid>
            <Grid
              item
              xs={4.8}
              sm={4.8}
              md={4.8}
              sx={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 75%, 20% 50%, 0 25%)",
                color: "primary.main",
                background:
                  "linear-gradient(0deg,  #c4c0c0 0%, #ffffff 49%, #c4c0c0 100%)",
                width: "100%",
                height: "100%",
              }}
            >
              <AnimationNum2>Free Call</AnimationNum2>
            </Grid>
          </Grid>
        </AnimationNum>
      </Link>
    </Stack>
  );
}

export default PhonNumber;
