const firstInput = document.getElementById("fist-value") as HTMLInputElement;
const secondInput = document.getElementById("second-value") as HTMLInputElement;
const submit = document.getElementById("submit");

const add = (numA, numB) => {
  return numA + numB;
};

submit.addEventListener('click', () => {
    console.log('suma', add(firstInput.value, secondInput.value));
})
