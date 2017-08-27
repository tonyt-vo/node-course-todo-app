const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} =  require('./../server/models/user');
// var id = "599a71c3a67b9d373963e530";

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log(todo);
// }).catch((e) => console.log(e));

var userID = "5999ff90c1d0b9101e9b5e72";
User.findById("5999ff90c1d0b9101e9b5e72").then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
	console.log(e);
});