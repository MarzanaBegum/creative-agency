import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { data, logOut } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const pages = ["Home", "Dashboard", "Admin", "Contact"];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (pageUrl) => {
    navigate(`/${pageUrl}`);
    setAnchorEl(null);
  };

  async function handleLogout() {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log("Failed to logout!");
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Creative Agency
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleMenuItemClick(page.toLowerCase())}
                  >
                    {page}
                  </MenuItem>
                ))}
                {data.email ? (
                  <MenuItem>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button onClick={handleLogout} variant="contained"
                        sx={{ my: 2, color: "white", display: "block", backgroundColor: "purple" }}>Logout</Button>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <Button variant="contained"
                        sx={{ my: 2, color: "white", display: "block", backgroundColor: "purple" }}>Signup</Button>
                    </Link>
                  </MenuItem>
                )}
              </Menu>
            </div>
          ) : (
            <Box sx={{ display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleMenuItemClick(page.toLowerCase())}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
              {data.email ? (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{ my: 2, color: "white", display: "block", backgroundColor: "purple" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{ my: 2, color: "white", display: "block", backgroundColor: "purple" }}
                  >
                    Signup
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
