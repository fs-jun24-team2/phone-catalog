import React, { useEffect, useState } from 'react';
import Select, { components, SingleValue } from 'react-select';
import styles from './SortSelector.module.scss';

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

const DropdownIndicator = (props: any) => {
  const { selectProps } = props;
  const icon = selectProps.menuIsOpen ? upArrow : downArrow;

  return (
    <components.DropdownIndicator {...props}>
      <img src={icon} alt="arrow icon" />
    </components.DropdownIndicator>
  );
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

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark_theme');
      setIsDarkTheme(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

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

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '0px',
      borderColor: state.isFocused
        ? isDarkTheme
          ? '#905BFF'
          : '#313237'
        : isDarkTheme
          ? '#3B3E4A'
          : '#89939A',
      backgroundColor: isDarkTheme ? '#3B3E4A' : '#FAFBFC',
      color: isDarkTheme ? '#F1F2F9' : '#313237',
      boxShadow: 'none',
      cursor: 'pointer',
      transition: 'background-color 1s ease, border-color 1s ease',
      '&:hover': {
        borderColor: isDarkTheme ? '#75767F' : '#313237',
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: isDarkTheme ? '#F1F2F9' : '#313237',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDarkTheme
          ? '#3B3E4A'
          : '#FAFBFC'
        : isDarkTheme
          ? '#0F1121'
          : '#FAFBFC',
      color: state.isFocused
        ? isDarkTheme
          ? '#F1F2F9'
          : '#313237'
        : isDarkTheme
          ? '#75767F'
          : '#89939A',
      borderRadius: '0px',
      cursor: 'pointer',
      transition: 'background-color 1s ease, color 1s ease',
      '&:hover': {
        color: isDarkTheme ? '#F1F2F9' : '#313237',
        backgroundColor: isDarkTheme ? '#3B3E4A' : '#FAFBFC',
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
      borderRadius: '0px',
      backgroundColor: isDarkTheme ? '#0F1121' : '#FAFBFC',
      border: isDarkTheme ? '0.5px solid #323542' : '1px solid #E2E6E9',
      transition: 'border-color 0.5s ease',
    }),
    menuList: (provided: any) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

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
