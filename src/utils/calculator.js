export function avgPriceCalculator({ operation, currentAvgPrice, currentAmount }) {
    return (((currentAmount * currentAvgPrice) + (operation['quantity'] * operation['unit-cost'])) / (currentAmount + operation['quantity'])).toFixed(2);
}

export function taxCalculator() { }

export function profitCalculator({ operation, currentAvgPrice }) {
    return ((operation['quantity'] * operation['unit-cost']) - (operation['quantity'] * currentAvgPrice))
}