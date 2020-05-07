import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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
export default class Personaldetails extends Component {
  render() {
    const { handleChange, details } = this.props;
    return (
      <div>
        <Customform>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item md={6}>
              <TextField
                required
                onChange={handleChange("Occupation")}
                label="Occupation"
                variant="outlined"
                defaultValue={details.Occupation}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                onChange={handleChange("Company")}
                label="Company"
                variant="outlined"
                defaultValue={details.Company}
              />{" "}
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                onChange={handleChange("Location")}
                label="Current Address"
                variant="outlined"
                defaultValue={details.Location}
              />{" "}
            </Grid>
            <Grid item md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  defaultValue={details.Gender}
                  onChange={handleChange("Gender")}
                >
                    <Grid container spacing={4} justify="center" alignItems="center">
                  <Grid item md={4}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Grid></Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Customform>
      </div>
    );
  }
}
