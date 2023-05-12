import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const route = useLocation();
  const x = useRef();

  useEffect(() => {
    if (route.pathname == "/*") {
      x.current.style.display = "none";
    } else {
      x.current.style.display = "block";
    }
  }, [route.pathname]);
  return (
    <header ref={x}>
      <dic className="container">Header</dic>
    </header>
  );
};

export default Header;
