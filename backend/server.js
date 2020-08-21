const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/key');

const { User } = require('./model/user');

mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoURI,
		{useNewUrlParser: true}).then(() => console.log('DB connected'))
							   .catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, '../src')));

app.post('/api/users/register', (req, res) => {
	const user = new User(req.body)
	user.save((err, userData) => {
		if(err) return res.json ({ success: false, err});
		return res.status(200).json({
			success: true 
		});
	});
})


const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});