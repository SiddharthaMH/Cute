import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import global styles




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
