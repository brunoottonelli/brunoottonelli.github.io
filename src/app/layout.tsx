
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruno Ottonelli - Portfolio",
  description: "Telecommunications Engineer specializing in Machine Learning and Signal Processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      {children}
      <Toaster />
    </>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedLang = localStorage.getItem('language');
                  var lang = 'es'; // Default to Spanish
                  
                  if (savedLang === 'es' || savedLang === 'en') {
                    lang = savedLang;
                  } else {
                    // Detect from browser
                    var browserLang = navigator.language || navigator.userLanguage;
                    if (browserLang.startsWith('en')) {
                      lang = 'en';
                    } else {
                      lang = 'es';
                    }
                    localStorage.setItem('language', lang);
                  }
                  
                  document.documentElement.setAttribute('data-language', lang);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {content}
        </ThemeProvider>
      </body>
    </html>
  );
}
