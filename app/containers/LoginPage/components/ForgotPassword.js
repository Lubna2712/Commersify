import React, { Fragment } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Box, InputAdornment, Typography } from "@material-ui/core"
import OtpInput from "react-otp-input"
import { Link } from "react-router-dom"
import { Alert, AlertTitle } from "@material-ui/lab"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) =>
  createStyles({
    sizeSmall: {
      padding: theme.spacing(1, 8),
    },
    otpInput: {
      "& input": {
        width: "100% !important",
        padding: 10,
      },
    },
    alertBox: {
      position: "absolute",
      width: "90%",
      top: "2%",
      left: "5%",
    },
  })
)

export default function ForgotPassword() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [getObj, setObj] = React.useState({ step: 0, otp: "" })
  const handleShowOtp = (event) => {
    let { step, otp } = getObj
    step += 1
    setObj({ step, otp }) //true
  }
  // const state = { otp: "" }
  const handleChange = (value) => {
    let { step, otp } = getObj
    otp = value
    setObj({ step, otp }) //true
  }

  return (
    <div>
      <Typography variant="h3">Forgot password</Typography>
      <Collapse in={open}>
        <Alert
          severity="success"
          className={classes.alertBox}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          OTP sent to <strong>testmail@gmail.com</strong>
        </Alert>
      </Collapse>

      {getObj.step === 0 ? ( //!true -> false
        <Box mt={2}>
          <Typography gutterBottom={true}>
            Enter the email address associated with your account, and we'll
            email you a link to reset your password.
          </Typography>
          <TextField
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={8}
          >
            <Link to="/auth/login" style={{ textDecoration: "none" }}>
              <Typography variant="h3" color="textPrimary">
                Back to Login
              </Typography>
            </Link>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.sizeSmall }}
              onClick={handleShowOtp}
            >
              Next
            </Button>
          </Box>
        </Box>
      ) : (
        <Box mt={2}>
          <TextField
            size="small"
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">change</InputAdornment>
              ),
            }}
            variant="outlined"
          />
          {getObj.step === 1 ? (
            <div>
              <Box mt={2} mb={8}>
                <Typography>
                  A one-time password (OTP) will be sent to your registered
                  email address for verification.
                </Typography>
              </Box>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleShowOtp}
                >
                  Send OTP
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Box my={2}>
                <Typography>
                  Enter the one-time password (OTP) sent to your email
                  address.
                </Typography>
              </Box>
              <OtpInput
                value={getObj.otp}
                onChange={handleChange}
                numInputs={6}
                className={classes.otpInput}
                separator={<span>-</span>}
              />
              <Box mt={1} mb={8}>
                <Typography variant="body2">Resend in 30s</Typography>
              </Box>
              <Button
                disabled={open}
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  setOpen(true)
                }}
              >
                Verify
              </Button>
            </div>
          )}
        </Box>
      )}
    </div>
  )
}
