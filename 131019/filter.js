const notes = [
	{ title: "My next trip", body: "I would like to go to Spain" },
	{ title: "Habits to work on", body: "Exercise more" },
	{ title: "Learning", body: "Learn Javascript and React" },
	{ title: "Rest", body: "Sleep" }
];

const findNotes = function(notes, query) {
	return notes.filter(function(note, index) {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
		const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
		return isTitleMatch || isBodyMatch;
	});
};

console.log(findNotes(notes, "xe"));
