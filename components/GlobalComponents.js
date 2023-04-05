import { Grid, Typography, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
            url={"https://auxcashforcarsydney.com" + useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <FacebookRoundedIcon />
            </Icon>
          </FacebookShareButton>

          <PinterestShareButton
            url={"https://auxcashforcarsydney.com" + useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <PinterestIcon />
            </Icon>
          </PinterestShareButton>

          <TwitterShareButton
            url={"https://auxcashforcarsydney.com" + useRouter().pathname}
            hashtag={"#cashForCar"}
          >
            <Icon>
              <TwitterIcon />
            </Icon>
          </TwitterShareButton>

          <WhatsappShareButton
            url={"https://auxcashforcarsydney.com" + useRouter().pathname}
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

export const BigCardStyle = styled("div")`width: 100%;
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
  b {
    font-weight: 600;
    color: #01b636;
  }

  @media screen and (max-width: 600px) {
    h1{
      font-size: 18px;
      text-align: left;
    }
    h2{
      font-size: 16px;
      text-align: left;
    }
    h3, h4, h5, h6{
      font-size: 14px;
      text-align: left;
    }
  }
}`;

export const MiniCardStyle = styled("div")`
width: 100%;
h1{
    font-size: 18px;
    letter-spacing: 0.5px;
    text-align: justify;
}
p{
    color: #888888;
    margin-top: 18px;
}

}`;

export const Description = styled("div")`
  height: 60px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    line-height: 20px;
    height: 60px;
  }
  @media screen and (max-width: 600px) {
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
