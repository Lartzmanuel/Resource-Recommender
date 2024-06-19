
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const locals = {
        title: "Preference",
        description: "Preference page"
    }
    res.render('preference', {locals})
})

router.get('/register', (req, res) => {
    const locals = {
        title: "Register",
        description: "Register page"
    }
    res.render('register', {locals})
})

router.get('/login', (req, res)=> {
    const locals = {
        title: "login",
        description: "login page"
    }
    res.render('login', {locals})
})

router.get('/welcome', (req, res)=> {
    const locals = {
        title: "Welcome",
        description: "Welcome page"
    }
    res.render('welcome', {locals})
})

router.get('/about', (req, res)=> {
    const locals = {
        title: "About",
        description: "About page"
    }
    res.render('about', {locals})
})

router.get('/home', (req, res)=> {
    const locals = {
        title: "Home",
        description: "Home page"
    }
    res.render('home', {locals})
})
router.get('/resource', (req, res)=> {
    const locals = {
        title: "Resource",
        description: "Resource page"
    }
    res.render('resource', {locals})
})



module.exports = router;