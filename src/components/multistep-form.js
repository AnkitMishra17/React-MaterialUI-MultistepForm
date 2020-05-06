import React from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Userdetail1 from "./userdetail1";

const Customdiv = styled.div`
  position: absolute;
  width: 80%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border-top: 5px solid #263560;
  background-color: white;
  box-shadow: -10px -10px 30px 2px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    top: 70%;
    margin: 0px;
    margin-bottom: 50px;
    padding: 20px;
    padding-top: 30px;
  }
`;


function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

export default function Multistep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
            <Userdetail1/>
        );
      case 1:
        return "An ad group contains one or more ads which target a shared set of keywords.";
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return "Unknown step";
    }
  }
  return (
    <Customdiv>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography component={'span'}>{getStepContent(index)}</Typography>
              <div >
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained"
                    color="secondary"
                    style={{marginRight:"30px"}}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
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
          <Typography component={'span'}>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>
            Reset
          </Button>
        </Paper>
      )}
    </Customdiv>
  );
}
