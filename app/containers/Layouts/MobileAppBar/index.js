import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { useHistory } from "react-router-dom"
import { AccountCircle, Home, PeopleAlt, Apps } from "@material-ui/icons"

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 99,
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
})

export default function MobileAppBar() {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
    history.push(`/${newValue}`)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="" icon={<Home />} />

      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<PeopleAlt />}
      />
      <BottomNavigationAction
        label="Applications"
        value="application"
        icon={<Apps />}
      />
      <BottomNavigationAction
        label="Users"
        value="user"
        icon={<AccountCircle />}
      />
    </BottomNavigation>
  )
}
