import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
  menu: {
    width: 200,
  },
}));

export default function Selects(props) {
  const classes = useStyles();
  const { Label, Placeholder, Options,Name,handleChange } = props;

  return (
    <div>
      <TextField
        id={Label}
        select
        name={Name}
        label={Label}
        className={classes.textField}
        placeholder={Placeholder}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        onBlur={handleChange}
      >
        {Options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}