export const convertDropdownValue = (dropdownvalue: string): string => {
  let query = "NOW - ";
  switch (dropdownvalue) {
    case "1日前":
      return `${query}1day`;
    case "3日間":
      return `${query}3days`;
    case "10日間":
      return `${query}10days`;
    case "20日間":
      return `${query}20days`;
    case "30日間":
      return `${query}30days`;
    default:
      return "NOW -3days";
  }
};
