// function calcSalary(){
//         let Hours = document.getElementById('hours');
//         let Rate = document.getElementById('rate');
//         let Salary = Hours * Rate;
//         document.getElementById("output").innerhtml = "your Salary is R" + Salary;
// }

document.getElementById("btn").addEventListener("click", () => {

  let firstName = document.getElementById('firstName').value;
  document.getElementById('fname').innerText = 'name '+ firstName;

  let lastName = document.getElementById('lastName').value;
  document.getElementById('lname').innerText = 'surname '+ lastName;

  let age = document.getElementById('age').value;
  document.getElementById('ageO').textContent = 'age '+ age;

  let dobInput = document.getElementById('dob').value;
  let dob = new Date(dobInput);
  document.getElementById('dobO').textContent = ('DOB ') + dob;

  let gender = document.getElementsByName('gender');
  for(item in gender){
    if(gender[item].checked)
      document.getElementById('genderO').textContent =  gender[item].value;
  }
  let greet = document.getElementById('greeting').value;
  document.getElementById('greetingO').textContent = greet;

  // let subject = [];
  // formElements.subject.forEach((item) => {
  //     if (item.checked) {
  //         subject.push(item.value);
  //     }
  // });
  // document.getElementById('subjectO').innerText = subject.join(', ');

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
