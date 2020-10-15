// InLine ------------------------------------------------------------------------------------------------------

function nextInLine(arrInLine, itemInLine) {
    // Only change code below this line
    arrInLine.push(itemInLine);
    return arrInLine.shift();
    // Only change code above this line
    
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  console.log('');
  console.log('-Break-');
  console.log('');

  // Golf ---------------------------------------------------------------------------------------------------------------

  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
  function golfScore(par, strokes) {
    // Only change code below this line

  return strokes == 1 ? names[0] : strokes <= par -2 ? names[1] : strokes == par -1 ? names[2] : strokes == par ? names[3] : strokes == par + 1 ? names[4] : strokes == par + 2 ? names[5] : names[6];
    // Only change code above this line
  }
  
  console.log(golfScore(5, 4));


  console.log('');
  console.log('-Break-');
  console.log('');

  // Bj counter -----------------------------------------------------------------------------------------

  var count = 0;

function cc(card) {
  // Only change code below this line

  const low = [2, 3, 4, 5, 6];
  const high = [10, 'J', 'Q', 'K', 'A'];

  low.includes(card) ? count++ : high.includes(card) ? count-- : count = count;

  return count > 0 ? count + ' Bet' : count + ' Hold';
  // Only change code above this line
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));

console.log('');
console.log('-Break-');
console.log('');

// Profile Lookup -----------------------------------------------------------------------------------------

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line

  if (contacts.some(elProfile => elProfile['firstName'] === name)) {

      const contactsFiltered = contacts.filter(elProfile => elProfile['firstName'] === name);

      if (contactsFiltered[0].hasOwnProperty(prop)) {

          return contactsFiltered[0][prop];

      } else {

          return 'No such property';
      }
  }

  return 'No such contact';

// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));

console.log('');
console.log('-Break-');
console.log('');

// Record Collection ------------------------------------------------------------------------------

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

  if (value !== '') {

    if (prop !== 'tracks') {  

        object[id][prop] = value;

    } else {

      if (object[id].hasOwnProperty(prop)) {
 
        object[id][prop].push(value);

      } else {

        object[id][prop] = [value];
      }

    }

  } else {

    delete object[id][prop];
  }
  
  return object;
}

console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));

console.log('');
console.log('-Break-');
console.log('');

// C to F ----------------------------------------------------------------------------

function convertToF(celsius) {
  let fahrenheit = ((celsius * 9) / 5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));

console.log('');
console.log('-Break-');
console.log('');

// Reverse string -----------------------------------------------------------------------------------------------

function reverseString(str) {

  let reversedStr = str.split("");

  let i = str.length - 2;

  for(let i = str.length - 2; i >= 0; i--) {

    reversedStr.push(reversedStr[i]);
    reversedStr.splice(i, 1);
  }

  reversedStr = reversedStr.toString();

  while (reversedStr.includes(',')) {
    reversedStr = reversedStr.replace(',', '');
  }

  return reversedStr;
}

console.log(reverseString("hello"));

console.log('');
console.log('-Break-');
console.log('');

// Factorialize number -------------------------------------------------------------------------------------------

function factorialize(num) {

  let factorial = 1;

  for (let i = 2; i <= num; i++) {

    factorial = i * factorial;
  }

  return factorial;
}

console.log(factorialize(5));

console.log('');
console.log('-Break-');
console.log('');

 // Longest word in string ------------------------------------------------------------------------------------------

function findLongestWordLength(str) {

  str = str.split(' ');

  let returnedLength = str[0].length;

  for (let s of str) {

    if (s.length >= returnedLength) {

      returnedLength = s.length;
    }
  }
  
  return returnedLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log('');
console.log('-Break-');
console.log('');

// Repeat string -------------------------------------------------------------------------------------------------------

function repeatStringNumTimes(str, num) {

  if (num <= 0) {

    str = '';
    
  } else {

    let i = 1;
  
    const strInit = str;
  
    for (let i = 1; i < num; i++) {
  
      str += strInit;
    }
  }
  
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

console.log('');
console.log('-Break-');
console.log('');

// Title Case ----------------------------------------------------------------------------------------------

function titleCase(str) {

  str = str.toLowerCase();

  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {

    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }

  let returnedStr = '';

  for (let s of str) {

    if (s === str[str.length -1]) {

      returnedStr += s;
    } else {
      
      returnedStr += s + ' ';
    }
  }

  return returnedStr;
}

console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

console.log('');
console.log('-Break-');
console.log('');

// Slice and Splice

function frankenSplice(arr1, arr2, n) {

  let returnedArr = arr2.slice();

  returnedArr.splice(n, 0, ...arr1)

  return returnedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log(' ');
console.log('Break');
console.log(' ');

function getIndexToIns(arr, num) {

  let index = 0;

  for (const a of arr) {

    if (num > a) {

      index ++;
      
    }
  }

  return index;
}

console.log(getIndexToIns([40, 60], 50));

console.log(' ');
console.log('Break');
console.log(' ');

// Steamroll Array

function steamrollArray(arr) {

  let flattenArr = [];

  flattenArr = flattenArr.concat(...arr);

  return flattenArr.some(element => Array.isArray(element)) ? steamrollArray(flattenArr) : flattenArr;
  
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
