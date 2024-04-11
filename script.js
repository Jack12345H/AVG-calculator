//event listener
document.getElementById("calc-btn").addEventListener("click", calc);

//Event function
function calc() {
  //input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  //process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let decimal = num1.toFixed(2);
  let tangent = Math.tan(num3);
  let random = Math.random() * (num2 - num1 + 1) + num1;
  random = Math.floor(random);

  //output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("prod-out").innerHTML = product;
  document.getElementById("remainder").innerHTML = remainder;
  document.getElementById("power").innerHTML = power;
  document.getElementById("decimal").innerHTML = decimal;
  document.getElementById("tangent").innerHTML = tangent;
  document.getElementById("random").innerHTML = random;
}

// To get a random # between x and y.
// let random = Math.random() * ( y - x + 1) + x
// for e.g.  A random number between 1 and 5:
// let myRand = Math.random() * 5 + 1
// myRand = Math.floor(myRand);
