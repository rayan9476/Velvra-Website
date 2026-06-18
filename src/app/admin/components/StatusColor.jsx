const StatusColor = (status) => {
  if (status === "Active") return "text-green-600 ";
  if (status === "Low Stock") return "text-amber-600 ";
  return "text-red-500 ";
};
export default StatusColor;
