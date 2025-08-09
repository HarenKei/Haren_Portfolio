import React from "react";
import "./Layout.css";

import Header from "./header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main className="main">{children}</main>

      <footer className="footer">
        <p>&copy; 2024 Haren Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
