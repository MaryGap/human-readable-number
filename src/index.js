module.exports = function toReadable (number) {
   function toReadable (number) {
      let numberUpTo20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let dozers = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if (number >= 100) {
        if (number % 100 === 0) {
            return ('' + numberUpTo20[Math.floor(number / 100)] + ' hundred');
        }
        return ('' + numberUpTo20[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100));
    } else {
        if (number >= 20) {
            if (number % 10 == 0) {
                return ('' + dozers[Math.floor(number / 10)]);
            };
            return ('' + dozers[Math.floor(number / 10)]+ ' ' + toReadable(number % 10));
        } else {
            return ('' + dozers[number])
        }
      }
     }
}
