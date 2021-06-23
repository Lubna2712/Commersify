import React, { Fragment } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import { Button, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { Box } from "@material-ui/core"
import ArrowBack from "@material-ui/icons/ArrowBack"

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    borderBottom: "1px solid #ddd",
    padding: theme.spacing(2, 6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 4),
    },
  },
}))
export default function LayoutHeader(props) {
  const { title, subtitle, myButton, backButton } = props
  const classes = useStyles()
  const theme = useTheme()
   const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap={smUp ? "no-wrap" : "wrap"}
      gridGap={smUp ? 0 : 10}
      className={classes.headerWrapper}
    >
      <Box display="flex" alignItems="center" gridColumnGap={15}>
        {backButton && (
          <Link to="/user" alignSelf="center">
            <ArrowBack color="primary" />
          </Link>
        )}
        <div>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h4">{subtitle}</Typography>
        </div>
      </Box>
      {myButton && (
        <Box display="flex" alignSelf="center" gridColumnGap={15}>
          <Button size="small" variant="outlined" color="primary">
            Import
          </Button>
          <Button size="small" variant="outlined" color="primary">
            Export
          </Button>
          <Link to="/add-user" style={{ textDecoration: "none" }}>
            <Button size="small" variant="contained" color="primary">
              Add User
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  )
}
