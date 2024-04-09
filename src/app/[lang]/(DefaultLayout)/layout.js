import { Inter } from "next/font/google";
import {PageStyled} from "@/app/[lang]/(DefaultLayout)/styled";
import NavigationElements from "@/components/NavigationElements";
import {useMessages} from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params }) {
    const messages = useMessages();

    return (
        <>
            <NavigationElements dict={messages} lang={params.lang}></NavigationElements>
            <PageStyled>
                {children}
            </PageStyled>
        </>
    );
}
