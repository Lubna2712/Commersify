import React from "react"
import { fade, makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import LayoutHeader from "../Component/LayoutHeader"

import AssignUserCard from "../Component/AssignUserCard"
import SearchHeader from "../Component/SearchHeader"
import { Box } from "@material-ui/core"
import { Fragment } from "react"

const useStyles = makeStyles((theme) => ({
  appCardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 20,
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridGap: 0,
      gridRowGap: 20,
      margin: theme.spacing(4, 0, 8),
    },
  },
}))

const Account = () => {
  const classes = useStyles()
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Fragment>
      <LayoutHeader
        title="Applications"
        subtitle="Application Listing &amp; Configure Users"
      />
      <Box p={smUp ? 6 : 4}>
        <SearchHeader />
        <div className={classes.appCardSection}>
          <AssignUserCard
            icon="storefront"
            name="Lubna Khan"
            email="lubna@gmail.com"
          />
          <AssignUserCard
            icon="monetization_on"
            name="Arzan Khan"
            email="arzan@gmail.com"
          />
        </div>
      </Box>
    </Fragment>
  )
}
export default Account
