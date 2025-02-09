import React from 'react';
import Logo from "@/components/UI/IconsComponents/Logo";
import LoaderEllipse from "@/components/UI/IconsComponents/LoaderEllipse";
import {StyledLoader} from "@/components/UI/Loader/styled";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="logo">
        <Logo/>
      </div>

      <div className="loader">
        <LoaderEllipse/>
      </div>
    </StyledLoader>
  );
};

export default Loader;