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


	// In the find method, we can pass in things we want to look for.
	// For example: find({completed: true}), looks for all objects with a field
	// of completed set to true
	// db.collection('Todos').find({
	// 	_id: new ObjectID('59940354480084227e807b18')
	// }).toArray().then(function(docs) {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, function(err) {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({
		name: 'Tony Vo',
		age: 19
	}).toArray().then(function(docs) {
		console.log(JSON.stringify(docs, undefined, 2));
	}, function(err) {
		console.log('Unable to fetch todos', err);
	});


	db.close();
	
});