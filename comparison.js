// Problem 2: Grade Evaluation
// SOLVE 2

let score = 85;
//STEP 1: If the score is 90 or higher, assign grade "A".
if(score >= 90){
    console.log("Grade A");
}
//STEP 2: If the score is 80 or higher but less than 90, assign grade "B".
else if(score >= 80 && score < 90){
    console.log("Grade B");
}
//STEP 3: If the score is 70 or higher but less than 80, assign grade "C".
else if(score >= 70 && score < 80){
    console.log("Grade C");
}
//STEP 4: If the score is 60 or higher but less than 70, assign grade "D".
else if (score >= 60 && score < 70){
    console.log("Grade D");
}
//STEP 5: If the score is below 60, assign grade "F".
else if(score < 60){
    console.log("Grade F");    
}

// PROBLEM 2 SOLVED (GRADE EVALUATION)




// Problem 4: Weather Check
// SOLVE 4

let temperature = 15;
let isRaining = true;
//STEP 1: If the temperature is below 0°C, suggest wearing "Heavy Jacket".
if(temperature < 0){
    console.log("The temperature is below 0°C, So it would be great if you wear heavy jacket.");    
}
//STEP 2: If the temperature is between 0°C and 20°C and it's raining (isRaining === true). Suggest wearing "Raincoat and Sweater".
else if((temperature >= 0 && temperature <= 20) && isRaining === true){
    console.log("It's a soothing day and it's raining, So you better wear a raincoat and a sweater.");    
}
//STEP 3: If the temperature is above 20°C and it's sunny (isSunny === true). Suggest wearing "T-shirt and Sunglasses".
else if(temperature > 20 && (isSunny === true)){
    console.log("The temperature is above 20°C and it's sunny, So don't get sun burn and wear t-shirt and sunglasses.");    
}
//STEP 4: If none of these conditions are met, suggest wearing "Regular clothes".
else{
    console.log("The temperature is good, you can wear regular clothes.");
}

// PROBLEM 4 SOLVED (WEATHER CHECK)