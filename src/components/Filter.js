import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const Filter = () => {
  const { enterSearchMode } = useContext(FilterContext);

  return (
    <div id="filter" onClick={enterSearchMode}>
      <span>Helsinki, Finland</span>
      <span>Add guests</span>
      <button onClick={enterSearchMode}>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default Filter;
