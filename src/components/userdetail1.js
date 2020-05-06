import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';  
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Customform = styled.form`
  width: 80%;
  border-radius: 15px;
  border-top: 5px solid #E0436B;
  box-shadow: -10px -10px 30px 2px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin: 0px;
    margin-bottom: 50px;
    padding: 20px;
    padding-top: 30px;
  }
`;
export default function Userdetail1() {
  const [values, setValues] = React.useState({
    FirstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    Password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
        <div>
      <Customform autoComplete="on">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item md={4}>
            <TextField
              required
              onChange={handleChange('FirstName')}
              label="FirstName"
              variant="outlined"
              defaultValue={values.FirstName}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              required
              onChange={handleChange('LastName')}
              label="LastName"
              variant="outlined"
            />{" "}
          </Grid>
          <Grid item md={4}>
            <TextField
              required
              onChange={handleChange('Email')}
              label="E-mail"
              variant="outlined"
            />{" "}
          </Grid>
          <Grid item md={4}>
            <TextField
              required
              onChange={handleChange('Username')}
              label="Username"
              variant="outlined"
            />{" "}
          </Grid>
          <Grid item md={4}>
      <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('Password')}
        endAdornment={
          <InputAdornment position="end" 
          label="Password">
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
          </Grid>
        </Grid>
      </Customform></div>
    )
}
