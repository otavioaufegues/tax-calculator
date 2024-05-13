import { avgPriceCalculator, taxCalculator, profitCalculator } from '../calculator.js';

describe('Average price calculator', () => {
    it('Should calculate average price correctly', () => {
        const operation = { "operation": "buy", "unit-cost": 10, "quantity": 5 };
        const currentAvgPrice = 20;
        const currentAmount = 10;

        const result = avgPriceCalculator({ operation, currentAvgPrice, currentAmount });

        expect(result).toEqual("16.67");
    });
});

describe('Profit Calculator', () => {
    it('Should calculate profit correctly', () => {
        const operation = { "operation": "sell", "unit-cost": 8.00, "quantity": 20 };
        const currentAvgPrice = 6;

        const result = profitCalculator({ operation, currentAvgPrice });

        expect(result).toEqual(40);
    });
});

describe('Taxes Calculator', () => {
    it('Should return 0 when operation value does not exceed tax-free maximum', () => {
        const operation = { "operation": "sell", "unit-cost": 10, "quantity": 15 };
        const profit = 25000;

        const result = taxCalculator({ operation, profit });

        expect(result).toEqual(0);
    });

    it('Should return  0 when profit is not positive', () => {
        const operation = { "operation": "sell", "unit-cost": 1000, "quantity": 25 };
        const profit = -500;

        const result = taxCalculator({ operation, profit });

        expect(result).toEqual(0);
    });

    it('Should calculate tax correctly when profit is positive and operation value exceeds tax-free maximum', () => {
        const operation = { "operation": "sell", "unit-cost": 1000, "quantity": 25 };
        const profit = 1000;

        const result = taxCalculator({ operation, profit });

        expect(result).toEqual(200); // Verifique o resultado esperado
    });
});
