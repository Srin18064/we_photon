import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wephoton.in"),
  title: {
    default: "Wephoton · Software & Mobile App Development",
    template: "%s | Wephoton",
  },
  description:
    "Wephoton engineers enterprise software, high-performance mobile applications, and the Dawingo Multiverse SaaS product family.",
  keywords: [
    "software development",
    "mobile app development",
    "enterprise software",
    "SaaS",
    "Dawingo",
    "Wephoton",
  ],
  openGraph: {
    title: "Wephoton · Software & Mobile App Development",
    description:
      "Enterprise software, mobile applications, and the Dawingo Multiverse.",
    url: "https://wephoton.in",
    siteName: "Wephoton",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-abyss">{children}</body>
    </html>
  );
}
