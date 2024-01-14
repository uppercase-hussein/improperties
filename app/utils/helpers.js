import { NAIRA_SIGN } from "../configs/app";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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


export const showAlert = ({ title, msg, icon, btnText, dismissable  = true}) =>
MySwal.fire({
  title,
  text: msg,
  icon,
  showConfirmButton: btnText?true:false,
  confirmButtonText: btnText,
  allowOutsideClick: dismissable,
  backdrop:true,
});

