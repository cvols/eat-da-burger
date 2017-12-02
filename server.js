var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

var app = express()
var port = process.env.port || 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var routes = require('./controllers/burgers_controller.js')
app.use('/', routes)

app.listen(port, function() {
    console.log('App listening on port: ' + port)
})