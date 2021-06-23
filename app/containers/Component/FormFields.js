import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  Select,
  Switch,
} from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import PhoneNoBox from "./PhoneNoBox";
import Dropzone from "./DropZone";
import FormTitle from "./FormTitle";
import Button from "@material-ui/core/Button";
import MultiSelect from "./MultiSelect";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    [theme.breakpoints.down("sm")]: {
      gridColumnEnd: 2,
    },
  },
  GlobalSize: {
    "& svg": {
      height: 22,
      width: 22,
    },
  },
  input: {
    display: "none",
  },
  SelectIcon: {
    top: "auto",
  },
}));

export default function Form({ label, selectOption, textlabel, type, fieldType, value, addClass, variant, color, fileClass }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangeCheckbox = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  if (type === "autocomplete") {
    return (
      <Autocomplete
        id=""
        classes={{ endAdornment: classes.SelectIcon }}
        options={selectOption}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            size="small"
            autoComplete="new-password" // disable autocomplete and autofill
          />
        )}
      />
    );
  }
  if (type === "select") {
    return (
      <FormControl variant="outlined" size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select labelId="demo-simple-select-label" label={label} variant="outlined" onChange={handleChange}>
          {selectOption.map(({ title }) => (
            <MenuItem value={title}>{title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  if (type === "password") {
    return (
      <FormControl variant="outlined" size="small">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment
              position="end"
              classes={{
                root: classes.GlobalSize,
              }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  }
  if (type === "radio") {
    return (
      <FormControlLabel
        value="other"
        control={<Radio color="primary" />}
        label={label}
        size="small"
        classes={{ root: classes.GlobalSize }}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <FormControlLabel
        control={<Checkbox onChange={handleChangeCheckbox} name="checkedB" color="primary" classes={{ root: classes.GlobalSize }} />}
        label={label}
      />
    );
  }
  if (type === "switch") {
    return <FormControlLabel control={<Switch name="checkedB" color="primary" />} label={label} />;
  }
  if (type === "phone") {
    return <PhoneNoBox label={label} type={fieldType} />;
  }
  if (type === "title") {
    return <FormTitle label={label} type={fieldType} selectOption={selectOption} textlabel={textlabel} />;
  }
  if (type === "dropzone") {
    return <Dropzone label={label} />;
  }
  if (type === "multicity") {
    return <MultiSelect label={label} />;
  }
  if (type === "file") {
    return (
      <Fragment>
        <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Attach file
          </Button>
        </label>
      </Fragment>
    );
  }
  if (type === "button") {
    return (
      <div>
        <Button variant={variant} color={color}>
          {label}
        </Button>
      </div>
    );
  }
  if (addClass) {
    return (
      <TextField
        label={label}
        type={type}
        variant="outlined"
        size="small"
        className={classes[addClass]}
        autoComplete="new-password" // disable autocomplete and autofill
      />
    );
  }
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      size="small"
      autoComplete="new-password" // disable autocomplete and autofill
    />
  );
}
