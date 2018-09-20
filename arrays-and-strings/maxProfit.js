/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let buy = 0;
  let sell = 0;
  for (let i = 0; i < prices.length; i += 1) {
    let buy = prices[i];
    for (let j = i; j < prices.length; j += 1) {
      let sell = prices[j];
      if (sell - buy > profit) {
        profit = sell - buy;
      }
    }
  }
  return profit;
};
