import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safaricom Rebrand",
  description: "A fresh reimagining of Safaricom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="mt-10 py-6 text-center text-sm text-gray-500 border-t">
          Created by <span className="font-medium text-green-600">Nkatha Patience</span>
        </footer>
      </body>
    </html>
  );
}