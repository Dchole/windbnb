import ReactDOM from "react-dom";
import { useEffect } from "react";

const el = document.createElement("section");
el.id = "filter-drawer";

const FilterDrawer = ({ children }) => {
  useEffect(() => {
    document.body.appendChild(el);

    return () => document.body.removeChild(el);
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default FilterDrawer;
