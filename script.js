document.querySelectorAll('.insert').forEach(function (element) {
    element.addEventListener('click', insert);
});
let formCalc = document.querySelector('input[name=textview]');
function insert(num) {
    num = this.textContent;
    formCalc.value = formCalc.value + num;
}
document.querySelector('.clean').addEventListener('click', function () {
    formCalc.value = '';
});
document.querySelector('.back').addEventListener('click', function () {
    formCalc.value = formCalc.value.substring(0, formCalc.value.length - 1);
});
document.querySelector('.equal').addEventListener('click', function () {
    if (formCalc.value) {
        formCalc.value = eval(formCalc.value);
    }
});