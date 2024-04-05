export default function Mask(exception: string) {
    switch (exception) {
      case "PHONE":
        return ["(", /\d/, /\d/, ")", " ",/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];  
      case "CPF":
        return "999.999.999-99";
      case "CNPJ":
        return "99.999.999/9999-99";
      case "ZIPCODE":
        return [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];
        case "SOL":
          return [/\d/, ".", /\d/];
          case "NAME":
          return /^[A-Za-z]+$/;
      default:
        return "";
    }
  }