const passport = require('passport')

module.exports = (app)=>{

    app.get('/auth/google',
        passport.authenticate('google', { scope:
                [ 'email', 'profile' ] }
        ));

    app.get('/auth/google/success', (req, res) => {
        res.send('Wlogowales sie')
    })

    app.get( '/auth/google/callback',
        passport.authenticate( 'google', {
            successRedirect: '/auth/google/success',
            failureRedirect: '/auth/google/failure'
        }));


    app.get('/api/logout', (req, res)=>{
        req.logout()
        res.send(req.user)
    })


    app.get('/api/current_user', (req, res)=>{
        console.log(req.user)
        res.send('LoggedOut')
    })


}

