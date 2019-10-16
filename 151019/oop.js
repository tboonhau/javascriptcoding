const Person = function(firstName, lastName, age, likes = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.likes = likes;
};

//arrow function dont' bind 'this' value, it uses whatever 'this' value its parent has
Person.prototype.getBio = function() {
	let bio = `${this.firstName} is ${this.age}. `;
	this.likes.forEach((like) => {
		bio += `${this.firstName} likes ${like}. `;
	});
	return bio;
};

Person.prototype.setName = function(fullName) {
	const names = fullName.split(" ");
	this.firstName = names[0];
	this.lastName = names[1];
};

const me = new Person("Stephen", "Curry", 27, ["Basketball", "Golf"]);
me.setName("Alexis Turner");
console.log(me.getBio());

const person2 = new Person("Klay", "Thompson", 29);
console.log(person2);

//constructor function, can use with new operator, initialize the data for object
//this refers to the new empty object
//new generates new empty object for the instance, access via 'this'
