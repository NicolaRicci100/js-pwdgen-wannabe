console.log('JS OK');


const userName = prompt('dimmi il tuo nome', 'Nicola'); //chiedi nome
console.log(userName);

const userSurname = prompt('dimmi il tuo cognome', 'Ricci'); //chiedi cognome
console.log(userSurname);

const favColor = prompt('adesso dimmi il tuo colore preferito', 'Blu'); //chiedi colore
console.log(favColor);

const password = userName + userSurname + favColor + '21'; //somma nome,cognome e colore con numero 21
console.log('Genero Nuova Password');

document.getElementById('password').innerText = password; //mostra risultato all'utente