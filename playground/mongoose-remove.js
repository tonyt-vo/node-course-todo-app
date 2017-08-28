const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} =  require('./../server/models/user');



// Remove All: {}
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Remove one
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59a46cc3591ca2ec1faf8f9d').then((todo) => {
	console.log(todo);
});