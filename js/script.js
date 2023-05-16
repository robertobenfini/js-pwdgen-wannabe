// nome
let nome= prompt ("Come ti chiami?");

// cognome
let cognome= prompt ("Qual è il tuo cognome?");

// colore preferito
let colore= prompt ("Qual è il tuo colore preferito?");

// variabile password
let password = `${nome}${cognome}${colore}21`;

// password
document.getElementById ("password").innerHTML = (password);