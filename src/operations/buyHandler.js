import { avgPriceCalculator } from '../utils/calculator.js';

export default function buyHandler({ operation, state }) {
    const operationTax = 0;

    state.avgPrice = avgPriceCalculator({ operation: operation, currentAvgPrice: state.avgPrice, currentAmount: state.amount });
    state.amount += operation['quantity'];
    state.tax.push({ "tax": parseFloat(operationTax.toFixed(2)) });

    return state;
};