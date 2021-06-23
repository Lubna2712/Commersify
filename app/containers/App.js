/*
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom"
import { Hidden, makeStyles, useTheme } from "@material-ui/core"
import Header from "../containers/Layouts/Header"
import Sidebar from "../containers/Layouts/Sidebar"
import HomePage from "../containers/HomePage"
import Account from "../containers/Account"
import Application from "../containers/Application"
import User from "../containers/User"
import AddUser from "../containers/User/addUser"
import NotFoundPage from "../containers/NotFoundPage"
import MobileAppBar from "./Layouts/MobileAppBar"
import LoginPage from "../containers/LoginPage"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "unset",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content({ isAuth }) {
    return {
      backgroundColor: "#fcfcfc",
      width: "100%",
      overflowY: "auto",
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        maxHeight: isAuth ? "calc(100vh - 56px)" : "100vh",
      },
    }
  },
}))
function App() {
  const myvar = ""
  const classes = useStyles({isAuth})
  const theme = useTheme()
  const isAuth = window.location.pathname.indexOf("auth") < 0
  const [openDrawer, setOpenDrawer] = React.useState(true)

  return (
    <Fragment>
      <Helmet titleTemplate="%s - Commersify" defaultTitle="Commersify">
        <meta name="description" content="A Commersify application" />
      </Helmet>
      <main
        className={
          window.location.pathname.indexOf("auth") <= 0 && classes.root
        }
      >
        {window.location.pathname.indexOf("auth") <= 0 && (
          <Fragment>
            <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <Hidden xsDown>
              <Sidebar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            </Hidden>
            <Hidden smUp>
              <MobileAppBar />
            </Hidden>
          </Fragment>
        )}
        <div className={classes.content}>
          {window.location.pathname.indexOf("auth") < 0 && (
            <div className={classes.toolbar} />
          )}
          <Switch>
            <Route path="/auth" component={LoginPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/account" component={Account} />
            <Route path="/application" component={Application} />
            <Route path="/user" component={User} />
            <Route path="/add-user" component={AddUser} />
            <Route exact path="/" component={HomePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </main>

      {/* <Footer /> */}
    </Fragment>
  )
}
export default withRouter(App)
