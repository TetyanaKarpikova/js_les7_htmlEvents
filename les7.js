// 1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.querySelectorAll('#text');
// div.forEach(elem => {
//     elem.style.height = '150x';
//     elem.style.width = '400px';
//     elem.style.backgroundColor = 'blue';    
//     let child = elem.firstElementChild;
//     child.style.marginTop = '20px';
//     child.style.marginLeft = '320px';
//     child.onclick = (ev) =>{
//         ev.target.parentElement.style.display = 'none';
//     }   
// })


// 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = 'hide2'
// btn.style.color = 'green';
// btn.onclick = (ev) => {    
//     ev.target.style.display = 'none';
// }
// document.body.appendChild(btn);

// 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let inpAge = document.getElementById('inp3');
// console.log(inpAge);
// let btn = document.getElementById('sub3');
// btn.onclick = (ev) => {
//     if (inpAge.value < 18 && inpAge.value > 0) {
//         alert('Ваш вік менший за 18.');
//         return;     
//     }
//     alert('Ваш вік більший ніж 18');
// }



// 4 - Создайте меню, которое раскрывается/сворачивается при клике
// let div = document.getElementById('task4');
// let list4 = document.getElementById('list4');
// div.onclick = (ev) => {
// if (list4.style.display === 'block') {
//     list4.style.display = 'none';        
// } else {
//     list4.style.display = 'block';        
// }
//                // // list4.style.display  = list4.style.display === 'block' ? 'none' : 'block';
// }

// 5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comment = [
//     {title: 'user1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
//     {title: 'user2', body: 'Consectetur voluptate consequuntur, earum soluta libero'},
//     {title: 'user3', body: 'voluptatibus laboriosam nostrum accusantium quaerat officiis'},
//     {title: 'user4', body: 'quas amet, nesciunt impedit itaque repellendus ex nobis error illo.'},
//     {title: 'user5', body: 'Distinctio quo sed dolor.'}
// ]
// let divBasic = document.getElementById('task5');
// for (const item of comment) {
//     let divCom = document.createElement('div');
//     let h3Com = document.createElement('h3');
//     let pCom = document.createElement('p');
//     let btnHide = document.createElement('button');
//     h3Com.innerText = item.title;
//     pCom.innerText = item.body; 
//     btnHide.innerText = 'Hude comment'   ;

//     btnHide.onclick = (ev) => {
//         pCom.style.display = pCom.style.display === 'block' ? 'none' : 'block';
//     }

//     divCom.appendChild(h3Com);
//     divCom.appendChild(pCom);
//     divCom.appendChild(btnHide);
//     divBasic.appendChild(divCom);
// }
//  document.body.appendChild(divBasic);


// 6 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.forms.task61;
// let form2 = document.forms.task62;
// let btnRead = document.getElementById('ok6');
// let inp1 = form1.inpAbc;
// let inp2 = form1.inpDef;
// let inp3 = form2.inpGhi;
// let inp4 = form2.inpJkl;
// btnRead.onclick = (ev) => {
//     console.log(inp1.value);
//     console.log(inp2.value);
//     console.log(inp3.value);
//     console.log(inp4.value);
// }


// 7 - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function tablCreate(amountRow, amountCeil, tag) {
//     let tagName = document.createElement(tag);
//     let tabl = document.createElement('table');
//     for (let i =  0; i < amountRow; i++ ) {
//         let tr = document.createElement('tr');      
//         for (let y = 0; y < amountCeil; y++) {
//             let td = document.createElement('td');
//             td.innerText = 'lorem';
//             td.style.border = '1px solid black';          
//             tr.appendChild(td);
//         }    
//         tabl.appendChild(tr);
//         tagName.appendChild(tabl);
//     }
//     document.body.appendChild(tagName);    
// }
// tablCreate(3, 5, 'div');


// 8 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let divTask8 = document.getElementById('task8');
// let btnCreate = document.getElementById('btnCreateTabl');

// function creatTable(row, ceil, text) {
//     let table = document.createElement('table');

//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         for (let y = 0; y < ceil; y++) {
//             let td = document.createElement('td');
//             td.innerText = text;
//             td.style.border = '1px solid black';
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//         divTask8.appendChild(table);
//     }
// }

// btnCreate.onclick = (ev) => {
//     let inpRow = document.getElementById('inpRow8').value;
//     let inpCiel = document.getElementById('inpCeil8').value;
//     let inpText = document.getElementById('inpText8').value;
//     creatTable(inpRow, inpCiel, inpText);    
// }


