
const weight = process.argv[2];
const height = process.argv[3];


function calculateBmi (height,weight){
    const bmi = weight / (height*height);
    

     if (bmi < 18.5){
        console.log("Underweight")
     } else if (bmi==24.9){
        console.log("norma")
     } else if (bmi>25.0){
        console.log("overweight")
     }
      return bmi;
    

}
calculateBmi(height, weight);
 console.log(calculateBmi)
