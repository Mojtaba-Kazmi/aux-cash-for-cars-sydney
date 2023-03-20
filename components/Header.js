import * as React from "react";
import Image from "next/image";
import logo from "../public/assets/aux-cash-for-cars-sydney.svg";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Divider,
  Button,
  Drawer,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const drawerWidthMobile = 220;
const drawerWidthIpad = 400;

const navItems = [
  {
    label: "HOME",
    url: "/",
    index: 0,
  },
  {
    label: "ABOUT US",
    url: "/about",
    index: 1,
  },
  {
    label: "SERVICES",
    url: "/services",
    index: 2,
  },
  {
    label: "BLOG",
    url: "/blog",
    index: 3,
  },
  {
    label: "FAQs",
    url: "/faqs",
    index: 4,
  },
  {
    label: "CONTACT US",
    url: "/contact",
    index: 5,
  },
];

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.bg.main, // using primary color for background
  position: "sticky",
}));

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} textAlign="center">
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      {navItems.map((item) => (
        <>
          <Link
            key={item.index}
            href={item.url}
            style={{ color: "#888", display: "block", padding: "25px" }}
          >
            {item.label}
          </Link>
          <Divider />
        </>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HeaderAppBar>
        <Container fixed>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuIcon style={{ color: "#1b5e20" }} />
              </IconButton>
            </Box>

            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.index}
                  href={item.url}
                  style={{
                    width: "120px",
                    height: "50px",
                    display: "inline-block",
                  }}
                >
                  <Button
                    sx={{ display: "block", width: "100%", height: "100%" }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </HeaderAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { sm: drawerWidthIpad, xs: drawerWidthMobile },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
