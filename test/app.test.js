import { createInterface } from 'readline';
import fs from "fs";
import { jest } from "@jest/globals";
import processOperation from "../src/application/processOperation";

const cases = [
    "case1",
    "case2",
    "case1e2",
    "case3",
    "case4",
    "case5",
    "case6",
    "case7",
    "case8",
];

describe("Integration tests", () => {
    test.each(cases)("Case: %p", (inputCase) => {
        let stockState = { amount: 0, avgPrice: 0, profit: 0, tax: [] };
        let results = [];
        let expectOutputArray = [];
        const rlInput = createInterface({
            input: fs.createReadStream(`./test/input/${inputCase}`),
            output: process.stdout,
            terminal: false
        });

        rlInput.on('line', (line) => {
            if (line.trim() === '') {
                rlInput.close();
                return;
            }

            const operations = JSON.parse(line);
            results.push(processOperation({ operations: operations, stockState: stockState }).tax);
        });

        const rlOutput = createInterface({
            input: fs.createReadStream(`./test/output/${inputCase}`),
        });

        rlOutput.on('line', (lineOutput) => {
            if (lineOutput.trim() === '') {
                rlOutput.close();
                return;
            }
            expectOutputArray.push(JSON.parse(lineOutput));
        });

        rlInput.on('close', () => {

            results.map((result, index) => {
                expect(parseFloat(result)).toEqual(parseFloat(expectOutputArray[index]));
            });
        });
    });
});