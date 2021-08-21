var express		= require("express");
var app			= express();
var path		= require("path");
var mongose		= require("mongoose");

var homeRoutes		= require("./routes/Home");
var userRoutes		= require("./routes/Users");
var orderRoutes		= require("./routes/Orders");
var productRoutes	= require("./routes/Products");
var settingRoutes	= require("./routes/Settings");
var customerRoutes	= require("./routes/Customers");

mongose.connect('mongodb://host.docker.internal:27017/testdb');

app.use(express.json());

app.use('/home', homeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/customers', customerRoutes);
app.use('/settings', settingRoutes);


app.use('/html', express.static(__dirname + '/html'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/html/index.html'));
});

module.exports = app;