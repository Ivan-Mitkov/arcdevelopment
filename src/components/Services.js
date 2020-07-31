import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/styles";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "40px",
    height: "45px",
    width: "145px",
    margin: "1rem",
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  btnContainer: {
    marginTop: "1rem",
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
  },
  subtitle: {
    lineHeight: "2",
  },
  icon: {
    marginLeft: "2rem",
    width: "15rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "4rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "15px",
      marginTop: "4rem",
    },
  },
  serviceBlock: {
    marginTop: "8rem",
    marginBottom: "8rem",
    maxWidth: "1800px",
  },
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container direction="column" className={classes.serviceBlock}>
        <Grid item container direction='row'>
          <div style={{flex:'1'}}></div>
          <Typography variant="h2" gutterBottom style={{flex:'2'}}>Services</Typography>
        </Grid>
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-start"}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? "0" : "5rem",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software development</Typography>
              <Typography variant="subtitle1">
                Save Energy. Save Time. Save Money
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                variant="outlined"
                className={[classes.btn, classes.learnBtnHero].join(" ")}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: "10px" }}> Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={`${theme.palette.common.blue}`}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="custom software development"
                src={customSoftwareIcon}
                className={classes.icon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        {/* Mobile App block */}
        <Grid
          item
          className={classes.serviceContainer}
          style={{
            marginRight: matchesSM ? "0" : "5rem",
            textAlign: matchesSM ? "center" : "flex-end",
          }}
        >
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
          >
            <Grid item>
              <Typography variant="h4">Mobile App Development</Typography>
              <Typography variant="subtitle1">
                Extend Funcionality. Extend Access. Increase Engagement
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Integrate your web experience or create a standalone app{" "}
                {matchesSM ? "null" : <br></br>}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                variant="outlined"
                className={[classes.btn, classes.learnBtnHero].join(" ")}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: "10px" }}> Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={`${theme.palette.common.blue}`}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="Mobile App development"
                src={mobileAppsIcon}
                className={classes.icon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        {/* Website block */}
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-start"}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? "0" : "5rem",
                textAlign: matchesSM ? "center" : undefined,
              }}
              className={classes.service}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1">
                Reach More. Discover More. Sell More
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for search engines. Build for speed{" "}
              </Typography>
              <Button
                variant="outlined"
                className={[classes.btn, classes.learnBtnHero].join(" ")}
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: "10px" }}> Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={`${theme.palette.common.blue}`}
                ></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="website development"
                src={websiteIcon}
                className={classes.icon}
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
