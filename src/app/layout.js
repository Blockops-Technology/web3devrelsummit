import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Web3 DevRel Summit",
  description: "The first conference for web3 devrels. Part of Belgrade Blockchain Week",
  openGraph: {
    title: "Web3 DevRel Summit",
    description: "The first conference for web3 devrels. Part of Belgrade Blockchain Week",
    url: "https://web3devrelsummit.com/",
    type: "website",
    images: [
      {
        url: "https://web3devrelsummit.com/web3devrel-summit-og-image.jpg",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-5FHH6KKLL0" />
    </html>
  );
}
