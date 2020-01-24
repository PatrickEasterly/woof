const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3002;
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({
    extended: true
});

app.get('/', (req, res)=>{
    res.render('index', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.get('/login', (req, res)=>{
    res.render('user/login', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.get('/signup', (req, res)=>{
    res.render('user/register', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.post('/signup', parseForm, (req, res)=>{
    console.log(req.body);
    if(req.body.butt == 'I want to walk dogs') {
        res.redirect('walker')
    }
    if(req.body.butt == 'I want my dog walked') {
        res.redirect('walkee')
    }
    res.redirect('/signup')
})

app.get('/walker', (req, res)=>{
    res.render('user/walkerRegister', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.post('/walker', parseForm, (req, res)=>{
    console.log(req.body)
    if(req.body.servetype == 'train'){
        res.redirect('')
    }
    if(req.body.servetype == 'walk'){
        res.redirect('')
    }
    if(req.body.servetype == 'sit'){
        res.redirect('')
    }
    res.redirect('/walker');
})

app.get('/walkee', (req, res)=>{
    res.render('user/userRegister', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.get('/walkee', (req, res)=>{

})


app.get('/services', (req, res)=>{
    res.render('services', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

app.get('/walk', (req, res)=>{
    res.render('user/walkerRegister', {
        locals: {},
        partials: {
            nav: 'partials/nav'
        }
    })
})

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})