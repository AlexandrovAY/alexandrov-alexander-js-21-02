//  Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу, "неизвестное животное молчит", путём прототипного наследования создать объекты кота, собаки и попугая. Переопределить в них метод say, в зависимости от типа животного. Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится". Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми. Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-". Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

/* Объект */
// const animal = {
//   _name: 'кличка',
//   eat() {
//     console.log(`${this._name} ест`);
//   },
//   say() {
//     console.log(`неизвестное животное молчит`);
//   },
//   get name() {
//     return this._name;
//   },
//   rename(name) {
//     if(/[А-ЯЁа-яё -]+$/.test(name)) {
//       this._name = name;
//     } else {
//       console.log('Неправильное имя')
//     }
//   },
// }
//
// const cat = {
//   __proto__: animal,
//   _name: 'Кот',
//   say() {
//     console.log(`Мяу`);
//   },
//   hunt() {
//     console.log(`${this._name} охотится`);
//   }
// }
//
// Object.defineProperties(cat, {
//   _name: { writable: true, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false },
//   hunt: { writable: false, enumerable: false, configurable: false }
// });
//
// const dog = {
//   __proto__: animal,
//   _name: 'Собака',
//   say() {
//     console.log(`Гав`);
//   }
// }
//
// Object.defineProperties(dog, {
//   _name: { writable: true, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false },
// });
//
// const parrot = {
//   __proto__: animal,
//   _name: 'Попугай',
//   say() {
//     console.log(`Чик-Чирик`);
//   }
// }
//
// Object.defineProperties(parrot, {
//   _name: { writable: true, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false },
// });
//
//
// console.log(cat.name);
// cat.name = 'dsfsdf';
// console.log(cat.name);
// cat.rename('Матроскин');
// console.log(cat.name);
// cat.rename('cat');
// console.log(cat.name);



/* Функция конструктор */
// function Animal() {
//   this._name = 'кличка';
//
//   this.eat = function() {
//     console.log(`${this._name} ест`);
//   };
//
//   this.say = function() {
//     console.log(`неизвестное животное молчит`);
//   };
//
//   this.rename = function(name) {
//     if(/[А-ЯЁа-яё -]+$/.test(name)) {
//       this._name = name;
//     } else {
//       console.log('Неправильное имя')
//     }
//   };
//
//   Object.defineProperties(this, {
//     name: { get() { return this._name }, enumerable: false, configurable: false },
//     _name: { enumerable: false, configurable: false },
//     eat: { writable: false, enumerable: false, configurable: false },
//     say: { writable: false, enumerable: false, configurable: false },
//     rename: { writable: false, enumerable: false, configurable: false }
//   });
// }
//
// function Cat() {
//   Animal.call(this);
//
//   this.say = function() {
//     console.log(`Мяу`);
//   };
//
//   this.hunt = function() {
//     console.log(`${this.name} охотится`);
//   }
//
//   Object.defineProperties(this, {
//     hunt: { writable: false, enumerable: false, configurable: false }
//   });
//  }
//
// function Dog() {
//   Animal.call(this);
//
//   this.say = function() {
//     console.log(`Гав`);
//   };
// }
//
// function Parrot() {
//   Animal.call(this);
//
//   this.say = function() {
//     console.log(`Чик-Чирик`);
//   };
// }
//
// const cat = new Cat();
// const dog = new Dog();
// const parrot = new Parrot();
// console.log(Object.getOwnPropertyDescriptors(cat));
// console.log(cat.name)
// cat.name = 'Кот';
// console.log(cat.name)
// cat.rename('Барсик')
// console.log(cat.name)



/* Функция классы */
// class Animal {
//   #name = 'кличка'
//
//   constructor(name) {
//     this.rename(name)
//   }
//
//   get name () {
//     return this.#name;
//   }
//
//   eat() {
//     console.log(`${this.#name} ест`);
//   }
//
//   say() {
//     console.log(`неизвестное животное молчит`);
//   }
//
//   rename(name) {
//     if (/[А-ЯЁа-яё -]+$/.test(name)) {
//       this.#name = name;
//     } else {
//       console.log('Неправильное имя')
//     }
//   }
// }
//
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//
//   say() {
//     console.log(`Мяу`);
//   }
//
//   hunt() {
//     console.log(`${this.name} охотится`);
//   }
// }
//
// Object.defineProperties(Cat, {
//   name: { writable: false, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false },
//   hunt: { writable: false, enumerable: false, configurable: false }
// });
//
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//
//   say() {
//     console.log(`Гав`);
//   }
// }
//
// Object.defineProperties(Dog, {
//   name: { writable: false, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false }
// });
//
// class Parrot extends Animal {
//   constructor(name) {
//     super(name);
//   }
//
//   say() {
//     console.log(`Чик-Чирик`);
//   }
// }
//
// Object.defineProperties(Parrot, {
//   name: { writable: false, enumerable: false, configurable: false },
//   say: { writable: false, enumerable: false, configurable: false }
// });
//
// const cat = new Cat('Матроскин')
// const dog = new Dog('Шарик')
// const parrot = new Parrot('Мурзилка')
// console.log(cat.name);
// cat.name = 'Кот';
// console.log(cat.name);
// cat.rename('cat');
// cat.rename('Барсик');
// console.log(cat.name);
// cat.say()
// cat.hunt()
// console.log(cat);
// delete cat.say;
// console.log(cat);
//
// console.log(Object.getOwnPropertyDescriptor(Cat, 'name'));
// console.log(Object.getOwnPropertyDescriptor(Cat, 'say'));
// console.log(Object.getOwnPropertyDescriptor(Cat, 'hunt'));
