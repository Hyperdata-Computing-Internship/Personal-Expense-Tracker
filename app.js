let click = document.getElementById("expense-form").querySelector("button")

let expense = new Object()

click.addEventListener("click",function(){
    let expensename = document.getElementById("expense-name").value
    let expenseamount = document.getElementById("expense-amount").value
    let expensecategory = document.getElementById("expense-category").value
    let expensedate = document.getElementById("expense-date").value
    if(expensename!=null || expensename.value!=undefined || expensename.value!=""){
        expense["expense_name"]=expensename
    }
    if(expenseamount!=null || expenseamount!=undefined || expenseamount!=""){
        expense["amount"]=expenseamount
    }
    if(expensecategory!=null || expensecategory!=undefined || expensecategory!=""){
        expense["category"]=expensecategory
    }
    if(expensedate!=null || expensedate!=undefined || expensedate!=""){
        expense["date"]=expensedate
    }
    print()
})

function print(){
    console.log(expense)
}