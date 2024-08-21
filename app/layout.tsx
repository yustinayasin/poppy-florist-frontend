import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen mt-8">
        <h1 className="yeseva-one-regular text-3xl text-center mb-4 ">
          Poppy Florist
        </h1>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
