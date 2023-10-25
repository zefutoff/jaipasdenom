import React from 'react';

interface FilterButtonProps {
  title: string;
  active: boolean;
  onClick: (title: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> =
  function FilterButtonComponent({ title, active, onClick }) {
    return (
      <button
        type="button"
        className={`filter-button ${active ? 'active' : ''}`}
        onClick={() => onClick(title)}
      >
        {title}
      </button>
    );
  };

export default FilterButton;
