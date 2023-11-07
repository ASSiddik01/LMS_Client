"use client";

import Header from "@/components/UI/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <div className={`relative md:top-[103px] top-[50px]`}>{children}</div>
    </div>
  );
};

export default ClientLayout;
