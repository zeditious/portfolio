import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./NavBar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ian Allish",
  description:
    "A portfolio site highlighting Ian Allish's professional, personal, and creative projects. Created on Next.js 13.",
  metadataBase: new URL("https://www.ianallish.com/"),
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
