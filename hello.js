
// Create a program that asks the user for two numbers and prints their sum.

console.log("First question")
let a, b, sum

a = 5, b = 15
sum = a + b
console.log("Length = ", a)
console.log("Breadth = ", b)
console.log("Sum = ", sum);
console.log("");

// Implement a program that calculates the area of a rectangle using given length and width.
console.log('Second question');
{
    function area(length, breadth) {
        let ans = length * breadth
        return ans
    }
    let length = 10
    let breadth = 20
    let ans = area(length, breadth)
    console.log("Length = ", length)
    console.log("Breadth = ", breadth);
    console.log("Area = ", area(length, breadth));
}
console.log('');

// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).
console.log("Third question");
{
    function vote(age) {
        console.log('Age = ', age);
        if (age >= 18) {
            console.log('Elegible for voting ');
        } else {
            console.log('Not elegible for voting');
        }
    }
    let age = 16
    vote(age)
    vote(21)
}

console.log('');

// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).
console.log('Fourth queston');
{
    function grade(mark) {
        console.log('Mark = ', mark);
        if (mark > 60) {
            console.log('Pass');
        } else {
            console.log('Fail');
        }
    }
    let mark
    mark = 81
    grade(mark)
    grade(50)
}
console.log('');

// Implement a program that checks if a user's entered number is positive, negative, or zero.
console.log('Fifth question');
{
    function num(number) {
        console.log('Number = ', number);
        if (number > 0){
            console.log('Positive');
        } else if (number < 0) {
            console.log('Negative');
        } else {
            console.log('Zero');
        }
    }
    let number
    number = -10
    num(number)
    num(10)
    num(0)
}
console.log('');

// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).
console.log('Sixth question');
{
    function ageCheck(age) {
        console.log('Age = ', age);
        if (age >= 60){
            console.log('Senior');
        } else if (age >= 20 && age < 60){
            console.log('Adult');
        } else if(age >= 13 && age <= 19){
            console.log('Teenager');
        } else if (age > 0 && age <= 12){
            console.log('Child');
        }
    }
    let age
    age = 10
    ageCheck(age)
    ageCheck(15)
    ageCheck(25)
    ageCheck(72)
}  
console.log(''); 

//  Find the square of each number in an array=[1,3,9,12,15,18,21] using loop
console.log('Seventh question')
{
    let array = [1, 3, 9, 12, 15, 18, 21]
    for( let i = 0; i < array.length; ++i){
        console.log('square of', array[i], 'is', array[i] * array[i])
    }
}
console.log('')

//  Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )
console.log('Eight question')
{
    let add = (n) => { 
        for(let i = 0; i <= n; ++i){
            if(i % 2 != 0){
                sum += i
            }
        }
        console.log('Sum of odd number between 0 and ' + n, 'is' , sum)

    }
    let n = 20
    let sum = 0 
    add(n)
    add(25)
    add(30)
}