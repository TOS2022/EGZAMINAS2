/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(first, second) {
    this.first = first;
    this.second = second;
  
    this.sum = () => {
      return this.first + this.second;
    };
    this.subtraction = () => {
      return this.first - this.second;
    };
    this.multiplication = () => {
      return this.first * this.second;
    };
    this.division = () => {
      return this.first / this.second;
    };
  }
  
  const newCalc = new Calculator(9, 9);
  
  console.log("Sum: ", newCalc.sum());
  console.log("Subtraction: ", newCalc.subtraction());
  console.log("Multiplication: ", newCalc.multiplication());
  console.log("Division: ", newCalc.division());