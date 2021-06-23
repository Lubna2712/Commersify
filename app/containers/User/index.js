import React from "react"
import { fade, makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import UserCard from "../Component/UserCard"
import LayoutHeader from "../Component/LayoutHeader"
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
      gridColumnGap: 0,
      gridGap: 20,
      margin: theme.spacing(4, 0, 10),
    },
  },
}))

const Users = () => {
  const classes = useStyles()
   const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))

  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Fragment>
      <LayoutHeader
        title="Users"
        subtitle="User &amp; Assign apps"
        myButton
      />
      <Box p={smUp ? 6 : 4}>
        <SearchHeader Search />
        <div className={classes.appCardSection}>
          <UserCard
            heading="Cancelled"
            name="Lubna Khan"
            email="lubna@gmail.com"
            datetime="01/06/2021 12:43:12"
          />
          <UserCard
            heading="Delivered"
            name="Arzan Khan"
            email="arzan@gmail.com"
            datetime="20/06/2021 12:43:12"
          />
        </div>
      </Box>
    </Fragment>
  )
}

export default Users
