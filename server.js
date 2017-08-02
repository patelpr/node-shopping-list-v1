const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { RecipeList } = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to RecipeList
// so there's some data to look at
RecipeList.create('chocolate milk', ['cocoa', 'milk', 'sugar'])


// when the root of this router is called with GET, return
// all current RecipeList items
app.get('/recipes', (req, res) => {
    res.json(RecipeList.get());
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});