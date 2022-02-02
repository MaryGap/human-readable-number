module.exports = function toReadable(number) {
   var X1 = 0;
   var X2 = 0;
   var X3 = 0;

   var output = "";

   const digital = {
       1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
       10: "ten", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
       11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
   };

   while (number >= 100) {
       number = number - 100;
       X1++;
   }

   while (number >= 10) {
       number = number - 10;
       X2++;
   }

   while (number >= 1) {
       number = number - 1;
       X3++;
   }

   if (X1 === 0 && X2 === 0 && X3 === 0) {
       output = "zero";
   } 
   if (X1 > 0) {
       output = digital[X1] + " " + "hundred";
   }
   if (X2 > 0 && X3 === 0) {
       if (X1 > 0) {
           output = output + " ";
       }
       output = output + digital[X2 * 10];
   }
   if (X2 >= 1 && X2 < 2 && X3 > 0) {
       if (X1 > 0) {
           output = output + " ";
       }
       output = output + digital[X2 * 10 + X3];
   }
   if (X2 < 1 && X3 > 0) {
       if (X1 > 0) {
           output = output + " ";
       }
       output = output + digital[X3];
   }
   if (X2 >= 2 && X3 > 0) {
       if (X1 > 0) {
           output = output + " ";
       }
       output = output + digital[X2 * 10] + " " + digital[X3];
   }
   return output;
}
