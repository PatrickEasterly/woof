// https://www.powerpetsitter.com/
// http://cutiepawsatl.com/
// https://www.precisepetcare.com/
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

//////// partials
const nav = 'partials/nav';
const staticnav = 'partials/staticnav';
//////// routes

// home
app.get('/', (req, res)=>{

    const loggedIn = true;

    res.render('index', {
        locals: {
            loggedIn
        },
        partials: {
            nav,
            staticnav
        }
    })
})

// login
app.get('/login', (req, res)=>{
    res.render('user/login', {
        locals: {},
        partials: {
            nav
        }
    })
})

///// signup
app.get('/signup', (req, res)=>{
    res.render('user/register', {
        locals: {},
        partials: {
            nav
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
// walker
app.get('/walker', (req, res)=>{
    res.render('user/walkerRegister', {
        locals: {},
        partials: {
            nav
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
// walkee
app.get('/walkee', (req, res)=>{
    res.render('user/userRegister', {
        locals: {},
        partials: {
            nav
        }
    })
})

app.get('/walkee', (req, res)=>{

})

///// services

app.get('/services', (req, res)=>{
    res.render('services', {
        locals: {},
        partials: {
            nav
        }
    })
})

// walk
app.get('/services/walk', (req, res)=>{
    res.render('services/walk', {
        locals: {},
        partials: {
            nav
        }
    })
})

// sit
app.get('/services/sit', (req, res)=>{
    res.render('services/sit', {
        locals: {},
        partials: {
            nav
        }
    })
})

// train
app.get('/services/train', (req, res)=>{
    res.render('services/train', {
        locals: {},
        partials: {
            nav
        }
    })
})

///// about
app.get('/about', (req, res)=>{
    res.render('about', {
        locals: {},
        partials: {
            nav
        }
    })
})

///// profile
app.get('/profile', (req, res)=>{
    res.render('profile', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// dogs
app.get('/profile/dogs', (req, res)=>{
    res.render('profile/dogs', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// edit
app.get('/profile/edit', (req, res)=>{
    res.render('profile/edit', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// service history
app.get('/profile/history', (req, res)=>{
    res.render('profile/history', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// info
app.get('/profile/info', (req, res)=>{
    res.render('profile/info', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// payments
app.get('/profile/payments', (req, res)=>{
    res.render('profile/payments', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

// upcoming services
app.get('/profile/upcoming', (req, res)=>{
    res.render('profile/upcoming', {
        locals: {},
        partials: {
            nav, 
            staticnav
        }
    })
})

///// become a walker
app.get('/walk', (req, res)=>{
    res.render('user/walkerRegister', {
        locals: {},
        partials: {
            nav
        }
    })
})

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})