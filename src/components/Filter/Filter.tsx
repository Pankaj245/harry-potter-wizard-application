import React, { useState } from "react";
import "./Filter.scss";

interface FiltersProps {
  onApplyFilters: (filters: Record<string, string>) => void;
  onResetFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  onApplyFilters,
  onResetFilters,
}) => {
  const [filters, setFilters] = useState<Record<string, string>>({
    name: "",
    difficulty: "",
    ingredient: "",
    inventorFullName: "",
    manufacturer: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventorFullName: "",
      manufacturer: "",
    });
    onResetFilters();
  };

  return (
    <div className="filters">
      <div className="input-container">
        <h3>Name</h3>
        <input
          name="name"
          placeholder="Name"
          value={filters.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <h3>Name</h3>
        <select
          name="difficulty"
          value={filters.difficulty}
          onChange={handleInputChange}
        >
          <option value="">Select Difficulty</option>
          <option value="Unkonwn">Unkonwn</option>
          <option value="Advanced">Advanced</option>
          <option value="Moderate">Moderate</option>
          <option value="Beginner">Beginner</option>
          <option value="OrdinaryWizardingLevel">OrdinaryWizardingLevel</option>
          <option value="OneOfAKind">OneOfAKind</option>
        </select>
      </div>
      <div className="input-container">
        <h3>Name</h3>
        <input
          name="ingredient"
          placeholder="Ingredient"
          value={filters.ingredient}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <h3>Name</h3>
        <input
          name="inventorFullName"
          placeholder="inventorFullName"
          value={filters.inventorFullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <h3>Name</h3>
        <input
          name="manufacturer"
          placeholder="Manufacturer"
          value={filters.manufacturer}
          onChange={handleInputChange}
        />
      </div>
      <div className="action-container">
        <button onClick={handleApplyFilters}>Apply Filters</button>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filters;
