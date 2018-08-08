var db = require('../db'); //reference of db.js
 
var Task = {

	createTable: function(name) {
		// id int primary key auto_increment
		const table = `create table if not exists ${name}(
						  id int primary key auto_increment,
	                      title varchar(255)not null,
	                      rank bigint(10) not null default 0,
	                      targetport bigint(10) not null default 0,
	                      records bigint(10) not null default 0,
	                      targets bigint(10) not null default 0,
	                      sources bigint(10) not null default 0
	                  )`
      	db.query(table, function(err, results, fields) {
			if (err) {
			  console.log(err.message);
			}
		})
	},
 
	getAllTasks: function(callback){
		return db.query("Select * from task",callback);
	},

	getTaskById: function(id,callback){ 
		return db.query("select * from task where Id=?",[id],callback);
	},

	addTask: function(Task,callback){
		return db.query("Insert into task values(?,?,?,?,?,?,?)",[Task.id,Task.title,Task.rank,Task.targetport,Task.records,Task.targets,Task.sources],callback);
	},

	addMultiTasks: function(Tasks, callback) {
		const multiQuery = "Insert into task (rank, targetport, records, targets, sources, title) VALUES ?";
		return db.query(multiQuery, [Tasks], callback)
	},

	deleteTask: function(id,callback){
		return db.query("delete from task where Id=?",[id],callback);
	},

	updateTask: function(id,Task,callback){
		return db.query("update task set Title=?,Status=? where Id=?",[Task.rank,Task.records,id],callback);
	}

};

Task.createTable('task')

module.exports = Task;