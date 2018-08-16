//Node and express requirements
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

//Static file serving for images in public/img
app.use('/static', express.static(path.join(__dirname, 'app/public')));

//Routing access for api link
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server connection confirmation in node
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});