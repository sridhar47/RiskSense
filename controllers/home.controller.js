exports.homePage = function(req, res) {
	res.render('index', { title: 'Risk Sense', page: 'home' });
}