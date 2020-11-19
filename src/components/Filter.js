import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const Filter = () => {
  const { filter, enterSearchMode } = useContext(FilterContext);

  return (
    <div id="filter" onClick={enterSearchMode}>
      {filter ? (
        <div>{filter}</div>
      ) : (
        <div style={{ color: "#bdbdbd" }}>LOCATION</div>
      )}
      <div>Add guests</div>
      <button onClick={enterSearchMode}>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default Filter;
