const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool! Please enter a password to validate.", function(input){
console.log(input)
passArray = input.split('');
var passUpperCount = 0
var passLowerCount = 0
var passNumCount = 0
for(let i = 0; i < passArray.length; i++){
    switch(passArray[i]){
     case 'A':
     case 'B':
     case 'C':
     case 'D':
     case 'E':
     case 'F':
     case 'G':
     case 'H':
     case 'I':
     case 'J':
     case 'K':
     case 'L': 
     case 'M':
     case 'N':
     case 'O':
     case 'P':
     case 'Q':
     case 'R':
     case 'S':
     case 'T':
     case 'U':
     case 'V':
     case 'W':
     case 'X':
     case 'Y':
     case 'Z':
         passUpperCount += 1
    }switch(passArray[i]){
     case 'a':
     case 'b':
     case 'c':
     case 'd':
     case 'e':
     case 'f':
     case 'g':
     case 'h':
     case 'i':
     case 'j':
     case 'k':
     case 'l': 
     case 'm':
     case 'n':
     case 'o':
     case 'p':
     case 'q':
     case 'r':
     case 's':
     case 't':
     case 'u':
     case 'v':
     case 'w':
     case 'x':
     case 'y':
     case 'z':
        passLowerCount += 1
    }switch(passArray[i]){
     case '0':
     case '1':
     case '2':
     case '3':
     case '4':
     case '5':
     case '6':
     case '7':
     case '8':
     case '9':
        passNumCount += 1
    }
}
    if((passArray.length >= 10) && (passUpperCount >= 1) && (passLowerCount >= 1) && (passNumCount >= 1)){
        console.log('Your password meets all requirements. Goodbye.')
    }else{
        console.log('Password is invalid. Your password must be at least 10 characters long and must contain one uppercase letter, one lowercase letter, and a number.')
    }

reader.close()
});