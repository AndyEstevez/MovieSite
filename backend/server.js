const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('./config/key');

const { User } = require('./model/user');
const { auth } = require('./middleware/auth');


mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoURI,
		{useNewUrlParser: true}).then(() => console.log('DB connected'))
							   .catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../src')));

app.get('/api/user/auth', auth, (req, res) => {
	res.status(200).json({
		_id: req._id,
		isAuth: true,
		email: req.user.email,
		name: req.user.name,
		lastname: req.user.lastname,
		role: req.user.role
	})
})




app.post('/api/users/register', (req, res) => {
	const user = new User(req.body)
	user.save((err, userData) => {
		if(err) return res.json ({ success: false, err});
		return res.status(200).json({
			success: true 
		});
	});
})


app.post('/api/user/login', (req, res) => {
	// find the email
	User.findOne({ email: req.body.email }, (err, user) => {
		if(!user) return res.json({
			loginSuccess: false,
			message: "Authentication failed, email address not found"
		});
	

	// comparePassword
	user.comparePassword(req.body.password, (err, isMatch) => {
		if(!isMatch)  return res.json({ loginSuccess: false, 
										message: "wrong password"})
		
	


	// generate Token
	user.generateToken((err, user) => {
		if(err) return res.status(400).send(err);
		res.cookie("w_auth", user.token)
			.status(200)
			.json({
				loginSuccess: true,
				userId: user._id
			});
		});
	});
});

})

app.get('/api/user/logout', auth, (req, res) => {
	User.findOneAndUpdate({_id: req.user._id}, { token: ""}, (err, doc) => {
		if(err) return res.json({ success: false, err })
		return res.status(200).send({
			success: true
		})
	})
})

const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});