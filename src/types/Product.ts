export interface Product {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: PhoneDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
}

export interface PhoneDescription {
  title: string;
  text: string[];
}

export type PhoneCapacity = '64GB' | '128GB' | '256GB';

export type ProductDictionary = { [id: string]: Product };
