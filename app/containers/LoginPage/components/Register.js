import React, { Fragment, useState } from "react"
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
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import MaterialUiPhoneNumber from "material-ui-phone-number"

const useStyles = makeStyles((theme) =>
  createStyles({
    sizeSmall: {
      padding: theme.spacing(1, 8),
    },
    flex: {
      display: "flex",
      flexDirection: "row",
    },
    phoneButton: {
      "& Button": {},
    },
  })
)

export default function Register(checked) {
  const classes = useStyles()
  const [showEmail, setShowEmail] = React.useState("email")
  const handleShowEmail = (event) => {
    setShowEmail(event.target.value)
  }
  const [values, setValues] = React.useState([
    {
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    },
    {
      formType: "email",
    },
  ])
  const [phoneNo, setPhoneNo] = React.useState()
  const handlePhoneNo = (value) => {
    setPhoneNo(value)
  }
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
    <Fragment>
      <div>
        <Typography variant="h3">Register Now</Typography>
        <form>
          <RadioGroup
            className={classes.flex}
            value={showEmail}
            onChange={handleShowEmail}
          >
            <FormControlLabel
              value="email"
              control={<Radio color="primary" size="small" />}
              label="Email"
            />
            <FormControlLabel
              value="mobile"
              control={<Radio color="primary" size="small" />}
              label="Mobile No."
            />
          </RadioGroup>
          <Box mt={4} mb={3}>
            {showEmail === "email" ? (
              <TextField
                label="Email Address"
                variant="outlined"
                size="small"
                fullWidth
              />
            ) : (
              <div>
                <MaterialUiPhoneNumber
                  defaultCountry={"us"}
                  onChange={handlePhoneNo}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Mobile No"
                  className={classes.phoneButton}
                />
              </div>
            )}
          </Box>
          <FormControl variant="outlined" size="small" fullWidth>
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
              labelWidth={100}
            />
          </FormControl>
       
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={8}
          >
            <Link to="/auth/login" style={{ textDecoration: "none" }}>
              <Typography variant="h3" color="textPrimary">
                Login
              </Typography>
            </Link>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.sizeSmall }}
            >
              Register Now
            </Button>
          </Box>
        </form>
      </div>
    </Fragment>
  )
}
