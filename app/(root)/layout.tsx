import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
      <div>
        <Navbar/>       
        {children}  
        <Footer/>
      </div>
  );
}