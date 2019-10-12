const notes = [
	{ title: "My next trip", body: "I would like to go to Spain" },
	{ title: "Habits to work on", body: "Exercise more" },
	{ title: "Learning", body: "Learn Javascript and React" },
	{ title: "Rest", body: "Sleep" }
];

const findNote = (notes, noteTitle) => {
	return notes.find(
		(note) => note.title.toLowerCase() === noteTitle.toLowerCase()
	);
};

const note = findNote(notes, "Learning");
console.log(note);

// const findNote = (notes, noteTitle) => {
// 	const index = notes.findIndex(
// 		(note) => note.title.toLowerCase() === noteTitle.toLowerCase()
// 	);
// 	return notes[index];
// };

//findIndex has meaningful return, must assign to a variable,
//searches for first match in array, stops search once found match
// const index = notes.findIndex(function(note, index) {
// 	console.log(note);
// 	return note.title === "Habits to work on";
// });
// console.log(index); //returns 1
