import Navbar from "./Navbar";
import Modal from "./Modal";
import CookieContext from "../context/CookieContext";
import { useContext } from "react";

function Layout({ children }) {
  const { isCookieApproved } = useContext(CookieContext);
  return (
    <div>
      {!isCookieApproved && <Modal />}
      <Navbar />
      <div className="container content">{children}</div>
    </div>
  );
}

export default Layout;
