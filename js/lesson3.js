const number = [1,2,3,4,5,5];


const sum = (namberList) => {
    let result = 0;

    for (let i = 0; i < namberList.length; i++) {
        result += namberList [i]
    }

    return result;
};

console.log(sum(number));


const numbers = [ 1, 2, 3, 4, 5, ];

const task = (numberList, degree) => {
    return numbers.map((number) =>  Math.pow(number, degree))
};

