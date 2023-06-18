import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./NavBar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Allish",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
