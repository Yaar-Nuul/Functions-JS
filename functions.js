//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverse(){
    let arrayOfString = ["lemon", "apple", "orange", "banana", "mango", "lime", "Lato"];

    let newArray = []
    arrayOfString.forEach(a =>{
        if(a[0] == "l" ||a[0] == "L"){
            let letterL = a.split("").sort().join("")
            newArray.push(letterL)
        }
        else{
            let letterL = a.split("").sort().join("")
            newArray.push(letterL)
        }
        console.log(`newArray inside de loop`, newArray)
    })
    console.log(`newArray`, newArray);
}
reverse()


//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function check (nums){
    
    let m = []
    nums.forEach(y =>{
        if(y >0 ){
            // console.log("positive");
            let n =  "positive"
             m.push(n)

            
        }
          else  if (y < 0){
            // {console.log("negative");
            n= "negative"
            m.push(n)
              
        }
            else {
                // console.log("Zero");
                n ="zero"
                m.push(n)
            }
            })
            return m
}
        
        console.log(check( [1, -4, 4, 9, -11, 20, 0]))




//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortBySalary() {
const employees = [
    {id: 1,name: "Ajema", salary:500},
    {id: 2,name: "Joel", salary:5000},
    {id: 3,name: "Bool", salary:3000},
    {id: 4, name:"Yaar", salary: 8000}  
];
// console.log(employees.sort((a, b) => a.salary - b.salary));
 return employees.sort((a, b) => a.salary - b.salary)


}
console.log(sortBySalary())



//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.



    let arrayOfNumber = [10, 20, 30, 40, 50];
    function multiply() {
    arrayOfNumber.forEach(num => console.log(num * 2));
    }
    multiply()
    

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function changeArray(arr) {
    const newArr = [arr];
    newArr.slice(0, 4).forEach(num => console.log(num * 8));
    newArr.slice(-2).forEach(num => console.log(num + 5));
    }
    changeArray()


