import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import DashboardCard from "./Component/DashboardCard"
import { useMediaQuery } from "@material-ui/core"
import Card from "./Component/AppCard"
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "3.2fr .8fr .8fr 1.2fr",
    gridColumnGap: 20,
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr 1.3fr",
      gridColumnGap: 15,
      gridRowGap: 20,
      gridTemplateRows: "200 110",
      "& > :first-child": {
        gridColumnStart: 1,
        gridColumnEnd: 4,
      },
    },
  },
  appCardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridColumnGap: 20,
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridColumnGap: 0,
      gridRowGap: 20,
      margin: theme.spacing(4, 0, 10),
    },
  },
  userName: {
    margin: theme.spacing(0, 0, 4, 1),
  },
}))

export default function HomePage() {
  const classes = useStyles()
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Box p={smUp ? 6 : 4}>
      <Typography variant="h1" color="textSecondary" display="inline">
        Welcome to Commersify,
        <Typography
          variant="h1"
          color="textPrimary"
          display="inline"
          className={classes.userName}
        >
          Lubna Khan
        </Typography>
      </Typography>
      <div className={classes.dashboardGrid}>
        <DashboardCard
          title="Share link with your customers"
          desc="Your customer can visit your online store and place orders from this link"
          borderColor="#141e30"
          link="http://commersify.com"
          linkText="Get your custom domain"
          copyCard
        />
        <DashboardCard
          icon="filter_vintage"
          title="Apps"
          count="2"
          borderColor="#141e30"
        />
        <DashboardCard
          icon="people_alt"
          title="Users"
          count="1"
          borderColor="#141e30"
        />
        <DashboardCard
          icon="star"
          title="Buy Premium"
          count="₹599"
          borderColor="#141e30"
          priceText="/mo"
          priceCard
        />
      </div>
      <div>
        <Typography variant="h2" color="textPrimary">
          Grow Bussiness
        </Typography>
        <Typography variant="h4" color="textSecondary">
          Grow Bussiness with Online website, Social Selling
        </Typography>
        <div className={classes.appCardSection}>
          <Card
            heading="Online Store"
            text="Manage your online store"
            iconCount="5"
            icon="storefront"
            bgColor="#fff"
          />
          <Card
            heading="Cash & Credit Book"
            text="Cash & Credit Management"
            iconCount="5"
            icon="monetization_on"
            bgColor="#fff"
          />
        </div>
      </div>
    </Box>
  )
}
