// FilterBar.tsx
import React from "react";
import "./myCustomStyles.css";

interface FilterBarProps {
  filters: Record<"Street 1" | "Street 2" | "Street 3", boolean>;
  onFilterChange: (filter: "Street 1" | "Street 2" | "Street 3") => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-bar bg-light">
      <span>Filter</span>
      <label>
        <input
          type="checkbox"
          id="street1"
          checked={filters["Street 1"]}
          onChange={() => onFilterChange("Street 1")}
        />
        <label className="form-check-label ms-2" htmlFor="street1">
          Street 1
        </label>
      </label>
      <label>
        <input
          type="checkbox"
          id="street2"
          checked={filters["Street 2"]}
          onChange={() => onFilterChange("Street 2")}
        />
        <label className="form-check-label ms-2" htmlFor="street2">
          Street 2
        </label>
      </label>
      <label>
        <input
          type="checkbox"
          id="street3"
          checked={filters["Street 3"]}
          onChange={() => onFilterChange("Street 3")}
        />
        <label className="form-check-label ms-2" htmlFor="street3">
          Street 3
        </label>
      </label>
    </div>
  );
};

export default FilterBar;
