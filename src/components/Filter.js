import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const Filter = () => {
  const { handleToggleSearchMode } = useContext(FilterContext);

  return (
    <div id="filter" onClick={handleToggleSearchMode}>
      <span>Helsinki, Finland</span>
      <span>Add guests</span>
      <button onClick={handleToggleSearchMode}>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default Filter;
