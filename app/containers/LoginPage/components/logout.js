import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import LoginImg from '../../images/login.jpg';

export default function Logout() {
  const classes = useStyles();

  return (
    <div className={classes.loginform}>
      <h2>Reset Password</h2>
      <form>
        <FormControl variant="outlined" className={classes.txtwidth}>
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          className={classes.txtwidth}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.txtwidth}
        >
          Reset Password
        </Button>
        <div className={classes.flexButton}>
          <Button variant="contained" color="secondary">
            Back to Login
          </Button>
        </div>
      </form>
    </div>
  );
}
