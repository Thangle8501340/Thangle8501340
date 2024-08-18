import { Varela_Round } from "next/font/google";
import "./globals.css";

import NavBar from "../components/navBar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export const metadata = {
  title: "Thang Le",
};

const Varela = Varela_Round({ subsets: ["latin"], weight:"400" });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Varela.className}  bg-transparent `}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
