const formatNUmber = (number: number) => {
  if (number >= 1000) {
    return `${Math.round(number / 1000)}k`;
  }
  return number.toString();
};
export default formatNUmber;
