import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const textColorStyle = { color: "#bdbdbd" };

const Filter = () => {
  const { filter, enterSearchMode } = useContext(FilterContext);

  return (
    <div id="filter" onClick={enterSearchMode}>
      {filter && typeof filter === "string" ? (
        <div>{filter}</div>
      ) : (
        <div style={textColorStyle}>LOCATION</div>
      )}
      {filter && typeof filter === "number" ? (
        <div>{filter}</div>
      ) : (
        <div style={textColorStyle}>Add guests</div>
      )}
      <button onClick={enterSearchMode}>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default Filter;
