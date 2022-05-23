//task1//

const numbers = [ 1, 2, 3];

    const task = (numbers) => {
        return numbers.map((number, index) => {
        return number % 2 === 0 ? number + 1 : number - 1;
        });
};

console.log(task(numbers));

//task2//

const worlds = ["hello", "wOrLd"];
const capitalise = (worlds) => {
    return worlds.map((value) => {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
});
};

console.log(capitalise(worlds));

//task3//



//task4//

const ispalindrom = (word) => {
    const chars = word.split("");
    const reversed = chars.reverse("");
    const jouned = reversed.join("");
    return word.toLowerCase() === jouned.toLowerCase();
};

console.log(ispalindrom("шалаш"));