const sellHandler = require('../sellHandler.js');
const buyHandler = require('../buyHandler.js');

describe("Sell Operation", () => {
    it("Should update tax on State", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operation = { "operation": "sell", "unit-cost": 10.00, "quantity": 100 };

        const initialState = JSON.stringify(stockState.tax);
        sellHandler({ operation: operation, state: stockState });
        const finalState = JSON.stringify(stockState.tax);;

        expect(initialState).not.toEqual(finalState);
    })

    it("Should clean profit if pay taxes", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const sellOperation = { "operation": "sell", "unit-cost": 1000.00, "quantity": 100 };
        const buyOperation = { "operation": "buy", "unit-cost": 100.00, "quantity": 100 };

        sellHandler({ operation: sellOperation, state: stockState });
        buyHandler({ operation: buyOperation, state: stockState });

        expect(stockState.profit).toEqual(0);
    })
});