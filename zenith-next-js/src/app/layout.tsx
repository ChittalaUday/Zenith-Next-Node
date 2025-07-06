import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/utill/theme-provider";
import { FloatingElementsWrapper } from "@/components/utill/floating-elements-wrapper";

export const metadata: Metadata = {
  title: "Zenith Filings",
  description:
    "Zenith Filings is a one place solution for all your business needs. We provide a wide range of services including company registration, trademark registration, GST registration, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingElementsWrapper />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
