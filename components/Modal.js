import React, { useContext, useEffect, useState } from "react";
import CookieContext from "../context/CookieContext";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isCookieApproved, setCookie, getCookie } = useContext(CookieContext);

  useEffect(() => {
    !isCookieApproved && setModalOpen(true);
  }, []);

  function allowCookie() {
    setCookie("allowYoutube", "true");
    setModalOpen(false);
    getCookie("allowYoutube");
  }

  function disagreeCookie() {
    setModalOpen(false);
  }

  return modalOpen ? (
    <div className="sticky-top top-0 start-0 vh-25 w-100 bg-secondary text-white d-flex align-items-center justify-content-center m-16 p-4">
      <div>
        <p>Please allow cookie in order to view Youtube content.</p>
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={disagreeCookie}
        >
          Disagree
        </button>
        <button type="button" className="btn btn-primary" onClick={allowCookie}>
          Allow cookie
        </button>
      </div>
    </div>
  ) : null;
}

export default Modal;
