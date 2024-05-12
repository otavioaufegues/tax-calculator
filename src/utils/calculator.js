function avgPriceCalculator({ operation, currentAvgPrice, currentAmount }) {
    return (((currentAmount * currentAvgPrice) + (operation['quantity'] * operation['unit-cost'])) / (currentAmount + operation['quantity'])).toFixed(2);
}

function taxCalculator({ operation, profit }) {
    const taxFreeMax = 20000, taxPercent = 0.2;
    const operationValue = operation['quantity'] * operation['unit-cost'];

    if (profit > 0 && operationValue >= taxFreeMax) {
        return profit * taxPercent;
    }

    return 0;
}

function profitCalculator({ operation, currentAvgPrice }) {
    return ((operation['quantity'] * operation['unit-cost']) - (operation['quantity'] * currentAvgPrice));
}

module.exports = {
    avgPriceCalculator,
    taxCalculator,
    profitCalculator
};