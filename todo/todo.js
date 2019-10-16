const todos = [
	{ text: "Order car food", completed: true },
	{ text: "Clean kitchen", completed: false },
	{ text: "Buy food", completed: true },
	{ text: "Do work", completed: false },
	{ text: "Exercise work", completed: true }
];

const getThingsToDo = (list) => {
	return list.filter((item) => item.completed === false);
};

console.log(getThingsToDo(todos));
//returns
// [ { text: 'Clean kitchen', completed: false },
//   { text: 'Do work', completed: false } ]

// deleteTodo(todos, "buy food");
// console.log(todos);

// const deleteTodo = (arr, todo) => {
// 	const index = arr.findIndex((item) => {
// 		return item.text.toLowerCase() === todo.toLowerCase();
// 	});

// 	arr.splice(index, 1);
// };
