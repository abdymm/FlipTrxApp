const MONTH_IND = [
  'Januar',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];
const DateUtil = {
  format: dateTime => {
    let splitedDateTime = dateTime.split(' ');
    const originalDate = splitedDateTime[0];
    const splittedDate = originalDate.split('-');
    let day = splittedDate[2];
    let month = MONTH_IND[parseInt(splittedDate[1]) - 1];
    let year = splittedDate[0];

    return [day, month, year].join(' ');
  },
};
export default DateUtil;
