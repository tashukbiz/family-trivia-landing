import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Trivia - The Trivia Game for Everyone",
  description: "Fun for kids. Challenging for adults. Fair for everyone. Endless, AI-generated trivia questions tailored to each person's interests — all on a single device.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display">
        {children}
      </body>
    </html>
  );
}
