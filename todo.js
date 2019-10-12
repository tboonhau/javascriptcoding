const todos = [
	{ text: "Order car food", completed: true },
	{ text: "Clean kitchen", completed: false },
	{ text: "Buy food", completed: true },
	{ text: "Do work", completed: false },
	{ text: "Exercise work", completed: true }
];

const deleteTodo = (arr, todo) => {
	const index = arr.findIndex((item) => {
		return item.text.toLowerCase() === todo.toLowerCase();
	});

	arr.splice(index, 1);
};

deleteTodo(todos, "buy food");
console.log(todos);
