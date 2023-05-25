console.log('JS OK');


const userName = prompt('dimmi il tuo nome', 'Nicola');
console.log(userName);

const userSurname = prompt('dimmi il tuo cognome', 'Ricci');
console.log(userSurname);

const favColor = prompt('adesso dimmi il tuo colore preferito', 'Blu');
console.log(favColor);

const password = userName + userSurname + favColor + '21';
console.log('Genero Nuova Password');

document.getElementById('password').innerText = password;