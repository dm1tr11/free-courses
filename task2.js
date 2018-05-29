const a = process.argv[2];
const b = process.argv[3];

const task2 = (a, b) => {

    if (a.length != b.length) return -1;

    const len = a.length;
    let count = 0;
    
    for (let i = 0; i < len; i++) {

        for (let j = 0; j < len; j++) {
            if (a[j] != b[(j + i) % len]) {
                count = 0;
                break;
            }

            count++;
        }

        if (count) {
            return i == 0 ? 0 :
                i > Math.round(len / 2) ? len - i : i;
        }

    }

    return -1;
}

const output = task2(a, b).toString();

process.stdout.write(output);