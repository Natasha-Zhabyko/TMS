//task1//

const sayHello = function (name) {
    if (typeof name !== 'string') return 'error';

    const specialName = 'mark';

    if (name.toLowerCase() === specialName) {
        return 'Hi, Mark!'
    };

    return 'Hello, ' + name;
};

console.log (sayHello("Mark"));


//стрелочный способ//

const arrowSayHelloy = (name) => {
    if (typeof name !== 'string') return 'error';

    const specialName = 'mark';

    if (name.toLowerCase() === specialName) {
        return 'Hi, Mark!'
    };

    return 'Hello, ' + name;
};

console.log (arrowSayHelloy("Oleg"));

//task2//

function hypotenuse (n,m) {
    return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
}
console.log(hypotenuse(4, 3));


//task3//

function min (a,b) {
    return a < b ? a : b;
}

console.log (min (2,5));

//task4//

function isEven (value) {
    return value % 2 ===0 ? 'True' : 'False';
}

console.log (isEven (4));

//task5//

function deleteChars() {
    let str = 'Hello';
    str = str.slice(1);
    console.log(str);

    let letter = 'A';
    letter = letter.slice(1);
    console.log(letter);
}

deleteChars()

//task6//



//task7//

const checkLetterCase = function (letter) {
    if (letter === letter.toUpperCase()) {
    return 'Оууу май, большая буква!'
    }
    return 'Нет уж, маленькие буквы - скучно';

}

console.log(checkLetterCase("s"));

//task8//

const concatenate = function (str) {
    return 'Hello ' + str;
}

console.log(concatenate("World"))