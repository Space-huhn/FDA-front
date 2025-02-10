import React from 'react';
import {StyledLoader} from "@/components/UI/Loader/styled";
import LoaderEllipse from "@/components/UI/IconsComponents/LoaderEllipse";
import AnimatedLogo from "@/components/UI/IconsComponents/AnimatedLogo";

const Loader = () => {
  return (
    <StyledLoader>
      <div className={'logo'}>
        <AnimatedLogo/>
      </div>

      <div className={'container'}>
        <div className={'loaderOne'}>
          <LoaderEllipse
            rotationSpeed={14}
            color={{firstColor: '#1e1e2e1a', secondColor: '#1e1e2e33'}}
          />
        </div>

        <div className={'loaderTwo'}>
          <LoaderEllipse
            rotationSpeed={22}
            rotationDirection={'reverse'}
            color={{firstColor: '#FFD88C', secondColor: '#FF7622'}}
          />
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;