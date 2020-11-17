import "./styles/filter-sheet.scss";

const FilterSheet = () => {
  return (
    <section id="drawer">
      <section id="filter-result">
        <ul>
          <li>
            <button>
              <span className="material-icons">location</span>
              <span>Helsinki, Finland</span>
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default FilterSheet;
