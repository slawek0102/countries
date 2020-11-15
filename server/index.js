const mongoose = require('mongoose');
const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport');


const authRoutes = require('./src/routes/authRoutes')

require('./src/models/User')
require('./src/services/passport')


const keys = require('./config/secretKeys')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
const app = express()

app.use(
    cookieSession({
        maxAge: 24*60*60*1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());


require('./src/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT)