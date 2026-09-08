let click = document.getElementById("expense-form").querySelector("button")  // form submit button

let total = document.getElementById("total-expenses") // total amount
let foodtotal = document.getElementById("food-expenses") // total food amount
let transporttotal = document.getElementById("transport-expenses") // total transport amount

let category = document.getElementById("filter-category") // category selection to display
let display = document.getElementById("expense-list") // neeche wala table

let totalsum = 0
let foodexpenses = []
let transportexpenses = []

let data = new Array;

window.addEventListener("DOMContentLoaded",function(){
    data = JSON.parse(localStorage.getItem("data")) || [];
    if(data){
        refresh();
    }
});

function refresh(){
    totalsum = data.reduce(function(accumulator,val){
        return accumulator + val["amount"]
    },0);

    // total food expenses
    foodexpenses = data.filter(function(val){
        if (val["category"]=="Food"){
            return val["amount"]
        }
    });

    // total transport expenses
    transportexpenses = data.filter(function(val){
        if (val["category"]=="Transport"){
            return val["amount"]
        }
    });

    if(totalsum!=0 && totalsum!=NaN){
        total.textContent = totalsum
    }
    if(foodexpenses!=null && foodexpenses!=undefined){
        foodsum = foodexpenses.reduce(function(accumulator,val){
            return accumulator + val["amount"]
        },0);
        foodtotal.textContent = foodsum
    }
    if(transportexpenses!=null && transportexpenses!=undefined){
        transportsum = transportexpenses.reduce(function(accumulator,val){
            return accumulator + val["amount"]
        },0);
        transporttotal.textContent = transportsum
    }
}

click.addEventListener("click",function(e){
    e.preventDefault();
    let expensename = document.getElementById("expense-name").value
    let expenseamount = document.getElementById("expense-amount").value
    let expensecategory = document.getElementById("expense-category").value
    let expensedate = document.getElementById("expense-date").value
    let expense = new Object();
    if(expensename!=null || expensename!=undefined || expensename!=""){
        expense["expense_name"]=expensename
    };
    if(expenseamount!=null || expenseamount!=undefined || expenseamount!=""){
        expense["amount"]=Number(expenseamount)
    };
    if(expensecategory!=null || expensecategory!=undefined || expensecategory!=""){
        expense["category"]=expensecategory
    };
    if(expensedate!=null || expensedate!=undefined || expensedate!=""){
        expense["date"]=expensedate
    };
    data.push(expense);
    localStorage.setItem("data",JSON.stringify(data));
    refresh();
});

// display event listener

category.addEventListener("change",function(e){
    e.preventDefault();
    display.innerHTML="";
    data.forEach(function(val){
        if(val["category"] === category.value || "All" === category.value){
            const tr=document.createElement("tr");
            for(let key in val){
                const td = document.createElement("td");
                td.textContent = val[key];
                tr.appendChild(td);
            }
            display.appendChild(tr)
        }
    })
})

