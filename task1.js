
const task1 = () => {
    const input = process.argv[2];
    let output = input.replace(/[РКН]/gi, '');

    return output;
}

const output = task1();

process.stdout.write(output);