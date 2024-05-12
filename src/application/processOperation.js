import { avgPriceCalculator, profitCalculator } from "../utils/calculator.js";

export default function processOperation(operations) {
    let amount = 0, avgPrice = 0, profit = 0;
    const taxFreeMax = 20000, tax = [], taxValue = 0.2;

    operations.map((operation) => {
        let operationTax = 0;
        if (operation['operation'] === 'buy') {
            avgPrice = avgPriceCalculator({ operation: operation, currentAvgPrice: avgPrice, currentAmount: amount });
            amount += operation['quantity'];
            tax.push({ "tax": operationTax.toFixed(2) });
        }

        if (operation['operation'] === 'sell') {
            profit += profitCalculator({ operation: operation, currentAvgPrice: avgPrice });

            if (profit > 0 && operation['quantity'] * operation['unit-cost'] >= taxFreeMax) {
                operationTax = profit * taxValue;
                profit = 0;
            }

            amount -= operation['quantity'];
            tax.push({ "tax": operationTax.toFixed(2) });
        }
    });

    return JSON.stringify(tax);
}