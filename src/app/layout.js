import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Suspense } from "react";
import Image from "next/image";
import spinner from "/public/spinner.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <Suspense
          fallback={
            <div className="flex flex-1 items-center justify-center py-20">
              <Image src={spinner} alt="Loading..." width={80} height={80} />
            </div>
          }>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
