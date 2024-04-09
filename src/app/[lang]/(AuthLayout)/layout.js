import { Inter } from "next/font/google";
import "../../globals.css";
import {LoginPageStyled} from "@/app/[lang]/(AuthLayout)/styled";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params }) {
    return (
        <LoginPageStyled>
            {children}
        </LoginPageStyled>
  );
}
