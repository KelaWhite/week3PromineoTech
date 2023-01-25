//1	Create an array called ages that contains the following values: 
//3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages);
    //1a Programmatically subtract the value of the first element in 
    //the array from the value in the last element of the array
    var result = (ages[ages.length - 1] - ages[0]);
            console.log(result);
    //1b Add a new age to your array and repeat the step above to 
    //ensure it is dynamic. 
        ages.push(41);
            var result = (ages[ages.length - 1] - ages[0]);
                console.log(result);
    //1c Use a loop to iterate through the array and calculate the 
    //average age. 
    function getAverage (ages) {    
    for (var i = 0, sum = 0; i < ages.length; i++) {
        sum += ages[i];
      }
      console.log(sum / i);
    }
    getAverage(ages);

//2 Create an array called names that contains the following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    console.log(names);
    //2a Use a loop to iterate through the array and calculate the 
    //average number of letters per name. 
    let lengths = names.map(function(element) {
        return element.length;
    }); 
        console.log(lengths);
    let sum = lengths.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
        console.log(sum);
    for(var i = 0; i < names.length; i++){
        var average = sum / names.length;
    }
        console.log(average);
    //2b Use a loop to iterate through the array again and concatenate 
    //all the names together, separated by spaces. 
    names.forEach(function(names) {
    });
    console.log(names.join(', '));

//3 How do you access the last element of any array?
    //arrayName[arrayName.length - 1]
    console.log(names[names.length - 1]);
    
//4 How do you access the first element of any array?
    //arrayName[0]
    console.log(names[0]);

//5 Create a new array called nameLengths. Write a loop to iterate 
//over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = names.map(function(element) {
    return element.length;
}); 
names.forEach(function(element) {
    console.log(element.length);
});
names.forEach(function(element) {
    console.log(element, element.length);
});

//6 Write a loop to iterate over the nameLengths array and calculate 
//the sum of all the elements in the array. 
var thisSum = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        thisSum += nameLengths[i];
    }
    console.log(thisSum);

//7 Write a function that takes two parameters, word and n, as 
//arguments and returns the word concatenated to itself n number of 
//times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function 
//to return ‘HelloHelloHello’).
function repeatString(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  console.log(repeatString('Hello', 3));

//8 Write a function that takes two parameters, firstName and 
//lastName, and returns a full name.
function createFullName (firstName, lastName) {
    return firstName + ' ' + lastName; 
} 

console.log(createFullName('Kela', 'White'));

//9 Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.
function oneHundred(array){
    let sum = 0 
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    if (sum > 100) {
    console.log('true'); 
    } else {
        console.log('false');
    }
}
oneHundred([7, 4, 57, 9, 24])

//10 Write a function that takes an array of numbers and returns the 
//average of all the elements in the array.
function avgA(arrA) {
    let theSumA = 0
    for (let i = 0; i < arrA.length; i++) {
        theSumA += arrA[i];
    }
    console.log (theSumA / arrA.length);
}
avgA([7, 4, 57, 9, 24])

// 11 Write a function that takes two arrays of numbers and returns 
//true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.

function avgB(arrB) {
    let theSumB = 0
    for (let i = 0; i < arrB.length; i++) {
        theSumB += arrB[i];
    }
    console.log (theSumB / arrB.length);
}
avgB([7, 40, 13, 11, 19])

function isGreater() {
    let arrA = [7, 4, 57, 9, 24];
    let arrB = [7, 40, 13, 11, 19];
    let theSumA = 0
    for (let i = 0; i < arrA.length; i++) {
        theSumA += arrA[i];
    }
    let theSumB = 0
    for (let i = 0; i < arrB.length; i++) {
        theSumB += arrB[i];
    }
    if ((theSumA / arrA.length) > (theSumB / arrB.length)) {
        console.log('true');
    } else {
        console.log('false');
    }
}
isGreater()

//12 Write a function called willBuyDrink that takes a boolean 
//isHotOutside, and a number moneyInPocket, and returns true if it 
//is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log(true);
    } else {
        console.log(false);
    }
}
willBuyDrink (true, 10.51);
willBuyDrink (true, 10.49);
willBuyDrink (false, 11);
willBuyDrink (false, 9.15);

//13 Create a function of your own that solves a problem. 
    //This function will reverse the name in the string. This would 
    //be useful for data entry. If an individual enters there first 
    //name on the page, then their last, it will automatically be 
    //entered as lastName, firstName on the form. The same could hold 
    //true in the reverse if they filled out a form lastName, 
    //firstName, and you needed that data to read as their full name.

function reverseString (word1, word2) {
    return `${word2}, ${word1}`;
}

console.log(reverseString('Kela', 'White'));    
