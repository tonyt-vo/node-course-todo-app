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


	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5994a051bc91ec0e40d59e89')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5994a2f5b1b69e0fb4c828bd')
	}, {
		$set: {
			name: 'Tony Vo'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.close();
	
});