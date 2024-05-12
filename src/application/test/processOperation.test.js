import processOperation from '../processOperation.js';

describe("Process Operation", () => {
    it("Should NOT change stock state if operation not mapped", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operations = [{ "operation": "error-test", "unit-cost": 10.00, "quantity": 100 }];

        const initialState = JSON.stringify(stockState);
        processOperation({ operations: operations, stockState: stockState });
        const finalState = JSON.stringify(stockState);

        expect(initialState).toEqual(finalState);
    })

    it("Should UPDATE stock state if operation mapped", () => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        const operations = [{ "operation": "buy", "unit-cost": 10.00, "quantity": 100 }];

        const initialState = JSON.stringify(stockState);
        processOperation({ operations: operations, stockState: stockState });
        const finalState = JSON.stringify(stockState);

        expect(initialState).not.toEqual(finalState);
    })
});