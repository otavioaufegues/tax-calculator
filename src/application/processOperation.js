import { avgPriceCalculator, profitCalculator, taxCalculator } from "../utils/calculator.js";

export default function processOperation(operations) {
    let amount = 0, avgPrice = 0, profit = 0;
    const tax = [];

    operations.map((operation) => {
        let operationTax = 0;
        if (operation['operation'] === 'buy') {
            avgPrice = avgPriceCalculator({ operation: operation, currentAvgPrice: avgPrice, currentAmount: amount });
            amount += operation['quantity'];
            tax.push({ "tax": operationTax.toFixed(2) });
        }

        if (operation['operation'] === 'sell') {
            profit += profitCalculator({ operation: operation, currentAvgPrice: avgPrice });
            operationTax = taxCalculator({ operation: operation, profit: profit });

            if (operationTax > 0) {
                profit = 0;
            }

            amount -= operation['quantity'];
            tax.push({ "tax": operationTax.toFixed(2) });
        }
    });

    return JSON.stringify(tax);
}