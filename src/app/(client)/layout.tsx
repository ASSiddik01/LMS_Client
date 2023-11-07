"use client";

import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <div className={`relative md:top-[103px] top-[50px]`}>{children}</div>
      <div className="h-[200px] bg-dark_bg p-20">text</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
