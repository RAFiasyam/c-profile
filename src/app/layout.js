import { Poppins, Raleway } from 'next/font/google';
import "./globals.css";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '700'],
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Global shipping vehicles",
  description: "based in indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}