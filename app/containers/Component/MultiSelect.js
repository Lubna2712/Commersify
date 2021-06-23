import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function MultiSelect({label}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        size="small"
        id="multiple-limit-tags"
        options={optionSelect}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder=""
          />
        )}
      />
    </div>
  )
}

// Select Option
const optionSelect = [
  { title: "Online Store" },
  { title: "Cash & Credits" },
  { title: "Gpay" },
  { title: "Cash" },
  { title: "Credit" },
];
