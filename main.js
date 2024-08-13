const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan)); 
console.log(Object.getOwnPropertyNames(juan)); 
console.log(Object.entries(juan)); 



Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: false,
    enumerable: true,
    configurable: true,
});
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
});
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));

// Shallow copy in JavaScript

/* const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAA";
    }
}; */

/* const obj2 = {};
for (prop in obj1) {
    obj2 [prop] = obj1[prop];
};

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1); */

// JSON.parse y JSON.stringify

/* const obj2 = JSON.stringify(obj1); */
/* const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj); */




// Recursividad 

/* function recursivida(numerito) {
    console.log(numerito);
    if (numerito < 5) {
        return recursivida(numerito + 1);
    } else {
        return 5;
    }
}  */

// function recursiva() {
//     if (/* validacion*/) {
//         // llamados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log({index, numerito});
// }

function recursiva(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();
        recursiva(numbersArray);
    } else {

    }
}


// Deep copy con recursividad

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAA";
    }
};

function isObject(subject) {
    return typeof subject == "object";
}

function isArray() {
    return Array.isArray(subject);    
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}