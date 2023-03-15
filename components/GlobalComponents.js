import { Grid, Typography, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from "@mui/system";
import { mobile, iPad } from "./Responsive";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "next-share";

const SocialShareBtn = () => {
  const Icon = styled("svg")`
    color: #01b636;
    width: 40px;
    display: block;
    height: 60px;
    ${mobile({
      width: "30px",
    })}
  `;

  const Center = styled("div")`
    ${mobile({
      paddingLeft: "60px",
    })}
  `;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Center>
        <Stack direction="row" spacing={3}>
          <FacebookShareButton
            url={useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <FacebookRoundedIcon />
            </Icon>
          </FacebookShareButton>

          <PinterestShareButton
            url={useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <PinterestIcon />
            </Icon>
          </PinterestShareButton>

          <TwitterShareButton
            url={useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <TwitterIcon />
            </Icon>
          </TwitterShareButton>

          <WhatsappShareButton
            url={useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <WhatsAppIcon />
            </Icon>
          </WhatsappShareButton>
        </Stack>
      </Center>
    </Grid>
  );
};

export default SocialShareBtn;

export const Line = styled("div")`
  border-left: 4px solid #01b636;
  margin: 30px 20px;
  ${iPad({
    border: "none",
  })}
`;

export const FaqStyle = styled("span")`
  h5 {
    color: #01b636;
    padding-bottom: 12px;
  }
  p {
    color: #888;
    padding-bottom: 10px;
  }
  a {
    color: #01b636;
    text-decoration: none;
  }
`;

export const BigCardStyle = styled("div")`width: 100%;
h1, h2, h3, h4, h5, h6{
  color: #01b636;    
}
  h1{
    font-size: 24px;
    margin-bottom: 10px;
  }
  h2{
    font-size: 20px;
    margin-bottom: 10px;
  }
  h3{
    font-size: 18px;
    margin-bottom: 10px;
  }
  ol, ul{
    padding: 10px 20px 0 40px ;
    color:  #888888;
  }
  li{
    margin-bottom: 10px;
  }
  p{
    color: #888888;
    margin-bottom: 10px;
  }
  a{
    text-decoration: none;
    color: #01b636;
  }
  b {
    font-weight: 600;
    color: #01b636;
  }
}`;

export const MiniCardStyle = styled("div")`width: 100%;
h1{
    font-size: 18px;
    color: #01b636;
    letter-spacing: 0.5px;
}
p{
    color: #888888;
    margin-top: 18px;
}
a{
    text-decoration: none;
    color: #01b636;
}
}`;

export const Description = styled('div')
        `
        height: 60px;  
        overflow: hidden;
        @media screen  and (max-width: 1024px) {
          line-height: 20px;
            height: 60px; 
        }
        @media screen  and (max-width: 600px) {
            height: 80px; 
        }
        `;

export const NextLinkBtn = styled("div")`
width: 70px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: #01b636;
border-radius: 5px;
}`;
