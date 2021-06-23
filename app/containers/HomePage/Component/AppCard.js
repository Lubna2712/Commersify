import React, { Fragment } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Icon, Typography } from "@material-ui/core"
import StarIcon from "@material-ui/icons/Star"
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded"

const useStyles = makeStyles((theme) => ({
  appCard: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: theme.spacing(1),
    padding: 10,
    border: "1px solid #dcdcdc",
    // boxShadow: "rgb(217 217 217) 4px 4px 1px",
  },
  appCardRating: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
  },
  appCardIcon: {
    width: "20%",
    marginRight: theme.spacing(2),
  },
  fontSizeLarge: {
    fontSize: 65,
  },
  appCardContent: {
    width: "80%",
  },
}))

const starRatingTag = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    if (count <= 5) list.push(<StarIcon style={{ color: "#FFDF00", fontSize: 24 }} />)
  }
  return list
}

const Card = ({ heading, text, icon, iconCount, bgColor }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div
      className={classes.appCard}
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <div className={classes.appCardIcon}>
        <Icon classes={{ root: classes.fontSizeLarge }}>{icon}</Icon>
      </div>
      <div className={classes.appCardContent}>
        <Typography variant="h3" color="textPrimary">
          {heading}
        </Typography>
        <Typography variant="body1">{text}</Typography>
        <div className={classes.appCardRating}>
          <div>{starRatingTag(iconCount)}</div>
          <KeyboardArrowRightRoundedIcon />
        </div>
      </div>
    </div>
  )
}

export default Card
