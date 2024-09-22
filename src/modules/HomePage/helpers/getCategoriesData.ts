import { Path } from "@/types/Path";

export const getCategoriesData = (
  phoneAmount: number,
  tabletsAmount: number,
  accessoriesAmount: number,
) => {
  return [
    {
      img: 'img/category-phones.png',
      title: 'Mobile phones',
      amount: phoneAmount,
      styleBg: 'mobiles',
      path: Path.phones,
    },
    {
      img: 'img/category-tablets.png',
      title: 'Tablets',
      amount: tabletsAmount,
      styleBg: 'tablets',
      path: Path.tablets,
    },
    {
      img: 'img/category-accessories.png',
      title: 'Accessories',
      amount: accessoriesAmount,
      styleBg: 'accessories',
      path: Path.accessories,
    },
  ];
};
