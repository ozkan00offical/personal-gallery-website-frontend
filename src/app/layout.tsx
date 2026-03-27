import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Melisa Özkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className="min-h-screen bg-gradient-to-br from-[#fff1f5] via-[#fbcfe8] to-[#f5d0fe] text-slate-800"
      >
        {children}
      </body>
    </html>
  );
}
