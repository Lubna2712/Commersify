import React, { useEffect, Fragment } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos"
import Logo from "../../../assets/Logo/logo-whitegreen.png"
import {
  Box,
  Collapse,
  Hidden,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { withRouter } from "react-router"

const drawerWidth = 260
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  lists: {
    overflowY: "auto",
    overflowX: "hidden",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    height: "100%",
    background: "linear-gradient(to bottom,#2A4564 0,#141E30 100%)",
  },
  listItemIcon: {
    minWidth: 40,
    color: theme.palette.whiteShades.l1,
    opacity: 0.7,
  },
  subListItem: {
    paddingLeft: 30,
  },
  logoSize: {
    width: 180,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight: 0,
    overflowY: "hidden",
    background: "linear-gradient(to bottom,#2A4564 0,#141E30 100%)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(11) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(11) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1, 0, 1),
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.15)",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  HeaderText: {
    color: theme.palette.whiteShades.l1,
    fontSize: 20,
  },
  listArrowIcon: {
    height: "15px",
    width: "15px",
    opacity: 0,
  },
  ListItem: {
    color: theme.palette.whiteShades.l1,
    opacity: 0.7,
  },
  customListItem: {
    borderLeft: "5px solid transparent",
    color: theme.palette.whiteShades.l1,
    opacity: 0.7,
    cursor: "pointer",
  },
  customSelected: {
    backgroundColor: "#19283b !important",
    borderLeft: "5px solid #99d066",
    color: "#99d066 !important",
    opacity: "1 !important",
    "& div": {
      color: theme.palette.whiteShades.l1,
      opacity: "1 !important",
    },
    "& svg": {
      opacity: "1 !important",
    },
  },
}))

function Sidebar({ openDrawer, setOpenDrawer, history }) {
  const classes = useStyles()
  const theme = useTheme()
  const listItem = [
    {
      id: 1,
      ListItemText: "Dashboard",
      ListItemIcon: "dashboard",
      ListItemPath: "/home",
      SubMenu: [],
    },
    {
      id: 2,
      ListItemText: "Account",
      ListItemIcon: "account_balance",
      ListItemPath: "/account",
      SubMenu: [],
    },
    {
      id: 3,
      ListItemText: "Applications",
      ListItemIcon: "filter_vintage",
      ListItemPath: "/application",
      SubMenu: [],
    },
    {
      id: 4,
      ListItemText: "Users",
      ListItemIcon: "people_alt",
      ListItemPath: "/user",
      SubMenu: [],
    },
    {
      id: 5,
      ListItemText: "Logout",
      ListItemIcon: "exit_to_app",
      ListItemPath: "/auth/login",
      SubMenu: [],
    },
  ]
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))

  const [activeList, setActiveList] = React.useState([])

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    activeList.length = 0
  }

  const handleActiveDrawer = () => {
    console.log(Logo)
    let cur = false
    for (let i = 0; i < listItem.length; i += 1) {
      for (let j = 0; j < listItem[i].SubMenu.length; j += 1) {
        // console.log(listItem[i].id); //demo to represt optimised code
        if (listItem[i].SubMenu[j].ListItemPath === window.location.pathname) {
          setActiveList([listItem[i].id])
          cur = true
          break
        }
        if (cur) break
      }
    }
  }

  useEffect(() => {
    handleActiveDrawer()
  }, [])

  useEffect(() => {
    openDrawer && handleActiveDrawer()
  }, [openDrawer])

  const handleClick = (i) => {
    if (activeList.includes(i)) {
      activeList.indexOf(i) !== -1 &&
        activeList.splice(activeList.indexOf(i), 1) // delete the present item
      setActiveList([...activeList]) // set the new array without this item
    } else {
      // activeList.length = 0;
      setActiveList([...activeList, i])
    }
  }

  const handleRoute = (route) => {
    history.push(route)
    smDown && handleDrawerClose()
  }

  const SidebarList = () => (
    <Fragment>
      <div className={classes.toolbar}>
        <Box mx="auto">
          <Typography classes={{ root: classes.HeaderText }}>
            <img src={Logo} className={classes.logoSize} />
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose} color="primary">
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <List
        disablePadding
        classes={{
          root: classes.lists,
        }}
      >
        {listItem.map((li, i, arr) => {
          let newArr = arr.filter(({ ListItemPath }) =>
            history.location.pathname.includes(ListItemPath)
          )
          let selectFlag = newArr.length == 0
          return (
            <Fragment>
              <ListItem
                title={li.ListItemText}
                classes={{
                  selected: `${classes.customSelected}` , root: `${classes.customListItem}`
                }}
                onClick={() =>
                  li.SubMenu.length > 0
                    ? handleClick(li.id)
                    : handleRoute(li.ListItemPath)
                }
                selected={
                  selectFlag
                    ? li.ListItemPath == "/home"
                    : history.location.pathname.includes(li.ListItemPath)
                }
              >
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <Icon>{li.ListItemIcon}</Icon>
                </ListItemIcon>
                <ListItemText primary={li.ListItemText} />
                <ArrowForwardIos className={classes.listArrowIcon} />
              </ListItem>
              {li.SubMenu.map((subLi) => (
                <Collapse
                  in={activeList.includes(li.id)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.subListItem}
                      selected={subLi.ListItemPath === window.location.pathname}
                      onClick={() =>
                        subLi.SubMenu.length > 0
                          ? handleClick(subLi.id)
                          : handleRoute(subLi.ListItemPath)
                      }
                    >
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <Icon>{subLi.ListItemIcon}</Icon>
                      </ListItemIcon>
                      <ListItemText primary={subLi.ListItemText} />
                    </ListItem>
                    {subLi.SubMenu.map((thirdLi) => (
                      <Collapse
                        in={activeList.includes(subLi.id)}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItem
                            button
                            className={classes.subListItem}
                            selected={
                              thirdLi.ListItemPath === window.location.pathname
                            }
                            onClick={() => handleRoute(thirdLi.ListItemPath)}
                          >
                            <ListItemIcon
                              classes={{
                                root: classes.listItemIcon,
                              }}
                            >
                              <Icon>{thirdLi.ListItemIcon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={thirdLi.ListItemText} />
                          </ListItem>
                        </List>
                      </Collapse>
                    ))}
                  </List>
                </Collapse>
              ))}
            </Fragment>
          )
        })}
      </List>
    </Fragment>
  )
  return (
    <Fragment>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, classes.paper, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openDrawer,
              [classes.drawerClose]: !openDrawer,
            }),
          }}
        >
          <SidebarList />
        </Drawer>
      </Hidden>
      {/* <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={openDrawer}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SidebarList />
        </Drawer>
      </Hidden> */}
    </Fragment>
  )
}

export default withRouter(Sidebar)
