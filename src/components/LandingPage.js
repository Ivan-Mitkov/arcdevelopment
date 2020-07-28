import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  animation: {
    maxWidth: "50rem",
    minWidth: "17rem",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      margin: "2rem auto",
      maxWidth: "32rem",
    },
  },
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

  heroTextContainer: {
    margin: "12px auto",
    padding: "20px",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    lineHeight: "2",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "8rem",
    [theme.breakpoints.down("xs")]: {
      padding: "15px",
      marginTop: "4rem",
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%,-50%)`,
    boxShadow: theme.shadows[10],
    borderRadius: "12px",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      borderRadius: 0,
    },
  },
  infoBackground: {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  whiteButton: {
    color: "white",
    borderColor: "white",
    margin: "8px 0",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* hero block */}
      <Grid sm item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justify="center" className={classes.btnContainer}>
              <Grid item>
                <Button
                  className={[classes.estimateBtn, classes.btn].join(" ")}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={[classes.btn, classes.learnBtnHero].join(" ")}
                >
                  <span style={{ marginRight: "10px" }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={`${theme.palette.common.blue}`}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>
      {/* end hero block */}
      {/* Custom Software block */}
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
          textAlign: matchesSM ? "center" : undefined,
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
      {/* Revolution Card */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "40rem", position: "relative", marginTop: "12rem" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    variant="outlined"
                    className={[classes.btn, classes.learnBtnHero].join(" ")}
                  >
                    <span style={{ marginRight: "10px" }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={`${theme.palette.common.blue}`}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      {/* Information block */}
      <Grid item>
        <Grid
          container
          direction="row"
          style={{ height: "70vh" }}
          alignItems="center"
          direction={`${matchesXS ? "column" : "row"}`}
        >
          <Grid
            item
            style={{
              position: "absolute",
              width: "100%",
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Grid container>
              <Grid item sm style={{ margin: matchesSM ? "2rem" : "5rem" }}>
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal
                  </Typography>
                  <Button
                    variant="outlined"
                    className={[
                      classes.btn,
                      classes.learnBtnHero,
                      classes.whiteButton,
                    ].join(" ")}
                  >
                    <span style={{ marginRight: "10px" }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={`${theme.palette.common.white}`}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  margin: matchesSM ? "2rem" : "5rem",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say Hello </Typography>
                  <Button
                    variant="outlined"
                    className={[
                      classes.btn,
                      classes.learnBtnHero,
                      classes.whiteButton,
                    ].join(" ")}
                  >
                    <span style={{ marginRight: "10px" }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={`${theme.palette.common.white}`}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground}></div>
        </Grid>
      </Grid>
      {/* CALL TO ACTION */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
