import { useTranslation } from 'react-i18next';
import { Specs } from '@/types/Specs';

interface SpecsProps {
  screen: string;
  capacity: string;
  ram: string;
}

export const useSpecs = ({ screen, capacity, ram }: SpecsProps) => {
  const { t } = useTranslation();

  return [
    {
      name: t(Specs.Screen),
      value: screen,
    },
    {
      name: t(Specs.Capacity),
      value: capacity,
    },
    {
      name: t(Specs.RAM),
      value: ram,
    },
  ];
};
