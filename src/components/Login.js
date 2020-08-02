import React, { useState } from "react";
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
import LockIcon from "@material-ui/icons/Lock";
import * as actionTypes from "./store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function Login(props) {
  const history = useHistory();
  const { onLoginUser } = props; //onLoginUser comes from mapDispatchToProps
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler = (event) => {
    event.preventDefault();
    console.log(`The login email and password are ${email} and ${password}`);
    onLoginUser(email, password, history);
  };

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
        Login
      </Typography>
      <form onSubmit={(event) => onLoginHandler(event)}>
        <Card className={classes.registerLoginContainer} variant="outlined">
          <CardContent className={classes.CardContent}>
            <Grid>
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
                  onChange={(event) => setEmail(event.target.value)}
                  id="standard-textarea"
                  label="Email ID"
                  placeholder="Email ID"
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  type="email"
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
                  onChange={(event) => setPassword(event.target.value)}
                  label="Password"
                  placeholder="Password"
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  type="password"
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
                type="submit"
              >
                Login
              </Button>
              <Button size="small" href="/register">
                <Typography
                  style={{ textDecorationLine: "underline" }}
                  variant="caption"
                  gutterBottom
                >
                  Not a member yet? Register
                </Typography>
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (email, password, history) =>
      dispatch(actionTypes.loginUser(email, password, history)),
  };
};

export default connect(null, mapDispatchToProps)(React.memo(Login));
