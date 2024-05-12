import buyHandler from "../operations/buyHandler.js";
import sellHandler from "../operations/sellHandler.js";

const functionMap = {
    "buy": buyHandler,
    "sell": sellHandler
};

export default function processOperation({ operations, stockState }) {

    operations.map((operation) => {
        const messageFunction = operation.operation.toLowerCase();
        const selectedFunction = functionMap[messageFunction];

        if (selectedFunction) {
            stockState = selectedFunction({ operation: operation, state: stockState });
        }
    });

    return stockState;
}