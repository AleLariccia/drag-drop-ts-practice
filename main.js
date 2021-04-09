var firstInput = document.getElementById("fist-value");
var secondInput = document.getElementById("second-value");
var submit = document.getElementById("submit");
var add = function (numA, numB) {
    return numA + numB;
};
submit.addEventListener('click', function () {
    console.log('suma', add(firstInput.value, secondInput.value));
});
