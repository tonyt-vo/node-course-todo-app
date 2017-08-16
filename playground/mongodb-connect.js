// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
// Connecting to MongoDB 
// 1st Param: mongodb:// + location of app + Database Name
// 2nd Param: function with possible err and db that is connected. 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false,
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Tony Vo',
		age: 19,
		location: 'Seattle'
	},  (err, result) => {
		if(err) {
			return console.log('Unable to insert User', err);
		}
		console.log(result.ops[0]._id.getTimestamp());
		// console.log(JSON.stringify(result.ops, undefined, 2));
	});


	db.close();
	
});