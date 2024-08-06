function CalculadoraBMI (peso:number, altura:number):number{
    return (peso / (altura * altura))
}

    function interpretarBMI(BMI: number):string {


    if (BMI < 18.5){
        return "Esta bajo de peso"
     }

    else if (BMI >= 18.5 && BMI <= 24.9){
    return "peso normal"
 }

    else if (BMI > 25 && BMI <= 29.9){
     return "esta sobrepeso"
 }

    else{
     return "Esta obeso"
 }
  
    }


const peso:number = 80; // peso en kilogramos
const altura: number = 1.75; // altura en metros
const BMI: number = CalculadoraBMI(peso,altura);

  console.log(`BMI: ${BMI.toFixed(2)}`);
  console.log(`Interpretacion: ${interpretarBMI(BMI)}`);



    
    



 