
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';



const robotoFont = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
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
        className={`${robotoFont.className} antialiased text-mainText overflow-x-hidden`}
    >
    {children}
    <Analytics />
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
