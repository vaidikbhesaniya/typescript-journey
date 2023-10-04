interface Mathfunc {
    (x: number, y: number): number
}

const add: Mathfunc = (x: number, y: number): number => {
    return x + y
}

console.log(add(4, 5));
