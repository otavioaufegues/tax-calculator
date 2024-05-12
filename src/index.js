const processOperation = require('./application/processOperation');
const readline = require('readline');

const results = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    if (line.trim() === '') {
        rl.close();
        return;
    }
    const operations = JSON.parse(line);
    results.push(JSON.stringify(processOperation(operations).tax));
})

rl.on('close', () => {
    results.map((result) => {
        process.stdout.write('\n' + result + '\n\n');
    });
});