import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
}));

export default function InputText(props) {
  const classes = useStyles();
  const {Label,Type,Placeholder,Name,handleChange,error} = props;
  
  return (
      <div>
      <TextField
          id={Label}
          name={Name}
          label={Label}
          type={Type}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
          placeholder = {Placeholder}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {error}
      </div>
  );
}