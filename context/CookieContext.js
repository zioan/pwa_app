import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieContext = createContext();

function CookieProvider(props) {
  const [isCookieApproved, setIsCookieApproved] = useState(false);

  function setCookie(cookieName, data) {
    Cookies.set(cookieName, data, {
      expires: 1,
      secure: true,
      sameSite: "None",
    });
  }

  function getCookie(cookieName) {
    const cookie = Cookies.get(cookieName);
    if (cookie) {
      setIsCookieApproved(true);
    }

    return Cookies.get(cookieName);
  }

  function removeCookie(cookieName) {
    Cookies.remove(cookieName);
  }

  useEffect(() => {
    getCookie("allowYoutube");
  }, []);

  return (
    <CookieContext.Provider
      value={{ isCookieApproved, setCookie, getCookie, removeCookie }}
    >
      {props.children}
    </CookieContext.Provider>
  );
}

export default CookieContext;
export { CookieProvider };
