import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      color="primary"
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue("");
      }}
    >
      <TextField
        variant="filled"
        fullWidth="true"
        placeholder="I also want to do ..."
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
