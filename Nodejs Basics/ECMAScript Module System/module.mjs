function square(num) {
    return num**2;
}

function myCube(num) {
    return num **3;
}

//1. Direct Export but only one funcyion is exported in a module.
// export default square;

//2. Multiple Export method -> most practical

export {
    square,
    myCube as cube
};

//3. Exporting things as you defined them.

export function sum (a, b){
    return a + b;
}