import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";

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

const useStyles=makeStyles((theme)=>({
  //contains height of our toolbar
  //https://material-ui.com/customization/default-theme/
  toolbarMargin:{
    ...theme.mixins.toolbar
  }
}))
const Header = (props) => {
  const classes=useStyles()
  return (
    <>
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3">Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}>

    </div>
    </>
  );
};

export default Header;