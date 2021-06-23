import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import BgImg from "../../assets/images/bg-login.jpg"
import { Login, ResetPassword, ForgotPassword, Register } from "./components"
import { Button, Tooltip } from "@material-ui/core"
import Logo from "../../assets/Logo/logo.svg"
import english from "../../assets/Flag/english.png"
import hindi from "../../assets/Flag/hindi.png"
import nigeria from "../../assets/Flag/nigeria.png"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { ArrowDropDown, HelpOutline } from "@material-ui/icons"

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      background: `url(${BgImg}) center no-repeat`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundColor: "#bcdce7",
      paddingLeft: "10%",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "5%",
        background: `none center no-repeat`,
        backgroundColor: "#bcdce7",
      },
    },
    loginform: {
      position: "relative",
      backgroundColor: "#fff",
      padding: theme.spacing(6, 8),
      width: "calc((100vw - 10%)/3)",
      borderRadius: theme.spacing(1),
      display: "grid",
      gridRowGap: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        padding: theme.spacing(3, 4),
      },
    },
    langWrapper: {
      maxWidth: "110px",
      justifySelf: "flex-end",
    },
    langLi: {
      padding: theme.spacing(0, 3),
      border: "1px solid #ddd",
      cursor: "pointer",
    },
    sizeSmall: {
      fontSize: 15,
      marginRight: "5px",
    },
    formHelp: {
      width: "68px",
      justifySelf: "flex-end",
    },
  })
)
const options = ["English", "Nigeria", "Hindi"]
function LoginPage() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.loginform}>
        <div className={classes.langWrapper}>
          <List disablePadding>
            <ListItem
              disableGutters
              aria-haspopup="true"
              aria-controls="lock-menu"
              onClick={handleClickListItem}
              className={classes.langLi}
            >
              <ListItemText primary={options[selectedIndex]} />
              <ArrowDropDown />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((value, index) => (
              <MenuItem
                key={value}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                <img
                  src={
                    value === "English"
                      ? english
                      : value === "Nigeria"
                      ? nigeria
                      : hindi
                  }
                  alt={value}
                  height={16}
                  width={16}
                  style={{ marginRight: 10 }}
                />
                {value}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <img src={Logo} width="200px" />
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/reset-password" component={ResetPassword} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
          <Redirect from="/auth" to="/auth/login" />
        </Switch>
        <Tooltip title="Need any help?" placement="top" arrow>
          <Button className={classes.formHelp}>
            <HelpOutline classes={{ root: classes.sizeSmall }} />
            Help
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
export default withRouter(LoginPage)
