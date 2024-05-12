import processOperation from './application/processOperation.js';
import { createInterface } from 'readline';

const results = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };

    if (line.trim() === '') {
        rl.close();
        return;
    }
    const operations = JSON.parse(line);
    results.push(JSON.stringify(processOperation({ operations: operations, stockState: stockState }).tax));
})

rl.on('close', () => {
    results.map((result) => {
        process.stdout.write('\n' + result + '\n\n');
    });
});