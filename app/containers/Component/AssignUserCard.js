import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { Icon } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MoreVertIcon from "@material-ui/icons/MoreVert"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "14px",
    position: "relative",
    borderRadius: theme.spacing(1),
  },
  fontSizeLarge: {
    fontSize: 65,
  },
  appCardIcon: {
    width: "20%",
    marginRight: theme.spacing(2),
  },
  topButton: {
    marginLeft: "auto",
    position: "absolute",
    right: -5,
    top: -5,
  },
}))
const options = ["Assign User", "Assign User"]

const ITEM_HEIGHT = 20
const AssignUserCard = (props) => {
  const classes = useStyles()
  let { icon, name, email } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <Box display="flex">
          <div className={classes.appCardIcon}>
            <Icon classes={{ root: classes.fontSizeLarge }}>{icon}</Icon>
          </div>
          <div>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{email}</Typography>
          </div>
          <Box ml="auto" className={classes.topButton}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <hr color="lightgrey" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
        >
          <Typography variant="h3">Assign Users</Typography>
          <Typography variant="body1">3</Typography>
        </Box>
      </Card>
    </div>
  )
}

export default AssignUserCard
