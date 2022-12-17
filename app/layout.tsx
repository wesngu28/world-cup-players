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
          <Header />
          <div className="min-h-[calc(100vh-7rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
