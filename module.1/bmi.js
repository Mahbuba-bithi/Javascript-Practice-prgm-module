//input from terminal

const weight = process.argv[2];
const height = process.argv[3];

function calculateBmi ( weight,height){
   const bmi = weight / (height*height)

   return bmi;
}

console.log(calculateBmi(weight,height));
    
//TASK
//BMI ER UPOR DEPEND kore who onujayi under weight and so on 