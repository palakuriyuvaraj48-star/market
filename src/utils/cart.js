export const calculateCartTotals = (items) => {
  const itemTotal = items.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
  const deliveryCharges = itemTotal > 499 || itemTotal === 0 ? 0 : 35;
  const platformFee = itemTotal === 0 ? 0 : 7;
  const gst = Math.round(itemTotal * 0.05);
  const grandTotal = itemTotal + deliveryCharges + platformFee + gst;

  return { itemTotal, deliveryCharges, platformFee, gst, grandTotal };
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
