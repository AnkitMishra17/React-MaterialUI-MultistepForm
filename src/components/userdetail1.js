import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Customform = styled.form`
  width: 90%;
  border-radius: 15px;
  border-top: 5px solid #e0436b;
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
export default class Userdetail1 extends Component {
  state = {
    showPassword: false,
  };
  render() {
    const { handleChange, details } = this.props;
    const { showPassword } = this.state;
    const handleClickShowPassword = () => {
      let passwordstate = this.state.showPassword;
      this.setState({
        showPassword: !passwordstate,
      });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
      <div>
        <Customform>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item md={4}>
              <TextField
                required
                onChange={handleChange("FirstName")}
                label="FirstName"
                variant="outlined"
                defaultValue={details.FirstName}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                onChange={handleChange("LastName")}
                label="LastName"
                variant="outlined"
                defaultValue={details.LastName}
              />{" "}
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                onChange={handleChange("UserName")}
                label="Username"
                variant="outlined"
                defaultValue={details.UserName}
              />{" "}
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                onChange={handleChange("Email")}
                label="E-mail"
                variant="outlined"
                defaultValue={details.Email}
              />{" "}
            </Grid>
            <Grid item md={4}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={details.password}
                  onChange={handleChange("Password")}
                  variant="outlined"
                  defaultValue={details.Password}
                  endAdornment={
                    <InputAdornment position="end" label="Password">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Customform>
      </div>
    );
  }
}
