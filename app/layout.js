import "./globals.css";
import { inter } from "@/app/fonts/fonts"
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: {
    template: "%s | Game Insider",
    default: "Game Insider",
  },
  description: "Your trusted source for in-depth game reviews and ratings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
