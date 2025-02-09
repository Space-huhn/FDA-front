import "../../globals.css";
import {LoginPageStyled} from "@/app/[lang]/(AuthLayout)/styled";

export default function RootLayout({children, params}) {
  return (
    <LoginPageStyled>
      <div className="formContainerStyled">
        {children}
      </div>
    </LoginPageStyled>
  );
}
