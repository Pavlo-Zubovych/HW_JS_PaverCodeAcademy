// Cat section
let buttonCat = document.getElementById('buttonCat');
let inputText = document.getElementById('inputText');
let catImg = document.querySelector('img');

buttonCat.addEventListener('click', onClik);
buttonCat.addEventListener('dblclick', ondblclick);

function onClik(i) {
    i.preventDefault;

    catImg.src = './img/Cat2.webp';

    inputText.value = 'Небезпека';
    inputText.style.color = 'red';
    inputText.fontSize = '30px';

    buttonCat.style.background = 'orange';
    buttonCat.value = 'Заспокоїти! -> 2x click';
}

function ondblclick(i) {
    i.preventDefault;

    catImg.src = './img/Cat1.jpg';
    inputText.value = 'Безпека)';
    inputText.style.color = '#61be03';

    buttonCat.style.background = '#61be03';
    buttonCat.value = 'Взбодрити кіску';
}

//______________________________________________________________

// // Button section v1
// //Без this.
// //На кожну кнопку повішений слухач подій.

// let btn1 = document.getElementById('button1');
// let btn2 = document.getElementById('button2');
// let btn3 = document.getElementById('button3');
// let btn4 = document.getElementById('button4');
// let btn5 = document.getElementById('button5');
// let btn6 = document.getElementById('button6');
// let btn7 = document.getElementById('button7');

// btn1.addEventListener('click', onClickButton);
// btn2.addEventListener('click', onClickButton);
// btn3.addEventListener('click', onClickButton);
// btn4.addEventListener('click', onClickButton);
// btn5.addEventListener('click', onClickButton);
// btn6.addEventListener('click', onClickButton);
// btn7.addEventListener('click', onClickButton);

// function onClickButton(event) {
//   //   console.log(event.target.textContent);
//   alert(`Була натиснута кнопка "${event.target.textContent}"`);
// }

//______________________________________________________________

// Button section v2
// Oдин слухач подій, повішений на батьківський елемент для.

let someButoon = document.querySelector('#sectionButton');

someButoon.addEventListener('click', onClickButton);

function onClickButton(event) {
    //   console.log(`Була натиснута кнопка "${event.target.textContent}"`);

    alert(`Була натиснута кнопка "${event.target.textContent}"`);
}

//______________________________________________________________

// Button section & this

function onClickBtnThis(id) {
    let btn = document.getElementById(id);

    //   console.log(btn.value);

    alert(`Була натиснута кнопка "${btn.value}"`);
}

//______________________________________________________________

//HW 5module section

// Посилання на поле введеня
let formForText = document.getElementById('formForText');

// Посилання на кнопки
let simvol = querySelector('.simvol');
let btnNumber = document.querySelector('.number');

//Слухач подій для символів
// simvol.addEventListener('click')

//Слухач подій для цифр
btnNumber.addEventListener('click', onClickBtn);

function onClickBtn(e) {
    formForText.value += e.target.textContent;
    console.log(e.target.textContent);
}
