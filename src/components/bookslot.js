import "date-fns";
import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
export default class Bookslot extends Component {
  render() {
    const { handleChange, details } = this.props;
    return (
      <Customform>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3} justify="space-around">
            <Grid item md={5}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Select Date"
                format="MM/dd/yyyy"
                minDate={new Date()}
                maxDate={new Date("2021-05-31")}
                value={details.Date}
                InputAdornmentProps={{ position: "start" }}
                onChange={handleChange("Date")}
              />
            </Grid>
            <Grid item md={5}>
              <KeyboardTimePicker
                inputVariant="outlined"
                id="time-picker"
                label="Time"
                value={details.Time}
                onChange={handleChange("Time")}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </Customform>
    );
  }
}
