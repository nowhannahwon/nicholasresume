// alert("JS loaded!");

var Person = {
  firstName: "Nicklaus",
  midName: "Urnndy",
  lastName: "Karrey",
  fullName: this.firstName + " " + this.midName + " " + this.lastName,
  email: "niklass@geemail.kam",
  phone: "356-564-5565",
  gitHub: "http://github.com/blahblah",
  linkedIn: "www.linkedin.com/blah",
  address: "666 Love Lane Somewhere, BL 54654",

  displayName: function() {
    $("#mainheader").text(this.fullName);
  }
};

$(document).ready(Person.displayName);

