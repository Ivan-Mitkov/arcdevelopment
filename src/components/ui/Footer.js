import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import foofterAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: theme.zIndex.modal + "1",
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fonstSize: ".75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  icon: {
    width: "2rem",
    height: "2rem",
  },
  socialContainer: {
    position: "absolute",
    bottom: "20px",
    right: "50px",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;

  const handleChange = (e) => {
    const dataset = e.target.dataset.value;
    const num = dataset || 0;
    setValue(Number(num));
  };
  const handleMenuIndexChange = (e) => {
    const dataset = e.target.dataset.index;
    const num = dataset || 0;
    setSelectedIndex(Number(num));
  };
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
          spacing={2}
          onClick={handleChange}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                data-value="0"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              data-value="1"
              onClick={(e) => handleMenuIndexChange(e)}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                data-index="0"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                data-index="1"
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                data-index="2"
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
                data-index="3"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} data-value="2">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} data-value="3">
              <Grid item className={classes.link} component={Link} to="/about">
                About Us
              </Grid>
              <Grid item className={classes.link} component={Link} to="/about">
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to="/about">
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem} data-value="4">
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={foofterAdornment}
        className={classes.adornment}
      />
      <Grid container className={classes.socialContainer} justify="flex-end" spacing={1}>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="facebook" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="twitter" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="instagram" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
