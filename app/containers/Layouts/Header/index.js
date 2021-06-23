import React from "react"
import AppBar from "@material-ui/core/AppBar"
import clsx from "clsx"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Box, Hidden, makeStyles } from "@material-ui/core"
import Logo from "../../../assets/Logo/logo.svg"
import { Fragment } from "react"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
const drawerWidth = 260
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  appBarShift: {
    backgroundColor: "#ffffff !important",
    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 15%)",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  menuButton: {
    marginRight: 0,
    [theme.breakpoints.down("xs")]: {
      marginRight: 5,
    },
  },
  hide: {
    display: "none",
  },
  HeaderText: {
    color: "#fff",
    fontSize: 20,
  },
  logoSize: {
    width: 200,
  },
}))

export default function Header({ openDrawer, setOpenDrawer }) {
  const classes = useStyles()
  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }
  return (
    <Fragment>
      <Hidden xsDown>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center">
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: openDrawer,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={clsx({
                  [classes.hide]: openDrawer,
                })}
              >
                <img src={Logo} className={classes.logoSize} />
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <FormControl size="small">
                <Select
                  value={age}
                  onChange={handleChange}
                  variant="outlined"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Select Language
                  </MenuItem>
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>Hindi</MenuItem>
                  <MenuItem value={30}>Marathi</MenuItem>
                </Select>
              </FormControl>
              <IconButton color="primary">
                <NotificationsNoneIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        <AppBar position="fixed" className={clsx(classes.appBar)}>
          <Toolbar>
            <div>
              <img src={Logo} className={classes.logoSize} />
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
    </Fragment>
  )
}
