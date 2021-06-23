import React, { Fragment } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      padding: theme.spacing(1, 8),
    },
  })
)

export default function Login() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Typography variant="h3">Login</Typography>
      <Box display="grid" gridGap={15} my={2}>
        <TextField
          label="Email Address"
          variant="outlined"
          size="small"
          fullWidth
        />
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
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
      </Box>
      <Link to="/auth/forgot-password" style={{ textDecoration: "none" }}>
        <Typography variant="h4" align="right" color="textSecondary">
          Forgot Password?
        </Typography>
      </Link>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
      >
        <Link to="/auth/register" style={{ textDecoration: "none" }}>
          <Typography variant="h3" color="textPrimary">
            Register Now
          </Typography>
        </Link>
        <Button
          variant="contained"
          color="primary"
          classes={{ root: classes.button }}
        >
          Login
        </Button>
      </Box>
    </div>
  )
}
