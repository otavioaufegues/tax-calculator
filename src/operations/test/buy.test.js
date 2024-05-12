const buyHandler = require('../buyHandler.js');

describe("Buy Operation", () => {
    it("Should update Amount on State", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operation = { "operation": "buy", "unit-cost": 10.00, "quantity": 100 };

        const initialState = JSON.stringify(stockState.amount);
        buyHandler({ operation: operation, state: stockState });
        const finalState = JSON.stringify(stockState.amount);

        expect(initialState).not.toEqual(finalState);
    })
    it("Should update AvgPrice on State", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operation = { "operation": "buy", "unit-cost": 10.00, "quantity": 100 };

        const initialState = JSON.stringify(stockState.avgPrice);
        buyHandler({ operation: operation, state: stockState });
        const finalState = JSON.stringify(stockState.avgPrice);

        expect(initialState).not.toEqual(finalState);
    })
    it("Should not show put tax on buying", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operation = { "operation": "buy", "unit-cost": 10.00, "quantity": 100 };

        buyHandler({ operation: operation, state: stockState });
        const taxResult = stockState.tax[0].tax;

        expect(taxResult).toEqual('0.00');
    })
});