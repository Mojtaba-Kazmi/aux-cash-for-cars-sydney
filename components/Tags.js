import {
  CardMedia,
  CardActions,
  Typography,
  Stack,
  Grid,
  Button,
  Box,
  Container,
} from "@mui/material";

import { tag } from "@/pages/api/tags-content";
import { TagsStyle } from "@/components/GlobalComponents";

function Tags() {
  return (
    <Box
      sx={{
        color: "body.main",
        bgcolor: "#d0f9df",
        width: "100%",
        height: "50px",
        mt: "50px",
      }}
    >
      <Container>
        <Typography component={"p"}> Tags: </Typography>
        <TagsStyle>{tag[0].tags}</TagsStyle>
      </Container>
    </Box>
  );
}

export default Tags;
