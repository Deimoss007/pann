var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, +Date.now() + '.' + ext(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Spirit Growth Network'});
})
app.get('/signup', function(req, res) {
    res.render('index', { title: 'Spirit Growth Network ~ Regístrarse' });
})
app.get('/signin', function(req, res) {
    res.render('index', { title: 'Spirit Growth Network ~ Iniciar Sesión' });
})

app.get('/api/pictures',function(req, res, next) {
    var pictures = [
        {
            user: {
                username: 'Edwin Jorge',
                avatar: 'https://i.pinimg.com/236x/15/19/68/1519686a1af0045304b154c14f8f4881--google-search.jpg'
            },
            url: 'ElSeñorEsMiSalvador.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
                username: 'Edwin Jorge',
                avatar: 'https://i.pinimg.com/236x/15/19/68/1519686a1af0045304b154c14f8f4881--google-search.jpg'
            },
            url: 'ElSeñorEsMiSalvador.jpg',
            likes: 77,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        },
    ];
    setTimeout( function (params) {
        res.send(pictures);        
    }, 2000)   
});

app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.send(500, "Error uploading file");
        }
        res.send('File uploaded');
    })
})

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un problemita, pide le ayuda a Dios :D'), process.exit(1);

    console.log('Gracias Señor, porque todo está bien');

})