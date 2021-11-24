let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

// exo 1
document.getElementById('index-pomme').innerText = pomme.indexOf('pomme').toString();

// exo 2
document.getElementById('last-index-m').innerText = pomme.lastIndexOf('m').toString();

// exo 3
if (pomme.startsWith('Elle'))
    console.log(pomme + ' Commence par Elle');

// exo 4
if (pomme.endsWith('!'))
    console.log(pomme + ' Se termine par un point d\'exclamation');

// exo 5
document.getElementById('pomme').innerText = pomme.substring(18, 23);

// exo 6
let array = pomme.split('');
let oneLine = document.getElementById('one-line');

for (let i = 0; i < array.length; i++)
    oneLine.innerText += array[i] + '\n';