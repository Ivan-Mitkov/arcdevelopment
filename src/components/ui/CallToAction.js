import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyle = makeStyles((theme) => ({
  btnContainer: {
    marginTop: "1rem",
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    height: "30rem",
    //fixed image
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    marginRight: "5rem",
    marginLeft: "5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  btn: {
    borderRadius: "40px",
    height: "45px",
    width: "145px",
    margin: "5rem",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 5rem",
    },
  },
}));
const CallToAction = ({ setValue }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      justify={matchesSM ? "center" : "space-between"}
      alignItems="center"
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "0" : "5rem",
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h2">
              Simple Software.<br></br> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of the 21st Century
            </Typography>
            <Grid container justify={matchesSM ? "center" : null}>
              <Button
                variant="outlined"
                className={[classes.btn, classes.learnBtnHero].join(" ")}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(2);
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={[classes.estimateBtn, classes.btn].join(" ")}
          component={Link}
          to="/estimate"
          onClick={() => {
            setValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
