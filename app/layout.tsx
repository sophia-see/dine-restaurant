import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dine",
  description: "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        <div 
          className={`
            h-full min-h-screen w-full min-w-screen
          `}
        >
          {children}  
          <Footer />
        </div>
      </body>
    </html>
  );
}
