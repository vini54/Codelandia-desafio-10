import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
       top: 0,
       left: 0,
       behavior: "smooth"
    });
  }, [location]);

  return <>{props.children}</>
};