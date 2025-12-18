//---1-- Parašyti fn kuri grąžina stataus trikampio plotą;
// Trikampiui yra paduodamas trikampio ilgis ir plotis;

// const triangle = (length, width) => {
//   console.log((length * width) / 2);
// };

// triangle(5, 4);

//---2---- Parašyt fn kuri apskaičiuoja apskritimo plotą;
//  Į fn turi būt paduodamas skritulio spindulys(puse skersmens);

// const circle = (r) => {
//   console.log(r ** 2 * 3.14);
// };

// circle(6);

//---3----Parašyti funkcija kuri atvaizduoja atvirkščia piramidę sukurtą iš #.
// PVZ.: paduodamas skaičius 4
// ####
// ###
// ##
// #

// const hashTagRepeat = (hash) => {
//   for (let i = hash; i > 0; i--) {
//     console.log("#".repeat(i));
//   }
// };

// hashTagRepeat(4);

//---4---Parašyti funkcija kuri atvaizduoja šukas iš  #.
// PVZ.: paduodamas skaičius 3
// (nesugalvojau visai. padejo chat gpt. o pasirodo labai paprastas sprendimas)

// ###
// #
// ###

// const getFigure = (num) => {
//   for (let i = 0; i < num; i = i + 1) {
//     if (i % 2 === 0) {
//       console.log("#".repeat(num));
//     } else {
//       console.log("#");
//     }
//   }
// };
// getFigure(5);

//---5-- Sukurti fn kuri priima kaip argumentą 1sk.
// sKaičius turi būt nuo 1 iki 6.
// Jeigu paduodama 11 - funkcija turi returnint tekstą "Bad provided arg";
//(cia kaip ir viskas ok GAL) kaip toliau 5.2?....)

// const numberFragment = (num) => {
//   if (num <= 6 && num >= 1) {
//     return num;
//   } else {
//     return "Bad provided arg";
//   }
// };
// const result = numberFragment(-1);
// console.log(result);

//---5.2---- (chat gpt vel i pagalba... :( ....)

// const numberGame = (num) => {
//   if (num < 1 || num > 6) {
//     return "Bad provided arg";
//   }

//   const random = Math.floor(Math.random() * 6) + 1;

//   if (num === random) {
//     return "Success " + num + " " + random;
//   } else {
//     return "You lost, try again " + num + " " + random;
//   }
// };
// const result = numberGame(6);
// console.log(result);

///--6---- Parašyti funkcija kuri atvaizduoja kvadratą sukurtą iš #.
// PVZ.: paduodamas skaičius 3
// ###
// ###
// ###

// const getSquare = (num) => {
//   for (let i = 0; i < num; i = i + 1) {
//     console.log("#".repeat(num));
//   }
// };
// getSquare(5);
