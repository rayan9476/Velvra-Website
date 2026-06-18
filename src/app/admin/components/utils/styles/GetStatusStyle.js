function GetStatusStyle(status) {
  switch (status) {
    // for orders Status   case
    case "Delivered":
      return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400";
    case "Shipped":
      return "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400";
    case "Processing":
      return "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400";
    case "Pending":
      return "text-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400";
    case "Cancelled":
      return "text-red-500 bg-red-50 dark:bg-red-900/20 dark:text-red-400";

    //  for User Status   case
    case "Active":
      return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400";
    case "Inactive":
      return "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400";
    case "Banned":
      return "text-red-500 bg-red-50 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "text-gray-500 bg-gray-50";
  }
}

export default GetStatusStyle;
