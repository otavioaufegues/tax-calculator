import { profitCalculator, taxCalculator } from "../utils/calculator.js";

export default function buyHandler({ operation, state }) {
    state.profit += profitCalculator({ operation: operation, currentAvgPrice: state.avgPrice });

    const operationTax = taxCalculator({ operation: operation, profit: state.profit });

    if (operationTax > 0) {
        state.profit = 0;
    }

    state.amount -= operation['quantity'];
    state.tax.push({ "tax": operationTax.toFixed(2) });

    return state;
};