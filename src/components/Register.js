import React from "react";
import useStyles from "./styles/RegisterLoginStyles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

function Register(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
    >
      <Typography
        className={classes.heading}
        variant={matchesSM ? "subtitle1" : "h6"}
        gutterBottom
      >
        Register
      </Typography>
      <Card
        className={classes.registerLoginContainer}
        // classes={root:classes.}
        variant="outlined"
      >
        <CardContent className={classes.CardContent}>
          <Grid>
            <Grid className={classes.registerLoginContainerRow}>
              <IconButton disableRipple className={classes.icon}>
                <PersonIcon />
              </IconButton>
              <TextField
                className={classes.textField}
                id="standard-textarea"
                label="Full Name"
                placeholder="Full Name"
                multiline
                color={theme.palette.type === "dark" ? "secondary" : "primary"}
              />
            </Grid>
            <Grid className={classes.registerLoginContainerRow}>
              <IconButton
                disableRipple
                style={{
                  marginRight: "0.5em",
                  marginTop: "0.4em",
                  cursor: "default",
                }}
              >
                <MailOutlineIcon />
              </IconButton>
              <TextField
                className={classes.textField}
                id="standard-textarea"
                label="Email ID"
                placeholder="Email ID"
                multiline
                color={theme.palette.type === "dark" ? "secondary" : "primary"}
              />
            </Grid>

            <Grid className={classes.registerLoginContainerRow}>
              <IconButton
                disableRipple
                style={{
                  marginRight: "0.5em",
                  marginTop: "0.4em",
                  cursor: "default",
                }}
              >
                <LockIcon />
              </IconButton>
              <TextField
                className={classes.textField}
                id="standard-textarea"
                label="Password"
                placeholder="Password"
                multiline
                color={theme.palette.type === "dark" ? "secondary" : "primary"}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color={theme.palette.type === "dark" ? "secondary" : "primary"}
              className={classes.btn}
            >
              Register
            </Button>
            <Button size="small">
              <Typography
                style={{ textDecorationLine: "underline" }}
                variant="caption"
                gutterBottom
              >
                Already a member ? Login
              </Typography>
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Register;
