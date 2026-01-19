import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalkFlow",
  description: "An AI Powered Real-Time Voice Agent Interview Platform",
  icons: {
    icon: "/logo_3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        <script
          defer
          data-website-id='883efbee-b6fb-4f6d-85c9-212225201e84'
          data-domain='https://talk-flow-brown.vercel.app'
          src='https://sitetrack-nextjs.vercel.app/analytics.js'>
        </script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
