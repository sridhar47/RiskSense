const Task = require('../models/task.model');


const config = {
	add: function(req, res, data) {
		const recordData = req.body
		if(Array.isArray(recordData)) {
			Task.addMultiTasks(recordData, function(err,records){
			  if(err) {
			  	res.json(err);
			  }
			  else {
				res.send(records)
			  }
			});
		} else {
			Task.addTask(recordData, function(err,record){
			  if(err) {
			  	res.json(err);
			  }
			  else {
				res.send(record)
			  }
			});
		}
	},

	upload: function(req, res) {
		const { data } = req.body
		const TotalRecords = new Array()
		for(const key in data) {
			if(typeof(data[key]) === 'object') {
				const rankerObj = data[key]
				rankerObj.title = key
				TotalRecords.push(Object.keys(rankerObj).map((k) => rankerObj[k]))
			}
		}
		req.body = TotalRecords
		config.add(req, res)
	},

	getAllTasks: function(req, res) {
		Task.getAllTasks(function(err, records) {
			if(err) {
			  	res.json(err);
			}
			else {
				res.send(records)
			}
		})
	}
}

module.exports = config