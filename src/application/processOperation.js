import buyHandler from "../operations/buyHandler.js";
import sellHandler from "../operations/sellHandler.js";

const functionMap = {
    "buy": buyHandler,
    "sell": sellHandler
};

export default function processOperation(operations) {
    let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };

    operations.map((operation) => {
        const messageFunction = operation.operation.toLowerCase();
        const selectedFunction = functionMap[messageFunction];

        if (selectedFunction) {
            stockState = selectedFunction({ operation: operation, state: stockState });
        } else {
            process.stdout.write('Função não encontrada para: ' + messageFunction + '\n');
        }
    });

    return stockState;
}