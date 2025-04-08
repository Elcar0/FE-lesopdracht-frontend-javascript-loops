import {splitter} from "./loops.js";

console.log('=== O P D R A C H T   L O O P S - A R R A Y S - O B J E C T S . J S ===');
splitter();
// ==========================================
// Opdracht 1. Het sturen van salaris-mailtjes is voor Bob een tijdrovende klus. Bovendien typt hij met twee vingers,
// dus tegen de tijd dat hij alle mails verstuurd heeft, zijn al zijn collega's al langs zijn bureau gelopen om te vragen
// wanneer ze hun salaris kunnen verwachten. Schrijf een script dat voor elke medewerker in de array een salarisbriefje
// genereert en dit in de terminal print, zodat Bob dat snel kan kopiëren-en-plakken.

// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 medewerkers zou bevatten!
// Tip: print eerst alleen de salarissen en voeg daarna pas de tekst toe

// Verwachte uitkomsten:
// 	'Beste Max, je salaris van €3200,- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.',
// 	'Beste Sophia, je salaris van €4000,- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.',
// 	'Beste Ali, je salaris van €2800,- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.',
// 	'Beste Nina, je salaris van €3500,- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.',
// 	'Beste Otis, je salaris van €2800,- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.',
// ==========================================

const salaryDetails = [
    {name: 'Max', salary: 3200},
    {name: 'Sophia', salary: 2350},
    {name: 'Ali', salary: 2800},
    {name: 'Nina', salary: 3500},
    {name: 'Otis', salary: 2800}
];

for (let i = 0; i < salaryDetails.length; i++) {
    console.log(`'Beste ${salaryDetails[i].name}, je salaris van €${salaryDetails[i].salary},- is zojuist overgemaakt. Val me nu alsjeblieft niet meer lastig.'`);
}

splitter();
// ==========================================
// Opdracht 2. Wanneer iemand een verlof-aanvraag doet, moet Bob eerst uit zijn hoofd uitrekenen of deze medewerker nog
// voldoende vrije dagen over heeft voor de aanvraag. En dat gaat nog wel eens mis... Zorg ervoor dat het aantal vakantiedagen
// dat iedere medewerker nog op kan nemen, in de terminal wordt geprint

// Verwachte uitkomst:
// 	'Max heeft nog 15 vakantiedagen over.',
// 	'Sophia heeft nog 15 vakantiedagen over.',
// 	'Ali heeft nog 2 vakantiedagen over.',
// 	'Nina heeft nog 20 vakantiedagen over.',
// 	'Otis heeft nog 18 vakantiedagen over.',
// ==========================================

const vacationDays = [
    {name: 'Max', totalVacationDays: 25, usedVacationDays: 10},
    {name: 'Sophia', totalVacationDays: 30, usedVacationDays: 15},
    {name: 'Ali', totalVacationDays: 20, usedVacationDays: 18},
    {name: 'Nina', totalVacationDays: 25, usedVacationDays: 5},
    {name: 'Otis', totalVacationDays: 25, usedVacationDays: 7},
];

for (let i = 0; i < vacationDays.length; i++) {
    let freeVacationDays = vacationDays[i].totalVacationDays - vacationDays[i].usedVacationDays;
    console.log(`'${vacationDays[i].name} heeft nog ${freeVacationDays} vakantiedagen over.'`);
}

splitter();
// ==========================================
// Opdracht 3. Bob heeft een lijst van medewerkers en de opleidingen die ze volgen. Hij wil weten wie er een opleiding volgen
// in de maand januari. Schrijf een script dat de lijst doorloopt en voor iedere medewerker die een opleiding in januari volgt,
// de naam en de opleiding in de console wordt gelogt.

// Verwachte uitkomsten:
// Max: Leiderschapstraining
// Ali: Communicatietraining
// ==========================================

const employeesInTraining = [
    {name: 'Max', training: 'Leiderschapstraining', month: 'Januari'},
    {name: 'Sophia', training: 'Projectmanagement', month: 'Februari'},
    {name: 'Ali', training: 'Communicatietraining', month: 'Januari'},
    {name: 'Nina', training: 'Teamworktraining', month: 'Maart'},
    {name: 'Otis', training: 'Teamworktraining', month: 'Februari'},
];

for (let i = 0; i < employeesInTraining.length; i++) {
    if (employeesInTraining[i].month === 'Januari') {
        console.log(`${employeesInTraining[i].name}: ${employeesInTraining[i].training}`);
    }
}

