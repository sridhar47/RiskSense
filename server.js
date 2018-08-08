const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const port = process.env.PORT || 3000

const routes = require('./routes/index');
const tasks=require('./routes/task.route');
const visualization = require('./routes/visualization.route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/task',tasks);
app.use('/viz',visualization);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		message: err.message,
		error: err
	})
})


// app start
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});