import React, { useState } from "react"
import { DropzoneArea } from "material-ui-dropzone"
import { Button } from "@material-ui/core"

export default function Dropzone({ label }) {
  const [files, setFile] = useState([])
  const handleChange = (files) => {
    setFile(files)
  }
  return (
    <div>
      <Button variant="contained" color="primary" mb={3}>
        {label}
      </Button>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        // , 'video/*', 'application/*' to add videos & application
        onChange={handleChange.bind(this)}
        // showFileNames
        dropzoneText="Drop files here"
        // className={classes[fileClass]}
        showAlerts={false}
        filesLimit={5}
      />
    </div>
  )
}
