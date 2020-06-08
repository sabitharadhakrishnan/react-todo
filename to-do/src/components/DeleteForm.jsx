import React, { useState } from "react";
//import TextField from "@material-ui/core/TextField";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
//import ListItemText from "@material-ui/core/ListItemText";
//import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteForm = ({ todos, deleteAll }) => (
  <IconButton
    aria-label="Delete"
    onClick={() => {
      deleteAll(todos);
    }}
  >
    <DeleteIcon color="primary" style={{ fontSize: 40 }} />
  </IconButton>
);

export default DeleteForm;
