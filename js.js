let formCalc = document.querySelector('input[name="textview"]');
document.querySelectorAll('.insert').forEach(function (element) {
    element.onclick = insert;
});
function insert(num) {
    num = this.textContent;
    formCalc.value = formCalc.value + num;
}
document.querySelector('.clean').onclick = function () {
    formCalc.value = '';
}
document.querySelector('.back').onclick = function () {
    let exp = formCalc.value;
    formCalc.value = exp.substring(0, exp.length - 1);
}
document.querySelector('.equal').onclick = function () {
    let exp = formCalc.value;
    if (exp) {
        formCalc.value = eval(exp);
    }
}