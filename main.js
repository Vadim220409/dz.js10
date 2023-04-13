function calculator() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let perimeter = 2 * (num1 + num2);
    let area = num1 * num2;
    let result = " Периметр: " + perimeter + " Площа: " + area;
    document.getElementById("result").textContent = result;
}

document.querySelector(".button").addEventListener("click", calculator);