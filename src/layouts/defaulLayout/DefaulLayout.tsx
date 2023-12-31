import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-[70vh]">{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
