import processOperation from './application/processOperation.js';
import { createInterface } from 'readline';

const results = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    if (line.trim() === '') {
        rl.close();
        return;
    }
    const operations = JSON.parse(line);
    results.push(processOperation(operations));
})

rl.on('close', () => {
    results.map((result) => {
        process.stdout.write('\n' + result + '\n\n');
    });
});