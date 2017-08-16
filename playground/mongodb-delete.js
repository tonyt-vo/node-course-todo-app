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

	//deleteMany: Delete all with the query
	// db.collection('Todos').deleteMany({text:'Sleep'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'Sleep'}).then((result) => {
	// 	console.log(result);
	// });


	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({name: 'Tony Vo'});
	// db.collection('Users').findOneAndDelte({
	// 	_id: new ObjectID('');
	// }).then((results) => {
	// 	console.log(JSON.stringify(results, undefined, 2));
	// });



	db.close();
	
});