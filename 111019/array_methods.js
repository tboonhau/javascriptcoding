//manipulate arrays with methods

const starwars = [
	"Episode XI - Batman Begins",
	"Episode V - The Empire Strikes Back",
	"Episode VI - Return of the Jedi",
	"Episode I - The Phantom Menace",
	"Episode II - Attack of The Clones",
	"Episode III - Revenge of the Sith",
	"Episode X - The Dark Knight"
];

starwars.pop(); //1. pop() - removes last item from array
starwars.push("Episode VII - The Force Awaken"); //2. push() - add an item to the end of array

starwars.shift(); //3. shift() - removes first item
starwars.unshift("Episode IV - A New Hope"); //4. unshift() - inserts new element at the start of array

console.log(starwars.length); //length of array is 7
console.log(starwars);
// [ 'Episode IV - A New Hope',
//   'Episode V - The Empire Strikes Back',
//   'Episode VI - Return of the Jedi',
//   'Episode I - The Phantom Menace',
//   'Episode II - Attack of The Clones',
//   'Episode III - Revenge of the Sith',
//   'Episode VII - The Force Awaken' ]
