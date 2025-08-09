import React from "react";
import "./Layout.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
