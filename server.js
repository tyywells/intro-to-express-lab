const express = require('express')

const app = express()

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// });

app.get('/greetings/:username', (req,res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`)
})

app.get('/roll/:dice', (req, res) => {
    const dice = req.params.dice;
    maxNumber = parseInt(dice, 10);
    const randomNum = Math.floor(Math.random() * (maxNumber +1));

    if(Number.isNaN(Number(dice))) {
        res.send('You must specify a number.')
    } else {
        res.send (`You rolled a ${randomNum}`)
    }
});



app.listen(3000, () => {
    console.log('listening on port 3000')
})