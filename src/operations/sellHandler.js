const calculator = require('../utils/calculator');

module.exports = function sellHandler({ operation, state }) {
    state.profit += calculator.profitCalculator({ operation: operation, currentAvgPrice: state.avgPrice });

    const operationTax = calculator.taxCalculator({ operation: operation, profit: state.profit });

    if (operationTax > 0) {
        state.profit = 0;
    }

    state.amount -= operation['quantity'];
    state.tax.push({ "tax": operationTax.toFixed(2) });

    return state;
};