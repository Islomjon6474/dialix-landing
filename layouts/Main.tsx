import React, { ReactNode } from "react";
import { observer } from "mobx-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Intro from "@/components/landing/Intro";

const MainLayout = observer(({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
});

export default MainLayout;
