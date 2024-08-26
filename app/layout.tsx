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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className="min-h-screen w-screen relative pt-4 sm:pt-8 flex flex-col justify-between">
        <Navbar />
        <main className="flex flex-col w-full justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
