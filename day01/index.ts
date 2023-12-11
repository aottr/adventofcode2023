const digitRegex = /(\d).*(\d)|(\d)/g;
const alphaLookup = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
]);
const alphaDigitRegex = new RegExp(`(\\d|(${[...alphaLookup.keys()].join('|')})).*(\\d|(${[...alphaLookup.keys()].join('|')}))|(\\d|(${[...alphaLookup.keys()].join('|')}))`, 'g');
const input = await Bun.file("input.txt", { type: "text/plain;charset=utf-8" }).text();
console.log('Part one:', [...input.matchAll(digitRegex)].reduce((acc, [a2m1, a1m1, a1m2, a2m2]) => acc + (a1m1 === undefined && a1m2 === undefined ? + (Number(a2m1) * 10 + Number(a2m1)) : (Number(a1m1) * 10)) + (a2m2 === undefined ? Number(a1m2) : 0), 0));

console.log('Part two:', [...input.matchAll(alphaDigitRegex)].reduce((acc, [a2m1, a1m1, a1m1c, a1m2, a1m2c, a2m1n, _]) => acc + (
    a2m1 === a2m1n ? (alphaLookup.has(a2m1) ? alphaLookup.get(a2m1)! * 10 + alphaLookup.get(a2m1)! : Number(a2m1) * 10 + Number(a2m1)) : (alphaLookup.has(a1m1) ? alphaLookup.get(a1m1)! : Number(a1m1)) * 10) + (a2m1 === a2m1n ? 0 : (alphaLookup.has(a1m2) ? alphaLookup.get(a1m2)! : Number(a1m2))), 0))