import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  //contains height of our toolbar
  //https://material-ui.com/customization/default-theme/
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
  },
  logo: {
    height: "5rem",
    [theme.breakpoints.down("md")]: {
      height: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    "&:hover": {
      opacity: 1,
    },
  },
  btn: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",

    height: "45px",
    color: "white",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#ffffff",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      margin: "0 12px 0 auto",
    },
  },
  drawerIcon: {
    height: "3rem",
    width: "3rem",
    [theme.breakpoints.down("md")]: {
      height: "2.5rem",
      width: "2.5rem",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appBar: {
    zIndex: theme.zIndex.modal + "1",
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  //for swipeable drawer
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, val) => {
    const dataset = e.target.dataset.value;
    setValue(dataset || val);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: " Website Development", link: "/websites" },
  ];
  useEffect(() => {
    const num = [
      "/",
      "/services",
      "/revolution",
      "/about",
      "/contact",
      "/estimate",
    ].indexOf(window.location.pathname);
    if (num > -1) {
      setValue(num);
    } else {
      setValue(1);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          label="Services"
          className={classes.tab}
          component={Link}
          to="/services"
          onMouseOver={(e) => handleClick(e)}
        />
        <Tab
          label="The Revolution"
          className={classes.tab}
          component={Link}
          to="/revolution"
        />
        <Tab
          label="About Us"
          className={classes.tab}
          component={Link}
          to="/about"
        />
        <Tab
          label="Contact Us"
          className={classes.tab}
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btn}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: theme.zIndex.modal + "2" }}
      >
        {menuOptions.map((m, i) => (
          <MenuItem
            key={m.name}
            component={Link}
            to={m.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {m.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List
          disablePadding
          onClick={(e) => {
            setOpenDrawer(false);
            handleChange(e);
          }}
        >
          <ListItem
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
              disableTypography
              data-value="0"
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/services"
            divider
            button
            selected={value === 1}
          >
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
              data-value="1"
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/revolution"
            divider
            button
            selected={value === 2}
            data-value="2"
          >
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/about"
            divider
            button
            selected={value === 3}
            data-value="3"
          >
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            divider
            button
            selected={value === 4}
            data-value="4"
          >
            <ListItemText
              disableTypography
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/estimate"
            divider
            button
            className={classes.drawerItemEstimate}
            selected={value === 5}
            data-value="5"
          >
            <ListItemText
              disableTypography
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
