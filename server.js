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

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    const item = collectibles[index];


    if (item) {
        res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`); //I know it kinda looks weird to have two "$$" in a row, but i use one to actually be in the response because I think it looks better to have a "$" before the number which represents the prics
      } else {
        res.send("This item is not yet in stock. Check back soon!");
      }
    });


app.listen(3000, () => {
    console.log('listening on port 3000')
})