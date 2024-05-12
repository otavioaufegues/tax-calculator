const calculator = require('../utils/calculator');

module.exports = function buyHandler({ operation, state }) {
    const operationTax = 0;

    state.avgPrice = calculator.avgPriceCalculator({ operation: operation, currentAvgPrice: state.avgPrice, currentAmount: state.amount });
    state.amount += operation['quantity'];
    state.tax.push({ "tax": operationTax.toFixed(2) });

    return state;
};