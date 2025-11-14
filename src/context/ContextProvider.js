import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [notification, setNotification] = useState([]);
  const { pathname } = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
        ? value
        : !!value
    );
  };

  const handleNotification = (payload, type) => {
    switch (type) {
      case "attach":
        setNotification([...notification,payload])
        break;
      case "remove":
        notification.pop();
        setNotification([...notification])
        break;
      case "overide":
        setNotification([payload,...notification])
        break;

      default:
        break;
    }
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);
  }, [pathname]);

  const value = {
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    notification,
    handleNotification
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
