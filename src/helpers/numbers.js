import { formToJSON } from 'axios';

export const formatPrice = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
};

export const formatRating = (rating) => {
  return Number(rating).toFixed(1);
};

export const getInstallments = (price, number) => {
  const montPrice = price / 12;
  return `${number} x ${formatPrice(montPrice)} sin interés`;
};
