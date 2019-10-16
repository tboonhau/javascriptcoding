const Hangman = function(word, userGuess) {
	this.word = word.toLowerCase().split("");
	this.userGuess = userGuess;
	this.guessedLetters = ["k", "y", "e"];
};

Hangman.prototype.getPuzzle = function() {
	let puzzle = "";
	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter) || letter === " ") {
			puzzle += letter;
		} else {
			puzzle += "*";
		}
	});

	return puzzle;
};

const try2 = new Hangman("Klay", 2);
console.log(try2.getPuzzle());
