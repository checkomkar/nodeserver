"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { tableData } from "./data/tableData";
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get("/", function (req, res) {
	return res.status(200).send({
		message: "YAY! Congratulations! Your first endpoint is working"
	});
});

// app.get("/api/table", function(req, res) {
// 	res.status(200).send(tableData);
// });

app.listen(3000);
console.log("app running on port ", 3000);