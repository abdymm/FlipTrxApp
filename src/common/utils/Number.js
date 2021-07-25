const Number = {
  currencyFormat: number => {
    let formattedNumber = '';
    var splittedNumber = number.toString().split('').reverse().join('');
    for (var i = 0; i < splittedNumber.length; i++)
      if (i % 3 == 0) formattedNumber += splittedNumber.substr(i, 3) + '.';
    return (
      'Rp. ' +
      formattedNumber
        .split('', formattedNumber.length - 1)
        .reverse()
        .join('')
    );
  },
};

export default Number;
