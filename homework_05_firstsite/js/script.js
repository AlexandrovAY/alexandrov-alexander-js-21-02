/* 1. На вход поступает массив, вывести массив, удалив неуникальные значения. */

const task_1 = () => {
    const array = [1, "asd", 2, 3, 4, 4, 1, "asd"];
    const unique = array.filter((value, index, array) => array.indexOf(value) === index);
    console.log(unique);
}

// task_1();

/* 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать. */

const task_2 = () => {
    const inArray = [1, 2, 3, 4, 5, "asd"]
    const getReverseArray = (arr) => {
        const array = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            array.push(arr[i]);
        }
        return array;
    }

    console.log(inArray);
    console.log(getReverseArray(inArray));
}

// task_2();

/* 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один. */

const task_3 = () => {
    const array = [
        [1, 2],
        [3, 4],
        ["val1", "val2"]
    ];

    const obj = array.reduce((prevObj, [key, value]) => ({ ...prevObj, [key]: value }), {});
    console.log(obj);
}

// task_3();

/* 4. На вход поступает объект, вывести сумму числовых свойств объекта. */

const task_4 = () => {
    const obj = {
        a: 100,
        b: 300,
        c: 250,
    };

    function sumarize(obj) {
        return Object.values(obj).reduce((a, b) => a + b, 0)
    }

    console.log(sumarize(obj));
}

// task_4();

/* 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива. */

const task_5 = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const average = array.reduce((a, b) => (a + b)) / array.length;
    console.log(average)
}

// task_5();

/* 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль. */

const task_6 = () => {
    function Calculator() {
        this.currentValue = 0;
        this.add = (num) => {
            this.currentValue += num;
            console.log(this.currentValue);
        }
        this.subtract = (num) => {
            this.currentValue -= num;
            console.log(this.currentValue);
        }
        this.divide = (num) => {
            this.currentValue /= num;
            console.log(this.currentValue);
        }
        this.multiply = (num) => {
            this.currentValue *= num;
            console.log(this.currentValue);
        }
        this.reset = () => {
            this.currentValue = 0;
            console.log(this.currentValue);
        }
    }

    const calc = new Calculator();
    calc.add(5);
    calc.multiply(10);
    calc.divide(5);
    calc.reset();
    calc.add(5);
}

// task_6();

/* 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля. */

const task_7 = () => {
    const array = [100, 27, 43, "value", "asd", {name: "Alex"} ];

    const func = (array) => {
        const numbers = [];
        const strings = [];
        const objects = [];
        array.reduce((res, item) => {
            if (typeof item === 'object') {
                objects.push(item);
            } else if (typeof item === 'number') {
                numbers.push(item);
            } else if (typeof item === 'string') {
                strings.push(item);
            }
        });
        console.log({"numbers": numbers, "strings": strings, "objects": objects});
    }

    func(array);
}

// task_7();

/* 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого) */

const task_8 = () => {
    const array = [100, 27, 43, 1, 5, 10, 26, 67, 83]
    const func = (array, min, max) => {
        if (min < max) {
            return array.filter(num => num >= min && num <= max);
        } else {
            return array.filter(num => num >= max && num <= min);
        }
    }

    console.log(func(array, 10, 50));
}

// task_8();

/* 9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false */

const task_9 = () => {
    const func = (str1, str2) => {
        if (str1.length !== str2.length) {
            console.log(false);
            return;
        }
        const sort = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
        console.log(str1.trim() === str2.trim() ? false : sort(str1) === sort(str2));
    }

    func("РЕАЛИЗМЕ", "ИЗРАИЛЕМ");
    func("Лунь", "нуль");
    func("Воз", "зов");
    func("Чертог", "горечь");
    func("Днесь", "снедь");
}

// task_9();

/* 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна. */

const task_10 = () => {
    const user = {
        name: "Andreas",
        email: "any@example.com",
        login: "AndreySFN",
        obj: {name: "asd", 1: 2},
        arr: [1, 2, 3],
        func2: () => console.log(''),
        func: () => {
            let sum = '';
            Object.entries(user).forEach(([key, value]) => {
                if (typeof value === "object" || key === "func") {

                } else {
                    if (sum === '') {
                        sum += `"${key}: ${value}"`;
                    } else {
                        sum += `, "${key}: ${value}"`;
                    }
                }
            });
            console.log(sum);
        }
    }

    user.func(user);
}

// task_10();

/* 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено */

const task_11 = () => {
    function User() {
        this.name = '';
        this.age = 0;
        this.setProp = (key, value, obj) => {
            Object.defineProperty(this, key, {
                value: value,
                writable: obj.writable,
                configurable: obj.configurable,
                enumerable: obj.enumerable,
            })
        }
    }

    const firstUser = new User();

    firstUser.setProp('name', 'Alex', {writable: true, configurable: true, enumerable: true});
    firstUser.setProp('age', 25, {writable: false, configurable: false, enumerable: false});


    console.log(firstUser);
    console.log(Object.getOwnPropertyDescriptor(firstUser, 'name')); // дескрипторы по полю name
    console.log(firstUser.name);
    console.log('');
    console.log(Object.getOwnPropertyDescriptor(firstUser, 'age')); // дескрипторы по полю name
    console.log(firstUser.age);
}

// task_11();
