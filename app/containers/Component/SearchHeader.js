import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { Box, InputBase, MenuItem } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: "white",
  },
  search: {
    position: "relative",
    border: " 1px solid #cbcbcb",
    borderRadius: theme.spacing(1),
    backgroundColor: "white",
    height: "40px",
  },
  searchIcon: {
    color: "grey",
    padding: theme.spacing(0, 0),
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "40px",
  },
  input: {
    height: "100%",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "40px",
  },
  appCardSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 20,
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridColumnGap: 0,
      gridGap: 20,
      margin: theme.spacing(4, 0, 8),
    },
  },
}))

const SearchHeader = ({Search}) => {
  const classes = useStyles()
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up("sm"))

  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={smUp ? "repeat(3, 1fr)" : `repeat(${Search ? 2 : 1}, 1fr)`}
      gridColumnGap={20}
    >
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Name, Email, Phone No.."
          classes={{
            root: classes.input,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      {Search && (
        <FormControl size="small" variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Search Status
          </InputLabel>
          <Select
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Search Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      )}
    </Box>
  )
}

export default SearchHeader
