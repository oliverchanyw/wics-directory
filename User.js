var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cis197final');
var Schema = mongoose.Schema;

var db = mongoose.connection;

var userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  major: {type: String, required: true},
  year: {type: Number, required: true},
  schools: {type: Array, required: true},
  hometown: {type: String, required: true},
  coursesTaken: {type: String, required: true},
  coursesCurr: {type: String, required: true},
  involve: {type: String, required: true},
  interests: {type: String, required: true},
});

userSchema.statics.addUser = function(firstName, lastName, email, major, year, 
	schools, hometown, coursesTaken, coursesCurr, involve, interests, cb) {
  var newUser = new this(
  	{ 
  		firstName: firstName,
		  lastName: lastName,
		  email: email,
		  major: major,
		  year: year,
		  schools: schools,
		  hometown: hometown,
		  coursesTaken: coursesTaken,
		  coursesCurr: coursesCurr,
		  involve: involve,
		  interests: interests,
  	}
  );
  newUser.save(cb);
}

userSchema.statics.addUser = function(firstName, lastName, email, major, year, 
  schools, hometown, coursesTaken, coursesCurr, involve, interests, cb) {
  var newUser = new this(
    { 
      firstName: firstName,
      lastName: lastName,
      email: email,
      major: major,
      year: year,
      schools: schools,
      hometown: hometown,
      coursesTaken: coursesTaken,
      coursesCurr: coursesCurr,
      involve: involve,
      interests: interests,
    }
  );
  newUser.save(cb);
}

userSchema.statics.getAllUsers = function (callback) {
  var users = this.find({}, function(error, women) {
    callback(error, women);
  });
  return users;
}

module.exports = mongoose.model('User', userSchema);