import React, { useEffect, useState } from 'react';
// npm install react-select
import Select, { components, SingleValue } from 'react-select';
import styles from './SortSelector.module.scss';

// Імпорт іконок
import downArrow from '/images/original/icons/original_down.svg';
import upArrow from '/images/original/icons/original_to-up.svg';
import { SelectedOption } from '@/types/SelectedOption';
import { useTranslation } from 'react-i18next';

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
  onChange,
}) => {
  const { t } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const defaultValue = options[2];
  const [value, setValue] = useState(defaultValue);

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  const handleOnChange = (option: SingleValue<SelectedOption>) => {
    if (option) {
      setValue(option);
    }

    onChange(option);
  };

  useEffect(() => {
    setValue(prev => {
      const newValue = options.find(option => option.value === prev.value);

      return newValue ? newValue : prev;
    });
  }, [options, t]);

  return (
    <div className={className}>
      <p className={styles.selectors__type}>{label}</p>
      <Select
        options={options}
        defaultValue={defaultValue}
        value={value}
        styles={customStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
        menuIsOpen={menuIsOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SortSelector;
