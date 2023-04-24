import { NAIRA_SIGN } from "../configs/app";

export const thousand = (amount) => {
    // convert number to string
    amount = String(amount);
    // return amount string with commas after every three characters
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  export const displayAmount = (amount, pad, sign = NAIRA_SIGN) => {
    // return number string with commas after every three characters
    return `${sign}${thousand(Number(amount).toFixed(pad)).trim()}`;
  };