splitter();
// ==========================================
// Opdracht 4a. Medewerkers worden ieder jaar beoordeelt op hun functioneren. Het is aan Bob om de scores om te zetten
// naar percentages en toe te voegen aan de adminstratie. Schrijf een script dat de score van iedere medewerker in de
// array omzet naar een salarisverhoging-percentage en dit in de terminal print. De percentages zijn als volgt:
// - minder dan 60 = 0%
// - 60 tot 69 = 2%
// - 70 tot 89 = 3%,
// - 90 tot 99 = 4%
// - 100 = 6%

// Verwachtte uitkomsten:
// 3%
// 3%
// 4%
// 2%
// 6%
// ==========================================

const scores = [
    {name: 'Max', score: 83, salaryIncrease: null},
    {name: 'Sophia', score: 77, salaryIncrease: null},
    {name: 'Ali', score: 92, salaryIncrease: null},
    {name: 'Nina', score: 66, salaryIncrease: null},
    {name: 'Otis', score: 100, salaryIncrease: null},
];


// Code voor opdracht 4a en 4b in een functie gezet omdat ze exact dezelfde code zouden gebruiken.
function salaryRaise(score) {
    let salaryIncrease = 0;

    if (score >= 60 && score < 70) {
        salaryIncrease = 2;
    } else if (score >= 70 && score < 90) {
        salaryIncrease = 3;
    } else if (score >= 90 && score < 100) {
        salaryIncrease = 4;
    } else if (score === 100) {
        salaryIncrease = 6;
    }
    return salaryIncrease;
}

// 4a for-loop
for (let i = 0; i < scores.length; i++) {
    console.log(`${salaryRaise(scores[i].score)}%`)
}

splitter();
// ==========================================
// Opdracht 4b. Breid je script uit door het percentage op te slaan in de 'salaryIncrease'-property van ieder object in de array.

// Verwachte uitkomst:
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(scores) geeft: [
// 	{name: 'Max', score: 83, salaryIncrease: '3%'},
// 	{name: 'Sophia', score: 77, salaryIncrease: '3%'},
// 	{name: 'Ali', score: 92, salaryIncrease: '4%'},
// 	{name: 'Nina', score: 66, salaryIncrease: '2%'},
// 	{name: 'Otis', score: 100, salaryIncrease: '6%'},
// ];
// ==========================================

// 4b for-loop
console.log(scores);

for (let i = 0; i < scores.length; i++) {
    scores[i].salaryIncrease = `${salaryRaise(scores[i].score)}%`;
}
console.log(scores);

splitter();
// ==========================================
// Opdracht 5. Bob wil ervoor zorgen dat al zijn medewerkers een correct bedrijfs-e-mailadres hebben. Deze e-mailadressen moeten
// automatisch worden gegenereerd ("Nee Bob, NIET met de hand!!") in het format: voornaam.achternaam@loop-it-solutions.nl
// Sla dit op in een nieuwe property "email" die je toevoegt aan iedere medewerker.

// Verwachte uitkomst:
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(employees) geeft: [
//     { firstName: 'Max', lastName: 'Janssen', email: 'Max.Janssen@loop-it-solutions.nl' },
//     { firstName: 'Sophia', lastName: 'Vries', email: 'Sophia.Vries@loop-it-solutions.nl' },
//     { firstName: 'Ali', lastName: 'Bakir', email: 'Ali.Bakir@loop-it-solutions.nl' },
//     { firstName: 'Nina', lastName: 'Berg', email: 'Nina.Berg@loop-it-solutions.nl' },
//     { firstName: 'Otis', lastName: 'Kuiper', email: 'Otis.Kuiper@loop-it-solutions.nl' },
// ]
// ==========================================

const employees = [
    {firstName: 'Max', lastName: 'Janssen'},
    {firstName: 'Sophia', lastName: 'Vries'},
    {firstName: 'Ali', lastName: 'Bakir'},
    {firstName: 'Nina', lastName: 'Berg'},
    {firstName: 'Otis', lastName: 'Kuiper'},
];

console.log(employees);

for (let i = 0; i < employees.length; i++) {
    let email;
    email=`${employees[i].firstName}.${employees[i].lastName}@loop-it-solutions.nl`;
    employees[i].email=email;
}

console.log(employees);

splitter();
// ==========================================
// Opdracht 6 (BONUS). Bob wil dat alle e-mailadressen in kleine letters worden opgeslagen, zodat ze consistent zijn.
// Kun je je script aanpassen om dit voor elkaar te krijgen? Dit heb je nog niet geleerd, maar Google is your best friend...
// ==========================================


