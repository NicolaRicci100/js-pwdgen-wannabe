console.log('JS OK');


const userName = prompt('dimmi il tuo nome', 'Nicola');
console.log('userName');

const userSurname = prompt('dimmi il tuo cognome', 'Ricci');
console.log('userSurname');

const favColor = prompt('adesso dimmi il tuo colore preferito', 'Blu');
console.log('userColor');

const password = userName + userSurname + favColor + '21';
console.log('password');

document.getElementById('password').innerText = password;