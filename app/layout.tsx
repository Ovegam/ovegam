import type { Metadata } from "next";
import { poppins } from "./ui/font";
import NavBar from "./navbar";

export const metadata: Metadata = {
  title: "Ovegam",
  description: "An api maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}><NavBar/>{children}</body>
    </html>
  );
}
