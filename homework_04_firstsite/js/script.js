/* 1. Написать скрипт, предлагающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать. */
const task_1 = (condition) => {
    const str = prompt('Введите две строки через запятую', condition);
    if ((str.indexOf(',') > 0) && (str.indexOf(',') === str.lastIndexOf(','))) {
        alert(str.slice(0, str.indexOf(',')).trim().toLowerCase().includes(str.slice(str.indexOf(',') + 1, str.length).trim().toLowerCase()));
    } else {
        alert('Ошибка! Введите две строки через запятую');
    }
}

/* task_1('ПерВая Строка, пЕрвАя сТрока'); */

/* 2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие. */

const task_2 = (enteredString, enteredNumber) => {
    const string = prompt('Введите строку', enteredString);
    const count = prompt('Введите строку', enteredNumber);
    alert(string.substr(string, count) + '...');
}

/* task_2('Первая строка', 4); */

/* 3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения */

const task_3 = (enteredDate) => {
    alert(prompt('Введите дату и время в формате \'12/02/2021 12-00\'', enteredDate).replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2})-(\d{2})/g, '$1.$2.$3 $4:$5'));
}

/* task_3('12/02/2021 12-00'); */

/* 4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать) */

const task_4 = (enteredString) => {
    const str = prompt('Введите ФИО', enteredString);
    alert(str);
    const regexp = /^([А-Я]{1}[а-я]+)\s+([А-Я]{1}[а-я]+)\s*([А-Я]{1}[а-я]{1,}(вич|вна))?$/g;
    alert(regexp.test(str));
}

/* task_4('Иванов Иван Иванович'); */

/* 5. На вход дана строка в PamalCase, преобразовать строку в snake_case */

const task_5 = (enteredString) => {
    function lowerCase(enteredString) {
        return enteredString.replace(/[A-Z]/g, u => u.toLowerCase());
    }
    function firstLowerCase(enteredString) {
        return enteredString.replace(/^[A-Z]/, u => u.toLowerCase());
    }
    function removeCc(enteredString){
        return enteredString.replace(/([A-Z])/g, '_$1');
    }
    alert(lowerCase(removeCc(firstLowerCase(enteredString))));
}

/* task_5('PamalCase'); */

/* 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии */

const task_6 = (enteredString) => {
    alert(enteredString.match(/<!--[\s\S]*?-->/g));
}

/* task_6(`
<li class="social__item">
  <!-- Комментарий -->
  <a class="social__link social__link--instagram" href="#">
    <svg width="22" height="22">
      <use xlink:href="img/sprite.svg#insta"></use>
    </svg>
    <span class="visually-hidden">
      Мы в Инстаграме
    </span>
  </a>
  <!-- gdfgdfg -->
  <!-- 234 -->
</li>
`); */

/* 7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".") */

const task_7 = (enteredNumber) => {
    alert(enteredNumber.match(/[0-9.]+/g));
}

/* task_7('23.30+99&231.312 123123123_9.9'); */

/* 8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,разделённых или не разделённых знаком "-". Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск", при соответствии введённого значения, или "неверный илентификатор", при несоответствии. При несоответствии снова вывести форму для ввода строки. */

const task_8 = (enteredString) => {
    const regexp = /^[A-Za-z0-9]{4}([-]?[A-Za-z0-9]{4}){3}$/g;
    if (regexp.test(enteredString)) {
        alert('ведётся поиск');
    } else {
        alert('неверный идентификатор');
    }
}

/* task_8('ad4s-5678-grfd-f5gg'); */