import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-200 font-nunito">
        <div className="min-h-screen">
          <div className="flex-shrink-0">
            <Header />
          </div>
          <div className="min-h-[calc(100vh-7rem)] flex-1">{children}</div>
          <div className="flex-shrink-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
