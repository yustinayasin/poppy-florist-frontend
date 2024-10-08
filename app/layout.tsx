import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LoginProvider } from "./contexts/LoginContext";
import { TotalPriceProvider } from "./contexts/TotalPriceContext";

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
      <body className="min-h-screen w-screen flex flex-col justify-between">
        <LoginProvider>
          <TotalPriceProvider>
            <Navbar />
            <main className="flex flex-col w-full justify-center items-center">
              {children}
            </main>
            <Footer />
          </TotalPriceProvider>
        </LoginProvider>
      </body>
    </html>
  );
}
