const a = process.argv[2];
const b = process.argv[3];

const task3 = (a, b) => {
    return b == 0 ? a : task3(b, a % b);
}

const output = task3(a, b).toString();

process.stdout.write(output);