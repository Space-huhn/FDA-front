"use client"
import ButtonUsage from "@/components/UI/Button";
import ImageCover from "@/components/UI/ImageCover";
import {BoxStyled} from "@/components/OnBoarding/styled";
import {MobileStepper, Paper, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {useState} from 'react';

const steps = [
  {
    image: "https://fakeimg.pl/200x300",
    label: 'All your favorites',
    description: `Get all your loved foods in one once place,you just place the orer we do the rest`,
  },
  {
    image: "https://fakeimg.pl/300x300",
    label: 'All your favorites',
    description: `Get all your loved foods in one once place,you just place the orer we do the rest`,
  },
  {
    image: "https://fakeimg.pl/200x300",
    label: 'All your favorites',
    description: `Get all your loved foods in one once place,you just place the orer we do the rest`,
  },
  {
    image: "https://fakeimg.pl/200x300",
    label: 'All your favorites',
    description: `Get all your loved foods in one once place,you just place the orer we do the rest`,
  }
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length - 1;
  const router = useRouter();

  const handleNext = () => {
    if (activeStep === maxSteps) return;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSkip = () => {
    setActiveStep(maxSteps);
  };

  const getStarted = () => {
    router.push("/");
    setActiveStep(0);
  }

  return (
    <BoxStyled>
      <div className="boxContainer">
        <div className="image">
          <ImageCover
            src={`${steps[activeStep].image}`}
            alt={'Alt'}
          />
        </div>

        <Paper
          square
          elevation={0}
          className="paper"
        >
          <Typography
            variant="h2"
            color="dark"
          >
            {steps[activeStep].label}
          </Typography>
          <Typography
            variant="subtitle2"
            color="dark"
          >
            {steps[activeStep].description}
          </Typography>
        </Paper>

        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          color="secondary"
          className="dotsContainer"

          backButton={
            activeStep === maxSteps ? (
              <ButtonUsage
                variant="contained"
                onClick={getStarted}
              >
                Get Started
              </ButtonUsage>
            ) : (
              <ButtonUsage
                variant="contained"
                onClick={handleNext}
              >
                Next
              </ButtonUsage>
            )
          }

          nextButton={
            activeStep === maxSteps ? (
              <></>
            ) : (
              <ButtonUsage
                variant="text"
                onClick={handleSkip}
              >
                Skip
              </ButtonUsage>
            )
          }
        />
      </div>
    </BoxStyled>
  );
};

export default Onboarding;