
let income = 0;
let expenses = 0;

function addExpense() {

    let name = document.getElementById("expenseInput").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    let type = prompt("Enter income or expense:");

    if (type === null) {
        return;
    }

    type = type.toLowerCase();

    let li = document.createElement("li");

    li.textContent = name + " - ₹" + amount;

    if (type === "income") {

        document.getElementById("incomeList").appendChild(li);

        income = income + amount;

    } 
    
    else if (type === "expense") {

        document.getElementById("expenseList").appendChild(li);

        expenses = expenses + amount;

    } 
    
    else {
        alert("Please enter income or expense");
        return;
    }

    document.getElementById("income").textContent = income;

    document.getElementById("totalExpense").textContent = expenses;

    document.getElementById("balance").textContent = income - expenses;

    document.getElementById("expenseInput").value = "";

    document.getElementById("expenseAmount").value = "";

}
