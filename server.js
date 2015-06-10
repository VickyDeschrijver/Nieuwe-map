/* server.js */

// module dependencies
var application_root    =   __dirname,
    express =   require('express'),
    path    =   require('path'),
    mongoose    =   require('mongoose'),
    bodyParser  =   require('body-parser')

// server
var app =   express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(application_root, 'app')));

// start server op poort: 8080
var port    =   8080;
app.listen(port, function() {
    console.log('Express server luistert op poort %d in %s mode',port,app.settings.env);
})
/*

// connect to mongodb met mongoose
mongoose.connect('mongodb://localhost/frits');

var Opleiding    =   new mongoose.Schema({
    oplCode:    Number,
    oplNaam:    String,
    beschrijving:   String,
    duur:       Date
})

// Cursist Schema
var Cursist    =   new mongoose.Schema({
    iklNr:      Number,
    rrNr:       Number,
    familieNaam:    String,
    voorNaam:   String,
    adres:      String,
    email:      String,
    telNr:      Number,
    foto:       String,
    opleiding: {
        opl:    [Opleiding],
        start:      Date,
        eind:       Date,
        geslaagd:   Boolean
    }
})

// MongoDB Model
var CursistModel    =   mongoose.model('Cursist', Cursist);
var OpleidingModel  =   mongoose.model('Opleiding', Opleiding);


// ROUTES==================================================

app.get('/api', function(request, response) {
    response.send('DB is actief');
})

// GET /api/opleidingen alle studenten tonen
app.get('/api/students', function(request, response) {
    return CursistModel.find(function(err, studenten) {
        if(!err) {
            response.send(studenten);
        } else {
            return console.log(err);
        }
    })
    return OpleidingModel.find(function(err, opleidingen) {
        if(!err) {
            response.send(opleidingen);
        } else {
            return console.log(err);
        }
    })
})


*/
