module.exports.index = (application, req, res) => {

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(5, (error, result) => {
		res.render("home/index", {noticias : result});
	});

	
}