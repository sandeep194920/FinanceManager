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
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import * as actionTypes from "./store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function Register(props) {
  const history = useHistory();
  const { onRegisterUser } = props; //onRegisterUser comes from mapDispatchToProps
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const onRegisterHandler = (event) => {
    event.preventDefault();
    console.log(
      `The register email and password are ${email} and ${password} and ${fullname}`
    );
    onRegisterUser(email, password, fullname, history);
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
        Register
      </Typography>
      <form onSubmit={(event) => onRegisterHandler(event)}>
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
                  required
                  defaultValue={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                  id="standard-textarea"
                  label="Full Name"
                  placeholder="Full Name"
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  type="text"
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
                  defaultValue={email}
                  required
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
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  label="Password"
                  placeholder="Password"
                  defaultValue={password}
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
                type="submit"
                variant="contained"
                color={theme.palette.type === "dark" ? "secondary" : "primary"}
                className={classes.btn}
              >
                Register
              </Button>
              <Button size="small" href="/login">
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
      </form>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterUser: (email, password, fullname, history) =>
      dispatch(actionTypes.registerUser(email, password, fullname, history)),
  };
};

export default connect(null, mapDispatchToProps)(React.memo(Register));
