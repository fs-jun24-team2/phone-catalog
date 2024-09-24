import React, { useState } from 'react';
// npm install react-select
import Select, { components, SingleValue } from 'react-select';
import styles from './SortSelector.module.scss';

// Імпорт іконок
import downArrow from '/images/original/icons/original_down.svg';
import upArrow from '/images/original/icons/original_to-up.svg';
import { SelectedOption } from '@/types/SelectedOption';

interface SortSelectorProps {
  label: string;
  options: SelectedOption[];
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (selectedOption: SingleValue<SelectedOption>) => void;
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
    '&:hover': {
      borderColor: '#313237',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FAFBFC' : '#FAFBFC',
    color: '#89939A',
    borderRadius: '0px',
    '&:hover': {
      color: '#313237',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
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
  onChange,
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
        onChange={onChange}
      />
    </div>
  );
};

export default SortSelector;
