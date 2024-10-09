// Problem 1: Manage a Todo List
// SOLVE 1

let todoList = [ "Do laundry", "Pay bills", "Walk the dog"];
//STEP 1: Add the task "Buy groceries" to the end of the list.
todoList.push("Buy groceries");
console.log(todoList);
//STEP 2: Add the task "Clean room" to the beginning of the list.
todoList.unshift("Clean room");
console.log(todoList);
//STEP 3: Remove the last task from the list and store it in a variable.
todoList.pop();
console.log(todoList);
//STEP 4: Find the index of "Clean room" and remove it from the list.
let indexOfRoom =  todoList.indexOf("Clean room");
console.log('The index of "Clean room" is at', indexOfRoom);
todoList.shift();
console.log(todoList);
//STEP 5: Print the current length of the list and log the remaining tasks.
let lengthOfList = todoList.length
console.log('The length of the list is:', lengthOfList);

// PROBLEM 1 SOLVED (MANAGE A TODO LIST)




// Problem 2: Guest List
// SOLVE 2

let guest = ["Alice", "Bob"];
//STEP 1: Add three guests to the list using push().
guest.push("Nusrat", "Suchona", "Nua");
console.log(guest);
//STEP 2: The first guest decides not to come. Remove them using shift().
guest.shift();
console.log(guest);
//STEP 3: A new guest arrives and should be added to the beginning of the list using unshift().
guest.unshift("John Doe");
console.log(guest);
//STEP 4: Find the index of the guest named "John Doe" and print it.
let indexOfJohn = guest.indexOf("John Doe");
console.log('The index of the guest named "John Doe" is:', indexOfJohn);
//STEP 5: Log the total number of guests by printing the array length. 
let totalGuests = guest.length;
console.log('The length of the array and total number of guests is:', totalGuests);

// PROBLEM 2 SOLVED (GUEST LIST)




// Problem 4: Modify an Array of Colors
// SOLVE 4

let colors = ["Red", "Blue", "Green"];
//STEP 1: Add the color "Yellow" to the end of the array using push().
colors.push("Yellow");
console.log(colors);
//STEP 2: Remove the first color using shift().
colors.shift();
console.log(colors);
//STEP 3: Add the color "Purple" to the beginning using unshift().
colors.unshift("Purple");
console.log(colors);
//STEP 4: Find the index of the color "Blue" and remove it from the array.
let indexOfColors = colors.indexOf("Blue");
console.log('The index of the color "Blue" is:', indexOfColors);
//STEP 5: Print the current array and its length.
let lengthOfArray = colors.length;
console.log('The length of the array is:', lengthOfArray);

// PROBLEM 4 SOLVED (MODIFY AN ARRAY OF COLORS)