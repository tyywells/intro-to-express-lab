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

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

app.get('/shoes', (req, res) => {
  const minPrice = req.query.minPrice
  const maxPrice = req.query.maxPrice
  const type = req.query.type
  let allShoes = shoes

  if (minPrice) {
      allShoes = shoes.filter(function (shoe) {
          return shoe.price > Number(minPrice)
      })
  }

  if (maxPrice) {
      allShoes = shoes.filter(function (shoe) {
          return shoe.price < Number(maxPrice)
      })
  }

  if (type) {
      allShoes = shoes.filter(function (shoe) {
          return shoe.type === type
      })
  }

  res.json(allShoes)
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})