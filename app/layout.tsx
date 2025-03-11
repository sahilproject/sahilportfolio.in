import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Responsive from "./Navbar/Responsive";
import Footer from "./Footer/Footer";

const font =Sora({
  weight:["100","200","300","400","500","600","700","800"],
  subsets:["latin"]
})
export const metadata: Metadata = {
  title: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Responsive/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
