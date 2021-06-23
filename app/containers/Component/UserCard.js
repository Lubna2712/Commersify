import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord"
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "14px",
    borderRadius: theme.spacing(1),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "330px",
    },
  },
  userImg: {
    color: "#000",
    backgroundColor: "#99d066",
    marginRight: "10px",
  },
  userChip: {
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: theme.spacing(1),
    backgroundColor: "#f1f8e9",
    paddingBottom: "4px",
  },
  yellow: {
    color: "rgb(255, 204, 0)",
  },
  red: {
    color: "red",
  },
  blue: {
    color: "green",
  },
  grey: {
    color: "grey",
  },
  detail: {
    fontSize: "16px",
    marginLeft: "6px",
  },
  topButton: {
    marginLeft: "auto",
    position: "absolute",
    right: -5,
    top: -5,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const UserCard = (props) => {
  const classes = useStyles()
  let { name, email, datetime } = props

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const status = () => {
    if (props.heading == "Pending") return classes.yellow
    else if (props.heading == "Cancelled") return classes.red
    else if (props.heading == "Delivered") return classes.blue
    else return classes.grey;
  };
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <Box display="flex">
          <div className={classes.appCardIcon}>
            <Avatar
              alt="Lubna Khan"
              src="/static/images/avatar/1.jpg"
              className={classes.userImg}
            />
          </div>
          <div>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{email}</Typography>
          </div>
          <Box className={classes.topButton}>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
              <DeleteOutlineIcon />
            </IconButton>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                <Typography variant="h3">Delete User</Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Are you sure you want to delete the user?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  Disagree
                </Button>
                <Button
                  onClick={handleClose}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
        <Box
          display="flex"
          mt={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Chip
            label="App used : 2"
            classes={{ root: classes.userChip }}
            size="small"
          />

          <Typography variant="body1" color="textSecondary">
            {datetime}
          </Typography>
        </Box>
        <hr color="lightgrey" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={1}
        >
          <Box display="flex" alignItems="center">
            <FiberManualRecord
              className={status()}
              style={{ fontSize: "22" }}
            />
            <Typography variant="h4">{props.heading}</Typography>
          </Box>
          <Button variant="outlined" size="small">
            Edit
            <ArrowForwardIosRoundedIcon className={classes.detail} />
          </Button>
        </Box>
      </Card>
    </div>
  )
}

export default UserCard
