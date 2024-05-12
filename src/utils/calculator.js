export function avgPriceCalculator({ operation, currentAvgPrice, currentAmount }) {
    return (((currentAmount * currentAvgPrice) + (operation['quantity'] * operation['unit-cost'])) / (currentAmount + operation['quantity'])).toFixed(2);
}

export function taxCalculator({ operation, profit }) {
    const taxFreeMax = 20000, taxPercent = 0.2;

    if (profit > 0 && operation['quantity'] * operation['unit-cost'] >= taxFreeMax) {
        return profit * taxPercent;
    }

    return 0;
}

export function profitCalculator({ operation, currentAvgPrice }) {
    return ((operation['quantity'] * operation['unit-cost']) - (operation['quantity'] * currentAvgPrice))
}