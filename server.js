'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const bcrypt = require('bcrypt'); // Bcrypt
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const otherPtextPassword = 'pass123';




//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
	console.log(hash);
	// $2b$12$bJl0wbqvXnNTsOsfZE6Vc.5fOkmwpGllRf1YF6grHSt8vP08gU852
	bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
		console.log(res); // true || false
	});

});



//END_ASYNC

//START_SYNC

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
