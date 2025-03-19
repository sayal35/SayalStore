const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 2,
  }).format((price * 1.6) / 100);
};

export default FormatPrice;
