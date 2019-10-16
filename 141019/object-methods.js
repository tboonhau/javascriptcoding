let restaurant = {
	name: "Mcdonalds",
	guestCapacity: 60,
	guestCount: 0,
	checkAvailabilty: function(partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return partySize <= seatsLeft;
	},
	seatParty: function(partySize) {
		this.guestCount = this.guestCount + partySize;
	},
	removeParty: function(partySize) {
		this.guestCount = this.guestCount - partySize;
	}
};

restaurant.seatParty(55);
console.log(restaurant.checkAvailabilty(10));
restaurant.removeParty(15);
console.log(restaurant.checkAvailabilty(10));
