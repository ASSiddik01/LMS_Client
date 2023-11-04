"use client";

import Header from "@/components/UI/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className={`relative top-[103px]`}>{children}</div>
    </div>
  );
};

export default ClientLayout;
