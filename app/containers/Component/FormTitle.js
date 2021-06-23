import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

const useStyles = makeStyles({
  phoneGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridColumnGap: 20,
  },
})

export default function FormTitle({ label, type, selectOption, textlabel }) {
  const classes = useStyles()
  const [age, setAge] = React.useState("")
  console.log("selectOption", selectOption)
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <div className={classes.phoneGrid}>
      <FormControl variant="outlined" size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={label}
          variant="outlined"
          onChange={handleChange}
        >
          {selectOption.map(({ title }) => (
            <MenuItem value={title}>{title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label={textlabel}
        type={type}
        variant="outlined"
        size="small"
        autoComplete="new-password" // disable autocomplete and autofill
      />
    </div>
  )
}
