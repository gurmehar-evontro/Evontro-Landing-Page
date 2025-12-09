import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "600", "500", "300", "200", "100", "800"],
});

export const metadata: Metadata = {
  title: "Evontro.com | Unleashing Technological Innovation",
  description:
    "Evontro.com is your gateway to cutting-edge technology solutions. We specialize in software development, IT consulting, and digital transformation services that empower businesses to thrive in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <ResponsiveNav />
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
