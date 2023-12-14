const formatDateDDMMYYYY = date => {
  const dateArr = date.toISOString().split('T')[0].split('-');
  const day = dateArr[2];
  const month = dateArr[1];
  const year = dateArr[0];
  return `${day}/${month}/${year}`;
};

export { formatDateDDMMYYYY };
