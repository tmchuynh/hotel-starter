import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import { Providers } from "@/context/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow pb-24 md:pb-0">
            <NavBar />
            <DynamicBreadcrumb />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
