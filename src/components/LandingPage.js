import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";

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
      margin:'2rem auto',
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
    border: `2px solid ${theme.palette.common.blue}`,
    color: theme.palette.common.blue,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textTransform: "none",
  },
  heroTextContainer: {
    margin: "12px auto",
    padding: "20px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
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
    </Grid>
  );
};

export default LandingPage;