// 9 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let divBasic = document.getElementById('task9');
// let btnPrev = document.getElementById('btnPrev');
// let btnNext = document.getElementById('btnNext');

// let ind = 0;
// showSlid(ind);

// btnPrev.onclick = (ev) => {    
//     showSlid(--ind); 
// }

// btnNext.onclick = (ev) => {
//     showSlid(++ind)
// }

// function showSlid(i) {    
//     let arr_img = document.getElementsByTagName('img');

//     i < 0 ? ind = arr_img.length + i : ind = i;      
//     i >= arr_img.length ? ind = 0 : ind = ind;
     
//     for (let y = 0; y < arr_img.length; y++) {
//         y !== ind ? arr_img[y].style.display = 'none' : arr_img[y].style.display = 'block';        
//     }  
   
// }



// 10 - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//sorry

// let arrN = ['блядь', 'їбати', 'хер', 'мудак', 'піздець'];

// let inp10 = document.getElementById('badWord');
// let check = '';

// let btn = document.getElementById('btnCheck');
// btn.onclick = (ev) => {
//     check = inp10.value.toLowerCase();        
//     if (check) {
//         if (arrN.find(value => value.startsWith(check))) {
//             alert('Використання заборонено!');
//             inp10.value = '';
//         }
//     }
// }


// 11 - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arrN = ['блядь', 'їбати', 'хер', 'мудак', 'піздець'];
// let inp11 = document.getElementById('badWord');
// let check = '';
// let flag = 0;

// let btn = document.getElementById('btnCheck');
// // btn.onclick = (ev) => {
// //     check = inp11.value.toLowerCase();
// //     console.log(check);    
// //         for (const item of arrN) {
// //             if (check.indexOf(item) != -1) {
// //                 flag = 1
// //             }
// //         }    
// //     flag === 1 ? alert('Використання заборонено!') : true;
// //     flag = 0;

// // }
// btn.onclick = (ev) => {
//     check = inp11.value.toLowerCase();
//     console.log(check);    
//         for (const item of arrN) {
//             if (check.includes(item)) {
//                 flag = 1
//             }
//         }    
//     flag === 1 ? alert('Використання заборонено!') : true;
//     flag = 0;

// }


// 12 -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let divClub = document.getElementById('rulClub');
// let divContent = document.getElementById('content');
// let divWrap = document.getElementById('wrap');
// let h2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// for (let i = 0; i < h2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor' + i;
//     a.href = '#' + anchor;
//     a.innerText = h2[i].textContent;
//     h2[i].setAttribute('id', anchor);
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// divContent.appendChild(ul);
// divContent.style.float = 'left';
// divWrap.style.float = 'left';
// divContent.style.width = '40%';
// divWrap.style.width = '60%';


// 13 -- взять массив пользователей
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let divBasic = document.getElementById('task13');
// let check1 = document.getElementById('checkStatus');
// let check2 = document.getElementById('checkAge');
// let check3 = document.getElementById('checkCity');
// let btn = document.getElementById('btnFilter');

// function writeUser(arr) {
//     let div = document.createElement('div');
//     for (const item of arr) {
//         let p = document.createElement('p');
//         let {name, age, status, address: {city, street, number}} = item;
//         p.innerText = `name: ${name}, age:  ${age}, status:  ${status}, city: ${city}, street: ${street}, number: ${number}`;

//         div.appendChild(p);
//     }
//     divBasic.appendChild(div);
// }

// btn.onclick = (ev) => {
//     let arrUsers = JSON.parse(JSON.stringify(usersWithAddress));
//     if (check1.checked) {
//         arrUsers = arrUsers.filter( value => !(value.status));
//     }
//     if (check2.checked) {
//         arrUsers = arrUsers.filter( value => value.age >= 29);
//     }
//     if (check3.checked) {
//         arrUsers = arrUsers.filter( value => value.address.city === 'Kyiv');
//     }

//     divBasic.innerText = '';
//     divBasic.appendChild(writeUser(arrUsers));
// }

// writeUser(usersWithAddress);



//  14 - Давайте найдем сумму примитивных элементов нашего массива:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// let sumN = 0;

// function sumRecurs(arr){
//     for(const lev1 of arr){
//         let elem = lev1;
//         if (Array.isArray(elem)){
//             elem = sumRecurs(elem);
//         } else {
//             sumN += elem;            
//         }
//     }
//     return sumN;

// }

// let result = sumRecurs(arr);
// console.log(result);


