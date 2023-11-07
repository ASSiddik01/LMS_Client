import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/lib/ThemeProviders";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Welcome to E-School",
  description: "A online learning platform. Which help to you quality learning",
  keywords:
    "E-Learning, elearning, e-learning, online learning, lms, learning management system, MREN, Web Development ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className=" bg-[#ffffff] dark:bg-[#050B2F] layout">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
