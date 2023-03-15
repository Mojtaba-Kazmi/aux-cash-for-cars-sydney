import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftOutlined } from "@mui/icons-material";
import { ArrowRightOutlined } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { mobile, iPad } from "./Responsive";
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import PhonNumber from "./PhonNumber";

const AllContainer = styled(Container)`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #03b437;
  position: relative;
  overflow: hidden;
  color: #fff;
  ${mobile({
    height: "auto",
  })}
`;

const Arrow = styled('div')`
  width: 30px;
  height: 30px;
  background: linear-gradient(0deg, #00c03a 0%, #4fe885 49%, #01b636 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  butt0n:hover{
    background: linear-gradient(0deg,  #c4c0c0 0%, #ffffff 49%, #c4c0c0 100%);
    color: #01b636;
    border: #01b636 solid 2px;
    transition: all 400ms;
  }
  z-index: 2;
`;

const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled('div')`
  width: 100vw;
  height: auto;
  display: flex;
  justify-Content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  ${iPad({
    flexDirection: 'column',
  })}
`;

const ImgContainer = styled('div')`
  height: auto;
  margin-left: -25px;
  flex: 1;
  ${iPad({
    width: '90%',
    marginLeft: '-90px'
  })}
  ${mobile({
    width: '90%',
    marginLeft: '-60px'
  })}
`;

const ImageSize = styled(Image)`
  height: 80%;
  width: 90%;
  margin-bottom: -4px;
  ${iPad({
    width: '100%',
    height: 'auto'
  })}
  ${mobile({
    height: "auto",
  })}
`;

const InfoContainer = styled('div')`
  flex: 1;
  width: 500px;
  height: auto;
  padding-bottom: 40px;
  padding-right: 250px;
  ${iPad({
    width: '900px',
    paddingLeft: '40px',
  })}
  ${mobile({
    width: '440px',
  })}
`;

const Title = styled('div')`
  font-size: 42px;
  width: 490px;
  ${iPad({
    marginTop: "50px",
    width: '600px',
    fontSize: "25px",
  })}
  ${mobile({
    width: '290px',
    marginTop: "50px",
    marginBottom: "-40px",
    fontSize: "25px",
  })}
`;

const Description = styled('div')`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  text-align: justify;
  width: 470px;
  letter-spacing: 3px;
  ${iPad({
    width: '600px',
  })}
  ${mobile({
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: "0px",
    height: '50px',
    width: '300px',
    padding: '0 20px',
  })}
`;

const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); //the maximum value of the slideIndex should be 2, not 3.
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); //the minimum value of the slideIndex should be 0, not -1.
    }
  };

  return (
    <>
    <Box
    sx={{
            backgroundColor: "#03b437",
            color: "body.main",
            width: "100%",    
    }}
    >
      <Container>
      <AllContainer maxWidth="ls">
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {images.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <ImageSize
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                  <Box sx={{width: "100%" }}>
                    <PhonNumber />
                  </Box>
                  
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </AllContainer>
      </Container>
      </Box>
    </>
  );
};

export default ImageSlider;
