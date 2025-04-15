import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import {  dark, shadesOfPurple } from "@clerk/themes";

const inter= Inter({ subsets: ['latin']});
export const metadata = {
  title: "VisionPath.ai",
  description: "Our smart guide helps you explore AI career paths, build the right skills, and get tailored advice—step by step, at your pace.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
    baseTheme: dark,
    }}> 
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-600 text-white`}>

      {/* <body
        className={`${inter.className}`}
      > */}
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
             {/*header */}
             <Header></Header>
 <main className="min-h-screen">{children}</main>
 {/*header */}
 <footer className="bg-muted/50 py-12">
   <div className="container mx-auto px-4 text-center text-gray-200">
     <p>There are many who give advice but few who offer guidance.</p>
   </div>
 </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
