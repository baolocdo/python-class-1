
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index');
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};