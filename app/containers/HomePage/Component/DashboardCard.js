import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  Button,
  Hidden,
  Icon,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded"
import { Share } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  dashboardcard({ copyCard }) {
    return {
      backgroundColor: "#FFF",
      borderRadius: theme.spacing(1),
      boxShadow: "0 1px 2px #d9d9d9",
      marginBottom: theme.spacing(6),
      border: "1px solid #dcdcdc",
      padding: 15,
      borderLeft: "4px solid transparent",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "120px",
      display: copyCard ? "block" : "flex",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(0),
        padding: 10,
        minHeight: "auto",
        borderLeft: "rgb(220, 220, 220)",
      },
    }
  },
  dashboardIcon: {
    display: "flex",
    backgroundColor: "#f3f7fb",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "44px",
    color: "#84aaca",
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  cardIconSize: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  cardData({ copyCard }) {
    return {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: copyCard ? "left" : "right",
      marginBottom: copyCard ? 10 : 0,
      [theme.breakpoints.down("sm")]: {
        textAlign: "left",
      },
    }
  },
  cardTitle({ copyCard, priceCard }) {
    let obj = {
      fontSize: 16,
      fontWeight: 400,
      color: "#3a3a3a",
    }
    if (copyCard || priceCard) {
      obj.fontSize = 18
      obj.fontWeight = 500
    }
    return obj
  },
  cardTitle2({ priceCard }) {
    return {
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    }
  },
  cardCount: {
    fontWeight: "700",
    fontSize: 20,
    paddingTop: 5,
    color: "#3a3a3a",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumn: "2fr 1fr",
      gridRowGap: theme.spacing(4),
    },
  },
  cardLinkText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#3a3a3a",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridColumnEnd: 3,
      gridColumnStart: 1,
      backgroundColor: "#146eb4",
      color: "#ffffff",
      width: "100%",
      justifyContent: "center",
      padding: theme.spacing(1, 0),
      borderRadius: theme.spacing(1),
      border: "1px solid #84aaca",
    },
  },
  cardLink: {
    fontSize: 14,
    textDecoration: "none",
  },
  cardFlex: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  mobileSize: {
    fontSize: 24,
    marginTop: 4,
  },
}))
const DashboardCard = ({
  title,
  desc,
  count,
  icon,
  borderColor,
  copyCard,
  priceCard,
  link,
  linkText,
  priceText,
}) => {
  const classes = useStyles({ copyCard, priceCard })
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <div
      className={classes.dashboardcard}
      style={{
        borderLeftColor: `${borderColor}`,
      }}
    >
      <Fragment>
        {icon && (
          <Hidden smDown>
            <div className={!copyCard && classes.dashboardIcon}>
              <Icon className={classes.cardIconSize}>{icon}</Icon>
            </div>
          </Hidden>
        )}
        <div className={classes.cardData}>
          <div className={`${classes.cardTitle} ${classes.cardTitle2}`}>
            {title}
          </div>
          {priceCard ? (
            <div className={classes.cardFlex}>
              {count && (
                <Typography variant="h3" className={classes.mobileSize}>
                  {count}
                </Typography>
              )}
              {priceText && <Typography variant="h6">{priceText}</Typography>}
            </div>
          ) : (
            <Fragment>
              {count && (
                <Typography variant={smUp ? "h3" : "h2"}>{count}</Typography>
              )}
            </Fragment>
          )}
          {desc && <Typography variant="body1">{desc}</Typography>}
        </div>
        {link && (
          <div className={classes.flexBetween}>
            <Link to={link} className={classes.cardLink}>
              {link}
            </Link>
            <Hidden smUp>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<Share />}
              >
                Share
              </Button>
            </Hidden>
            <Link to={link} className={classes.cardLinkText}>
              {linkText}
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </div>
        )}
      </Fragment>
    </div>
  )
}
export default DashboardCard
