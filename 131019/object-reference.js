let myAccount = {
	name: "Steph Curry",
	expenses: 0,
	income: 0
};

//add expense
let addExpense = (account, amount) => {
	account.expenses = account.expenses + amount;
};

//add expense
const addIncome = (account, amount) => {
	account.income = account.income + amount;
};

//reset account
const resetAccount = (account) => {
	account.expenses = 0;
	account.income = 0;
};

//account summary
const getAccountSummary = (account) => {
	const balance = account.income - account.expenses;
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} as expenses`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 450);
addExpense(myAccount, 400);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

//passing in object into function as argument, the argument is not
//a clone of the object of the exact same properties and values
//it is a reference to the exact same object in memory
