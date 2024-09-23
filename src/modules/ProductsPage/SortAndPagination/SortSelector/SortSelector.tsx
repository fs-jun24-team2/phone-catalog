import React, { useState } from 'react';
// npm install react-select
import Select, { components } from 'react-select';
import styles from './SortSelector.module.scss';

// Імпорт іконок
import downArrow from '/images/original/icons/original_down.svg';
import upArrow from '/images/original/icons/original_to-up.svg';

interface SortSelectorProps {
  label: string;
  options: { value: string; label: string }[];
  className?: string;
}

// Кастомний DropdownIndicator для заміни іконки
const DropdownIndicator = (props: any) => {
  const { selectProps } = props;
  const icon = selectProps.menuIsOpen ? upArrow : downArrow;

  return (
    <components.DropdownIndicator {...props}>
      <img src={icon} alt="arrow icon" />
    </components.DropdownIndicator>
  );
};

// Кастомні стилі для react-select
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: '0px',
    borderColor: state.isFocused ? '#313237' : '#89939A',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#313237',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FAFBFC' : '#FAFBFC',
    color: '#89939A',
    borderRadius: '0px',
    cursor: 'pointer',
    '&:hover': {
      color: '#313237',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    cursor: 'pointer',
    borderRadius: '0px',
    backgroundColor: 'FAFBFC',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const SortSelector: React.FC<SortSelectorProps> = ({
  label,
  options,
  className,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  return (
    <div className={className}>
      <p className={styles.selectors__type}>{label}</p>
      <Select
        options={options}
        defaultValue={options[2]}
        styles={customStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
        menuIsOpen={menuIsOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />
    </div>
  );
};

export default SortSelector;
