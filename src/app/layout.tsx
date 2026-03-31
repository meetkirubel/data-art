
// import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

import { DM_Sans, Work_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
// import localFont from "next/font/local";

// const palo = localFont({
//   src: [
//     { path: "/fonts/palo-wide-thin.ttf", weight: "100" },
//     { path: "/fonts/palo-wide-extralight.ttf", weight: "200" },
//     { path: "/fonts/palo-wide-light.ttf", weight: "300" },
//     { path: "/fonts/palo-wide-regular.ttf", weight: "400" },
//     { path: "/fonts/palo-wide-medium.ttf", weight: "500" },
//     { path: "/fonts/palo-wide-semibold.ttf", weight: "600" },
//     { path: "/fonts/palo-wide-bold.ttf", weight: "700" },
//     { path: "/fonts/palo-wide-extrabold.ttf", weight: "800" },
//     { path: "/fonts/palo-wide-black.ttf", weight: "900" },
//   ],
//   variable: "--font-palo",
// });

// const fontSans = Work_Sans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "")}
    >
      <body>
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
        <ScrollToTop />
      </body>
    </html>
  )
}
