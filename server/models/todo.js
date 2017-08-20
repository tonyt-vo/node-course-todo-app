var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
	text: {
		// Properties of this 'Todo text'
		type: String,
		required: true,
		minlength: 1,
		trim: true // Removes leading and ending whitespace
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo}; 