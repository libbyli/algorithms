/* Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if
the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not. */

function isLucky(n) {
  const stringN = n.toString();
  const firstHalf = stringN.slice(0, stringN.length / 2);
  const secondHalf = stringN.slice(stringN.length / 2, stringN.length);

  let sumFirstHalf = 0;
  let sumSecondHalf = 0;

  for (let i = 0; i < firstHalf.length; i += 1) {
    sumFirstHalf += parseInt(firstHalf[i]);
  }

  for (let i = 0; i < secondHalf.length; i += 1) {
    sumSecondHalf += parseInt(secondHalf[i]);
  }

  if (sumFirstHalf === sumSecondHalf) {
    return true;
  }

  return false;
}
