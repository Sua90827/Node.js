const sessionConfig = {
    secret : "dkdkdk",
    resave : false,
    saveUninitialized: true,
    cookie : {maxAge : 24 *60 * 60000}
}
module.exports = {sessionConfig};