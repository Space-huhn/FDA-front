import { Inter } from "next/font/google";
import "../globals.css";
import Index from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Index lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
