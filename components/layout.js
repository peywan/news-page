// components/Layout.js
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
