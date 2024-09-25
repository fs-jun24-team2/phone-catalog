import { PurchaseHistory } from '@/types/PurchaseHistory';

export const getPurchaseHistory = (): PurchaseHistory[] => {
  const purchaseHistory = localStorage.getItem('purchaseHistory');
  const purchaseHistoryParsed =
    purchaseHistory === null ? [] : JSON.parse(purchaseHistory);

  const purchases = purchaseHistoryParsed as PurchaseHistory[];

  return purchases;
};
