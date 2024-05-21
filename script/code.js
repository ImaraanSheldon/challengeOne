// function calcSalary(){
//         let Hours = document.getElementById('hours');
//         let Rate = document.getElementById('rate');
//         let Salary = Hours * Rate;
//         document.getElementById("output").innerhtml = "your Salary is R" + Salary;
// }

document.getElementById("btn").addEventListener("click", () => {
  let firstName = document.getElementById
  let Hours = document.getElementById("hours").value;
  let Rate = document.getElementById("rate").value;

  if(!isNaN(Hours) && !isNaN(Rate)){
    let Salary = parseFloat(Hours * Rate);
    document.getElementById("output").innerText = "your Salary is R" + Salary;

  }else{
    document.getElementById("output").innerText = 'Please enter valid values or I break your kneecaps';
  }
//   console.log(Salary)
});

// Toggle working details display
const workingCheckbox = document.getElementById("working");
const workingDetails = document.getElementById("workingDetails");
if (workingCheckbox.checked) {
  workingDetails.style.display = "block";
} else {
  workingDetails.style.display = "none";
}
workingCheckbox.addEventListener("change", function () {
  if (this.checked) {
    workingDetails.style.display = "block";
  } else {
    workingDetails.style.display = "none";
  }
});
