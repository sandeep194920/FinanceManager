import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Hidden from "@material-ui/core/Hidden";

const Footer = () => {
  console.log("Footer");
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    copyrightGrid: {
      fontSize: "0.6em",
      marginTop: "5px",
    },
    footerRowHeading: {
      fontSize: "0.9em",
      padding: "10px",
    },
    footerRowItems: {
      fontSize: "0.8em",
      padding: "4px",
    },
  }));
  const classes = useStyles();
  return (
    <Hidden smDown>
      <footer className={classes.footer}>
        <Grid container style={{ paddingTop: "5px" }}>
          <Grid container item justify="center">
            <Grid item container direction="column" xs={2} alignItems="center">
              <Grid className={classes.footerRowHeading} item>
                Account
              </Grid>
              <Grid item className={classes.footerRowItems}>
                Login
              </Grid>
              <Grid item className={classes.footerRowItems}>
                Signup
              </Grid>
            </Grid>
            <Grid item container direction="column" xs={2} alignItems="center">
              <Grid item className={classes.footerRowHeading}>
                Support
              </Grid>
              <Grid item className={classes.footerRowItems}>
                Contact
              </Grid>
              <Grid item className={classes.footerRowItems}>
                About
              </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" xs={2}>
              <Grid item className={classes.footerRowHeading}>
                Social
              </Grid>
              <Grid item className={classes.footerRowItems}>
                Facebook
              </Grid>
              <Grid item className={classes.footerRowItems}>
                LinkedIn
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            justify="flex-end"
            style={{ marginRight: "25px" }}
          >
            <Grid item className={classes.copyrightGrid}>
              Copyright
              <IconButton>
                <CopyrightIcon style={{ color: "white", fontSize: "0.6em" }} />
              </IconButton>
              2020 Finance Manager. All rights reserved
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </Hidden>
  );
};

export default React.memo(Footer);
//<Grid item>Copyright c 2020. All rights reserved</Grid>
