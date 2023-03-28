import Header from "./Header";
import Modal from "./Modal";
import CookieContext from "../context/CookieContext";
import { useContext } from "react";

function Layout({ children }) {
  const { isCookieApproved } = useContext(CookieContext);
  return (
    <div className="container">
      {!isCookieApproved && <Modal />}
      <Header />
      {children}
    </div>
  );
}

export default Layout;
