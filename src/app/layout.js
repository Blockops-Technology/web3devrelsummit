import localFont from "next/font/local";
import { Dela_Gothic_One } from 'next/font/google';
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

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
        style={{ '--font-dela': dela.style.fontFamily }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer
          position="bottom-right"
          toastClassName=" text-sm !text-black border"
          hideProgressBar="true"
        />
      </body>
      <GoogleAnalytics gaId="G-5FHH6KKLL0" />
    </html>
  );
}
