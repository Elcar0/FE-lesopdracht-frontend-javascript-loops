export function splitter() {
    console.log('==========================================');
}

console.log('=== O P D R A C H T   L O O P S . J S ===');

splitter();
// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen... Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
let star = '';
for (let i = 0; i < 5; i++) {
    star += '*';
    console.log(star);
}

splitter();
// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

//Opdracht 2 met repeat() functie
const loopText1 = 'loop...';
const loopText2 = loopText1 + '\n';
console.log(`${loopText2.repeat(4)}klaar!`);

splitter();

//Opdracht 2 met for loop
for (let i = 0; i < 4; i++) {
    console.log(loopText1);
}
console.log('klaar!');

splitter();
// ==========================================
// Opdracht 3. Maak een for-loop die automatisch factuurnummers genereert in het formaat INV-0001, INV-0002, enzovoorts. Zorg ervoor dat je begint bij nummer 1 en dat de nummers oplopen. Er zijn in totaal 8 factuurnummers nodig.

// Verwachte uitkomst:
// 'INV-0001'
// 'INV-0002'
// 'INV-0003'
// 'INV-0004'
// 'INV-0005'
// 'INV-0006'
// 'INV-0007'
// 'INV-0008'

// ==========================================
for (let i = 0; i < 10; i++) {
    console.log("'INV-" + String(i + 1).padStart(4, '0') + "'");
}

splitter();
// ==========================================
// Opdracht 4. Schrijf een for-loop die van 9 tot en met 18 loopt en de uren logt.
// - Bij 10:00 en 14:00 moet de tekst "Koffiepauze!" toegevoegd worden
// - Bij 12:00 moet de tekst "Lunchpauze!" toegevoegd worden
// - Bij 17:00 moet de tekst "Bijna klaar..." toegevoegd worden

// Verwachte uitkomsten:
// 9:00
// 10:00
// 11:00
// 12:00 Lunchpauze!
// 13:00
// 14:00
// 15:00
// 16:00
// 17:00 Bijna klaar...
// 18:00
// ==========================================


for (let i = 9; i <= 18; i++) {
    const time = i + ':00';
    const koffiePauze = ' Koffiepauze!';
    const lunchPauze = ' Lunchpauze!';
    const bijnaKlaar = ' Bijna klaar...';

    if (i === 10 || i === 14) {
        console.log(time + koffiePauze);
    } else if (i === 12) {
        console.log(time + lunchPauze);
    } else if (i === 17) {
        console.log(time + bijnaKlaar);
    } else {
        console.log(time);
    }
}

splitter();
// ==========================================
// Opdracht 5. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

for (let i = 0; i <= 9; i++) {
    let pointers = '';
    if (i >= 3) {
        pointers = '> ';
    }
    if (i >= 6) {
        pointers = '>' + pointers;
    }
    console.log(pointers + i);
}

splitter();
// ==========================================
// Opdracht 6 (BONUS). Schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz". Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz".

// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================

for (let i = 0; i < 100; i++) {
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    let text = null;

    if (i > 0) {
        if (i % 3 === 0) {
            text = fizz;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            text = fizz + buzz;
        } else if (i % 5 === 0) {
            text = buzz;
        }

        if (text === null) {
            text = i;
        }
        console.log(text);
    }
}

splitter();

