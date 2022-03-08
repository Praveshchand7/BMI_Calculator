const bmiCalc = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value) / 100;
  let amount = (weight / (height * height)).toFixed(1);
  let solution = document.querySelector("#BMI");

  let text;
  let color;

  if (amount < 18.5) {
    text = `BMI is ${amount}. you are underweight`;
    color = "warning";
  } else if (amount >= 18.5 && amount <= 24.9) {
    text = `BMI is ${amount}. you are underweight`;
    color = "normal";
  } else if (amount >= 25 && amount <= 29.9) {
    text = `BMI is ${amount}. you are underweight`;
    color = "normal";
  } else {
    text = `BMI is ${amount}. you are underweight`;
    color = "danger";
  }

  solution.textContent = text;
  solution.classList.add(color);
  console.log(text);
};
