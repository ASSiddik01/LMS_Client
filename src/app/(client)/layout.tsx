"use client";

import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <div className={``}>{children}</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
