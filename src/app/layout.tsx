import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Careplus, India's leading telehealth service provider",
  description: "Careplus telehealth",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
