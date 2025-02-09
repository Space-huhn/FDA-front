import NavigationElements from "@/components/NavigationElements";
import {useMessages} from "next-intl";

export default function RootLayout({children, params}) {
  const messages = useMessages();

  return (
    <>
      <NavigationElements dict={messages} lang={params.lang}></NavigationElements>
      {/*<PageStyled>*/}
      <div className="wrapper">
        {children}
      </div>
      {/*</PageStyled>*/}
    </>
  );
}
