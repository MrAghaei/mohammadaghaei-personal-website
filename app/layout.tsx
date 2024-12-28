
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Analytics } from '@vercel/analytics/next';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Aghaei",
  description: "Mohammad Aghaei personal website with blog section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="">

    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-roboto text-mainText overflow-x-hidden`}
    >
    {children}
    {/*<Analytics />*/}
    <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
    />
    <script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        defer
    ></script>
    </body>
    </html>
  );
}
