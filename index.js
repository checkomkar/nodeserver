import express from "express";
// import cors from "cors";
import { tableData } from "./data/tableData";
const app = express();

const cors = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
};

app.use([express.json(), cors]);

app.get("/", (req, res) => {
	return res.status(200).send({
		message: "YAY! Congratulations! Your first endpoint is working"
	});
});

app.get("/api/table", function(req, res) {
	res.status(200).send(tableData);
});

app.listen(3000);
console.log("app running on port ", 3000);
