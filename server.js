var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(path.join(__dirname, "/app/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
})