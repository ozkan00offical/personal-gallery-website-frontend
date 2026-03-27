import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="flex min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
