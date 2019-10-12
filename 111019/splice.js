const batman = [
	"Batman Begins",
	"Batman The Dark Knight",
	"Batman The Dark Knight Rises"
];

//splice(index to remove, number of item, add an item)
// batman.splice(1, 0, "Batman and Robin");
batman.splice(1, 1, "Batman and Robin");

batman[3] = "The Joker";

console.log(batman);
