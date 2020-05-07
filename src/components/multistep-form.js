import React, { Component } from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Userdetail1 from "./userdetail1";
import Bookslot from "./bookslot";
import Personaldetails from "./personaldetails";
import bruh from "../assets/SVG/form1.svg";
import "./form.css";

const Customdiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 15px;
  border-top: 5px solid #263560;
  background-color: white;
  box-shadow: -10px -10px 30px 2px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 85%;
    top: 75%;
    margin: 0px;
    margin-bottom: 50px;
    padding: 20px;
    padding-top: 30px;
  }
`;

export default class Multistep extends Component {
  state = {
    activeStep: 0,
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
    
    Occupation:"",
    Company:"",
    Location:"",
    Gender: "",

    Date:new Date(),
    Time:new Date()
  };

  render() {
    function getSteps() {
      return ["Welcome! 👦", "Fill Personal Details! 📝", "Book Your Slot! 🕑"];
    }
    const handleNext = () => {
      let prevStep = this.state.activeStep;
      this.setState({
        activeStep: prevStep + 1,
      });
    };

    const handleChange = (input) => (e) => {
        if(input === "Date" || input === "Time"){
            this.setState({ [input]: e });
        }else{
            this.setState({ [input]: e.target.value });
        } 
    };
    const handleBack = () => {
      let prevStep = this.state.activeStep;
      this.setState({
        activeStep: prevStep - 1,
      });
    };

    const handleReset = () => {
      this.setState({
        activeStep: 0,
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        Occupation:"",
        Company:"",
        Location:"",
        Gender: ""
      });
    };
    const { activeStep } = this.state;

    const { FirstName, LastName, UserName, Email, Password,  Occupation, Company, Location, Gender, Date, Time } = this.state;
    const Data = { FirstName, LastName, UserName, Email, Password, Occupation, Company, Location, Gender, Date, Time };
    const steps = getSteps();
    function getStepContent(step) {
      switch (step) {
        case 0:
          return <Userdetail1 handleChange={handleChange} details={Data} />;
        case 1:
          return <Personaldetails handleChange={handleChange} details={Data} />;
        case 2:
          return <Bookslot handleChange={handleChange} details={Data} />;;
        default:
          return "Unknown step";
      }
    }
    return (
      <Customdiv>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel></StepLabel>
              <StepContent>
                <p>
                  {label}
                </p>
                <Typography component={"span"}>
                  {getStepContent(index)}
                </Typography>
                <div>
                  <div style={{marginTop:"25px"}}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      variant="contained"
                      color="secondary"
                      style={{
                        fontSize: "20px",
                        width: "75px",
                        padding: "5px",
                        fontFamily: "Oswald, sans-serif",
                        marginRight: "30px",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      style={{
                        fontSize: "20px",
                        width: "75px",
                        padding: "5px",
                        fontFamily: "Oswald, sans-serif",
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
          <img src={bruh} alt=""/>
            <Typography component={"span"}>
              <p>
                All steps completed - you&apos;re finished{" "}
              </p>
            </Typography>
            <Button
              variant="contained"
              style={{
                fontSize: "22px",
                fontFamily: "Oswald, sans-serif",
                backgroundColor: "#ec407a",
                letterSpacing: "1.5px",
                color: "white",
                width: "125px",
                padding: "10px",
                borderRadius: "25px",
              }}
              onClick={handleReset}
            >
              RESET
            </Button>
          </Paper>
        )}
      </Customdiv>
    );
  }
}
