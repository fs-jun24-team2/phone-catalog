import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';

export const getPhones = () => {
  return client.get<Phone[]>(`api/phones.json`);
};

export const getPhone = (phoneId: string) => {
  return getPhones().then((phones: Phone[]) =>
    phones.find(({ id }) => id === phoneId),
  );
};
