//Print odd numbers in an array in anonymous function
var geeek = function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  };
  geeek([1,2,3,4]);
//Print odd numbers in an array in IIFE
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
                }
            }
        })([1,2,3,4]);
//Print odd numbers in an array in arrow function
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
};
oddNumbers([1,2,3,4,5])

//Convert all the strings to title caps in a string array in anonymous function
var geek = function (str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].toUpperCase(); 
    } 
    console.log(str.join(' '));
  };
geek("hello");

//Convert all the strings to title caps in a string array in IIFE
(function (str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].toUpperCase(); 
    } 
    console.log(str.join(' '));
  })("hello");

//Convert all the strings to title caps in a string array in arrow function
captialString = (str) => {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].toUpperCase(); 
    } 
    console.log(str.join(' '));
};
captialString("hello");

//Sum of all numbers in an array in anonymous function
var geek = function(array) {
    sum =0;
    array.forEach(element => {
        sum += element;
    });
    console.log(sum);
};
geek([1,2,3,4]);

//Sum of all numbers in an array in IIFE
(function(array) {
    sum =0;
    array.forEach(element => {
        sum += element;
    });
    console.log(sum);
})([1,2,3,4]);

//Sum of all numbers in an array in arrow function
sumOfNumber = (array) => {
    sum =0;
    array.forEach(element => {
        sum += element;
    });
    console.log(sum);
};
sumOfNumber([1,2,3,4]);

//Return all the prime numbers in an array in anonymous function
var geek = function(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) primes.push(arr[i]);
    }
    console.log(primes);   
};
geek([1,2,3,4,5,6]);

//Return all the prime numbers in an array in IIFE
(function(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) primes.push(arr[i]);
    }
    console.log(primes);   
})([1,2,3,4,5,6]);

//Return all the prime numbers in an array in arrow function
primeNumber = (arr) => {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) primes.push(arr[i]);
    }
    console.log(primes);
};
primeNumber([1,2,3,4,5,6]);

//Return all the palindromes in an array in anonymous function
var geek = function(arr) {
    var palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const reversedElement = element.split('').reverse().join('');
        if (element === reversedElement) {
            palindromes.push(element);
        }
    }
    console.log(palindromes);
};
geek(["madam", "test", "racecar", "apple", "12321", "hello"]);

//Return all the palindromes in an array in IIFE
(function(arr) {
    var palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const reversedElement = element.split('').reverse().join('');
        if (element === reversedElement) {
            palindromes.push(element);
        }
    }
    console.log(palindromes);
})(["madam", "test", "racecar", "apple", "12321", "hello"]);

//Return all the palindromes in an array in arrow function
palindromes = (arr) => {
    var palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const reversedElement = element.split('').reverse().join('');
        if (element === reversedElement) {
            palindromes.push(element);
        }
    }
    console.log(palindromes);
};
palindromes(["madam", "test", "racecar", "apple", "12321", "hello"]);

//Return median of two sorted arrays of the same size in anonymous function
var findMedian = function(arr1, arr2) {
    const totalLength = arr1.length + arr2.length;
    let i = 0, j = 0, mergedArray = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    if (totalLength % 2 === 0) {
      console.log((mergedArray[totalLength / 2 - 1] + mergedArray[totalLength / 2]) / 2);
    } else {
      console.log(mergedArray[Math.floor(totalLength / 2)]);
    }
  };
findMedian([1, 3, 5], [2, 4, 6]);

//Remove duplicates from an array in anonymous function
var duplicates = function(arr) {
    let uniqueElements = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniqueElements.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  console.log(uniqueElements);
}
duplicates([1,2,2,3,4,3,5,6]);

//Rotate an array by k times in anonymous function
var reversedElement = function(arr,k) {
    k = k % arr.length; 
  let result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    let newPosition = (i + k) % arr.length;
    result[newPosition] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
  console.log(arr)
};
reversedElement([1, 2, 3, 4, 5, 6, 7], 3);
