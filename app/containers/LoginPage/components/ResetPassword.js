import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Box, Typography } from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"

const useStyles = makeStyles((theme) =>
  createStyles({
    checkPassText: {
      display: "flex",
      alignItems: "center",
    }
  })
)

export default function ResetPassword() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const preventDefault = event => event.preventDefault();
  const handleChangeCheckbox = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <div>
      <Typography variant="h3">Reset Password</Typography>
      <Box display="grid" gridGap={15} my={2}>
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Set Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <TextField
          label="Confirm Password"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        mb={1}
        style={{ color: "#4caf50" }}
      >
        <CheckIcon fontSize="inherit" style={{ marginRight: 5 }} />
        <Typography variant="h5">6 - 40 characters in length</Typography>
      </Box>
      <Box display="flex" alignItems="center" style={{ color: "#4caf50" }}>
        <CheckIcon fontSize="inherit" style={{ marginRight: 5 }} />
        <Typography variant="h5">
          New Password &amp; Confirm Password must be same
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
      >
        <Link to="/auth/register" style={{ textDecoration: "none" }}>
          <Typography variant="h3" color="textPrimary">
            Back To Login
          </Typography>
        </Link>
        <Button
          variant="contained"
          color="primary"
          classes={{ root: classes.button }}
        >
          Reset Password
        </Button>
      </Box>
    </div>
  )
}
