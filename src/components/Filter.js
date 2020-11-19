import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const Filter = () => {
  const { filter, enterSearchMode } = useContext(FilterContext);

  return (
    <div id="filter" onClick={enterSearchMode}>
      {filter ? (
        <span>{filter}</span>
      ) : (
        <span style={{ color: "#bdbdbd" }}>LOCATION</span>
      )}
      <span>Add guests</span>
      <button onClick={enterSearchMode}>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default Filter;
