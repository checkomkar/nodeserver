import express from "express";
// import cors from "cors";
import { tableData } from "./data/tableData";
import Nexmo from "nexmo";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
const app = express();

const cors = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
};

app.use([express.json(), cors, bodyParser.urlencoded({ extended: false })]);
const nexmo = new Nexmo({
	apiKey: "2139d7a0",
	apiSecret: "NUtqL5aRDryHG9wK"
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
	return res.status(200).send({
		message: "YAY! Congratulations! Your first endpoint is working"
	});
});

app.get("/api/table", function(req, res) {
	res.status(200).send(tableData);
});

app.post("/api/form", (req, res) => {
	//res.send(bodyParser(req));
	//console.log(bodyParser(req));
	res.setHeader("Content-Type", "text/plain");
	res.write("you posted:\n");
	res.end(JSON.stringify(req.body, null, 2));
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "youremail@gmail.com",
			pass: "yourpassword"
		}
	});
	const mailOptions = {
		from: "omkarkamale@gmail.com", // sender address
		to: "omkarkamale@gmail.com", // list of receivers
		subject: "Registration successful", // Subject line
		html: "<h2>Aapka swagat hai</h2>" // plain text body
	};
	transporter.sendMail(mailOptions, function(err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
});

app.listen(3002);
console.log("app running on port ", 3002);
