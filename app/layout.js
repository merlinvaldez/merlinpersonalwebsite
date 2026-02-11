import "./globals.css";
import { Sora } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://merlinvaldez.com"),
  title: {
    default: "Merlin Valdez",
    template: "%s | Merlin Valdez",
  },
  description:
    "Software engineer, solutions engineer, and product leader building civic and learning tools.",
  openGraph: {
    title: "Merlin Valdez",
    description:
      "Software engineer, solutions engineer, and product leader building civic and learning tools.",
    url: "/",
    siteName: "Merlin Valdez",
    type: "website",
    images: ["/images/merlin-founder-photo-2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
