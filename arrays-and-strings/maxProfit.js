/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
