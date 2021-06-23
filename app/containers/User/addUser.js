import React, { Fragment } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import Form from "../Component/FormFields"
import LayoutHeader from "../Component/LayoutHeader"
import { Box, Button, Typography } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: theme.spacing(6, 0),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "60%",
    gridGap: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      gridGap: theme.spacing(4),
      gridTemplateColumns: "1fr",
      padding: theme.spacing(4, 0, 12),
    },
  },
  formButton: {
    gridColumnEnd: 2,
    width: "50%",
  },
}))
const Account = () => {
  const classes = useStyles()
   const theme = useTheme()
   const smUp = useMediaQuery(theme.breakpoints.up("sm"))
  const fields = [
    {
      label: "Title",
      textlabel: "First name",
      type: "title",
      value: "",
      selectOption: [{ title: "Mr" }, { title: "Mrs." }, { title: "Miss" }],
    },
    {
      label: "Middle name",
      type: "text",
      value: "",
    },
    {
      label: "Last name",
      type: "text",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      value: "",
    },
    {
      label: "Phone no",
      type: "phone",
      fieldType: "tel",
      value: "",
    },
    {
      label: "Address",
      type: "text",
      value: "",
      addClass: "fullWidth",
    },
    {
      label: "Status",
      type: "select",
      value: "",
      selectOption: [
        { title: "Pending" },
        { title: "Failed" },
        { title: "Cancelled" },
        { title: "Confirmed" },
      ],
    },
    {
      label: "Assign App",
      type: "multicity",
      value: "",
    },
  ]
  return (
    <Fragment>
      <LayoutHeader
        title="Add User"
        subtitle="Details about user should be changed from here"
        backButton
      />
      <Box p={smUp ? 6 : 4}>
        <Typography variant="subtitle2">Basic Information</Typography>
        <div className={classes.formWrapper}>
          {fields.map((field) => (
            <Form {...field} />
          ))}
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
          >
            Save
          </Button>
        </div>
      </Box>
    </Fragment>
  )
}
export default Account
