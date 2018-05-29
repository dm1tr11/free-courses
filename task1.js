const input = process.argv[2];
let output = input.replace(/[РКН]/gi, '');
process.stdout.write(output);