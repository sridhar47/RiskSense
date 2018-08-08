const Task = require('../models/task.model');

const config = {
	map: function(req, res) {
		Task.getAllTasks(function(err, records) {
			if(err)
				res.send(err)
			else {
				res.render('index', {records: records, page: 'visualization'})
			}
		});
	}
}

module.exports = config