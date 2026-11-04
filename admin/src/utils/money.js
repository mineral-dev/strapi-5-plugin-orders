import currencies from "currency-formatter";

const money = (data = 0, currency = "IDR", rate = 1, usdAmount = null) => {
   const isUsd = String(currency || "IDR").toUpperCase() === "USD";
   if (isUsd) {
      const numericRate = Number(rate) > 1 ? Number(rate) : 1;
      const value =
         usdAmount !== null && usdAmount !== undefined && Number(usdAmount) > 0
            ? Number(usdAmount)
            : numericRate > 1
              ? Number(data || 0) / numericRate
              : Number(data || 0);
      return currencies.format(value, {
         code: "USD",
         symbol: "USD $",
         // @ts-ignore
         decimalDigits: 2,
         decimalSeparator: ".",
         thousandsSeparator: ",",
         spaceBetweenAmountAndSymbol: false,
         symbolOnLeft: true,
         format: "%s%v",
      });
   }

   return currencies.format(data, {
      code: "IDR",
      symbol: "IDR",
      // @ts-ignore
      decimalDigits: 2,
      decimalSeparator: ",",
      thousandsSeparator: ".",
      spaceBetweenAmountAndSymbol: true,
      symbolOnLeft: true,
      format: "%s %v",
   });
};

export default money;
